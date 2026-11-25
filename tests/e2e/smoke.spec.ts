import { expect, test } from "@playwright/test";
import { readdir } from "node:fs/promises";
import path from "node:path";

async function htmlPages(directory: string, prefix = ""): Promise<string[]> {
  const pages: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) pages.push(...await htmlPages(path.join(directory, entry.name), relative));
    else if (entry.name.endsWith(".html")) pages.push(relative);
  }
  return pages;
}

test("všechny vytvořené stránky se načtou pod cestou projektu", async ({ page }) => {
  test.skip(process.env.PLAYWRIGHT_SEARCH_MODE !== "pagefind", "Kontrola vyžaduje produkční build.");
  test.setTimeout(120_000);
  const failures: string[] = [];
  let current = "";
  page.on("pageerror", (error) => failures.push(`${current}: ${error.message}`));
  page.on("response", (response) => {
    const url = new URL(response.url());
    if (url.origin === "http://127.0.0.1:4322" && response.status() >= 400) failures.push(`${current}: ${response.status()} ${url.pathname}`);
  });
  for (const file of await htmlPages(path.resolve("dist"))) {
    current = file;
    const route = file === "index.html" ? "" : file.replace(/\/index\.html$/, "/");
    const response = await page.goto(route, { waitUntil: "load", timeout: 15_000 });
    if (!response?.ok()) failures.push(`${file}: HTTP ${response?.status() ?? "bez odpovědi"}`);
    if (!new URL(page.url()).pathname.startsWith("/itworkshop/")) failures.push(`${file}: cesta neobsahuje /itworkshop/`);
    const lowContrast = await page.evaluate(() => {
      const parse = (value: string) => value.match(/[\d.]+/g)?.map(Number) ?? [];
      const luminance = (rgb: number[]) => {
        const linear = rgb.slice(0, 3).map((channel) => {
          const c = channel / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * (linear[0] ?? 0) + 0.7152 * (linear[1] ?? 0) + 0.0722 * (linear[2] ?? 0);
      };
      return Array.from(document.querySelectorAll<HTMLElement>("button, a.button, a.primary, input[type=submit], input[type=button]"))
        .filter((element) => {
          const style = getComputedStyle(element);
          const background = parse(style.backgroundColor);
          const foreground = parse(style.color);
          if (background.length < 3 || foreground.length < 3 || background[3] === 0) return false;
          const [r = 0, g = 0, b = 0] = background;
          if (b <= r * 1.1 || b <= g * 1.05) return false;
          const light = Math.max(luminance(background), luminance(foreground));
          const dark = Math.min(luminance(background), luminance(foreground));
          return (light + 0.05) / (dark + 0.05) < 4.5;
        })
        .map((element) => element.textContent?.trim() || element.getAttribute("value") || "tlačítko");
    });
    failures.push(...lowContrast.map((label) => `${file}: nízký kontrast tlačítka ${label}`));
  }
  expect(failures).toEqual([]);
});

test("hlavní trasy se načtou a nehlásí chyby v konzoli", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  const routes = [
    ["/", "Tvůj vstup do světa IT"],
    ["/temata/", "Co tě zajímá?"],
    ["/temata/programovani/", "Programování"],
    ["/kurzy/", "Nauč se něco nového"],
    ["/kurzy/vyzkousej-si-python/", "Vyzkoušej si Python"],
    ["/clanky/", "Příběhy a principy technologií"],
    ["/navody/", "Vyzkoušej si to krok za krokem"],
    ["/kvizy/it-kviz/", "IT kvíz"],
    ["/vyzvy/robotova-cesta/", "Robotova nejkratší cesta"],
    ["/laborator/binarni/", "Binární laboratoř"],
    ["/laborator/rgb/", "Barevná laboratoř"],
    ["/laborator/robot/", "Robot v bludišti"],
    ["/odkazy/", "Kam dál?"],
    ["/workshopy/prvni-kod/", "První kód"],
    ["/o-projektu/", "Technologie se učíme tím, že je tvoříme"],
    ["/soukromi/", "Soukromí a bezpečné používání"],
  ] as const;

  await page.goto("");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: testInfo.outputPath("homepage-1440.png"), fullPage: true });
  for (const [route, heading] of routes) {
    const response = await page.goto(route.slice(1));
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1").first(), route).toContainText(heading);
  }
  expect(errors).toEqual([]);
});

test("úvodní stránka nepřetéká v šířkách 360, 768 a 1440 px", async ({ page }) => {
  await page.goto("");
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), { message: `horizontální přetékání při ${width}px` }).toBe(true);
  }
});

test("mobilní nabídka jde otevřít, použít a zavřít", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("");
  const toggle = page.getByRole("button", { name: "Otevřít navigaci" });
  await toggle.click();
  const menu = page.getByRole("navigation", { name: "Mobilní navigace" });
  await expect(menu).toBeVisible();
  await menu.getByRole("link", { name: "Materiály" }).click();
  await expect(page).toHaveURL(/\/materialy\/$/);
  await expect(menu).toBeHidden();
});

test("skip link a mobilní nabídka fungují z klávesnice", async ({ page }) => {
  await page.goto("");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.setViewportSize({ width: 360, height: 800 });
  const toggle = page.getByRole("button", { name: "Otevřít navigaci" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("navigation", { name: "Mobilní navigace" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobilní navigace" })).toBeHidden();
  await expect(toggle).toBeFocused();
});

test("neexistující stránka ukáže vlastní 404", async ({ page }) => {
  const response = await page.goto("stranka-ktera-neexistuje/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Tady jsme trochu zabloudili" })).toBeVisible();
});

test("Python je první kurz a jeho zdroj se dá stáhnout", async ({ page }) => {
  await page.goto("");
  await expect(page.locator(".content-band .content-card h3").first()).toContainText("Vyzkoušej si Python");
  await page.goto("kurzy/");
  await expect(page.locator(".listing-grid .content-card h3").first()).toContainText("Vyzkoušej si Python");
  await page.goto("kurzy/vyzkousej-si-python/");
  const launch = page.getByRole("link", { name: /Otevřít v LiaScriptu/ });
  await expect(launch).toHaveAttribute("href", "https://liascript.github.io/course/?https://sspu-opava.github.io/itworkshop/courses/python/README.md");
  await expect(launch).toHaveCSS("color", "rgb(255, 255, 255)");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Stáhnout zdroj LiaScript" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("README.md");
});

test("detail doporučuje jiné materiály ze stejného tématu", async ({ page }) => {
  await page.goto("kurzy/vyzkousej-si-python/");
  const related = page.locator(".related-content .content-card");
  await expect(page.getByRole("heading", { name: "Kam pokračovat?" })).toBeVisible();
  expect(await related.count()).toBeGreaterThan(0);
  const links = await related.locator("h3 a").evaluateAll((anchors) => anchors.map((anchor) => (anchor as HTMLAnchorElement).pathname));
  expect(links).not.toContain("/itworkshop/kurzy/vyzkousej-si-python/");
  expect(new Set(links).size).toBe(links.length);
});

test("filtry aktualizují výsledky, sdílitelnou URL i reset", async ({ page }) => {
  await page.goto("materialy/");
  const topic = page.locator("select[name=topic]");
  await topic.selectOption("programovani");
  await page.getByRole("button", { name: "Použít filtry" }).click();
  await expect(page).toHaveURL(/topic=programovani/);
  const visibleCards = page.locator("[data-card]:visible");
  await expect(visibleCards).toHaveCount(await page.locator('[data-card][data-topic="programovani"]').count());
  await page.getByRole("button", { name: "Vymazat" }).click();
  await expect(page).not.toHaveURL(/topic=/);
  await expect(visibleCards).toHaveCount(await page.locator("[data-card]").count());
  await topic.selectOption("ai");
  await page.locator("select[name=difficulty]").selectOption("pokrocily");
  await page.getByRole("button", { name: "Použít filtry" }).click();
  await expect(page.locator("[data-filter-empty]")).toBeVisible();
  await expect(visibleCards).toHaveCount(0);
});

test("kvíz ukazuje vysvětlení, skóre a dovolí nový pokus", async ({ page }) => {
  await page.goto("kvizy/it-kviz/");
  const firstQuestion = page.locator("[data-question]").first();
  await firstQuestion.locator('input[data-correct="true"]').check();
  await expect(firstQuestion.locator("[data-feedback]")).toContainText("Správně.");
  await expect(page.locator("[data-quiz-score]")).toContainText("1 z 1");
  await page.getByRole("button", { name: "Začít znovu" }).click();
  await expect(firstQuestion.locator("[data-feedback]")).toBeHidden();
  await expect(page.locator("[data-quiz-score]")).toBeEmpty();
});

test("samostatné připravené kvízy vyhodnotí odpovědi", async ({ page }) => {
  test.setTimeout(90_000);
  const tests = ["01-hardware", "02-software", "03-programovani", "04-grafika", "05-operacni-systemy", "06-internet-site", "07-robotika", "08-ai", "09-kyberbezpecnost", "10-videohry-multimedia"];
  for (const name of tests) {
    await page.goto(`it-testy/${name}/index.html`);
    await expect(page.locator("#test fieldset"), name).toHaveCount(10);
    await page.getByRole("button", { name: "Vyhodnotit test" }).click();
    await expect(page.locator("#test [role=status]"), name).toContainText("Výsledek:");
    await page.getByRole("button", { name: "Nový pokus" }).click();
    await expect(page.locator("#test [role=status]"), name).toBeEmpty();
  }
  const quizzes = ["cmd-lab/quiz.html", "html-css/quiz.html", "creative-coding/p5/quiz.html", "creative-coding/turtle/quiz.html", "virtualbox-linux/quiz.html", "experimenty-ai/suno/quiz.html", "experimenty-ai/blender/quiz.html", "experimenty-ai/notebooklm/quiz.html"];
  for (const route of quizzes) {
    await page.goto(route);
    const groups = await page.locator("input[type=radio]").evaluateAll((inputs) => [...new Set(inputs.map((input) => (input as HTMLInputElement).name))]);
    expect(groups.length, route).toBeGreaterThan(0);
    for (const name of groups) await page.locator(`input[type=radio][name="${name}"]`).first().check();
    await page.getByRole("button", { name: "Vyhodnotit" }).click();
    await expect(page.locator("#result, #score"), route).toContainText("Výsledek:");
  }
});

test("připravené editory a simulátory reagují na ovládání", async ({ page }) => {
  test.setTimeout(45_000);
  await page.goto("cmd-lab/index.html");
  await page.locator("#cmd").fill("hostname");
  await page.getByRole("button", { name: "Spustit" }).click();
  await expect(page.locator("#out")).toContainText("LAB-PC");

  await page.goto("virtualbox-linux/planovac.html");
  await page.locator("#guest").fill("14");
  await page.getByRole("button", { name: "Vyhodnotit" }).click();
  await expect(page.locator("#result")).toContainText("Příliš málo RAM");
  await page.goto("virtualbox-linux/snimky.html");
  await page.locator("#file").check();
  await page.getByRole("button", { name: "Vytvořit snímek" }).click();
  await page.locator("#file").uncheck();
  await page.getByRole("button", { name: "Obnovit snímek" }).click();
  await expect(page.locator("#file")).toBeChecked();

  await page.goto("html-css/playground.html");
  await expect(page.locator("#preview")).toHaveAttribute("sandbox", "allow-same-origin");
  await page.locator("#stage").selectOption("2");
  const preview = page.frameLocator("#preview");
  await expect(preview.locator("img")).toHaveCount(2);
  await expect.poll(() => preview.locator("img").first().evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  await page.locator("#html").fill("<h1>Moje stránka</h1><script>document.body.dataset.ran = 'yes'</script>");
  await page.getByRole("button", { name: "Zobrazit výsledek" }).click();
  await expect(preview.getByRole("heading", { name: "Moje stránka" })).toBeVisible();
  await expect(preview.locator("body")).not.toHaveAttribute("data-ran", "yes");

  for (const mode of ["p5", "turtle"]) {
    await page.goto(`creative-coding/${mode}/index.html`);
    await expect(page.locator("#code")).not.toBeEmpty();
    await page.getByRole("button", { name: "Spustit" }).click();
    await expect(page.locator('#output iframe[title="Výsledek programu"]')).toBeAttached();
    await page.getByRole("button", { name: "Zastavit" }).click();
    await expect(page.locator("#output")).toContainText("Běh zastaven");
  }
});

test("RGB zobrazuje krajní hodnoty a správný HEX", async ({ page }) => {
  await page.goto("laborator/rgb/");
  await page.getByRole("button", { name: "Žlutá" }).click();
  await expect(page.locator("[data-hex-color]")).toHaveText("#FFFF00");
  await expect(page.locator("[data-rgb-color]")).toHaveText("RGB (255, 255, 0)");
  for (const channel of ["red", "green", "blue"]) {
    await page.locator(`[data-channel="${channel}"]`).evaluate((element: HTMLInputElement) => {
      element.value = "0";
      element.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
  await expect(page.locator("[data-hex-color]")).toHaveText("#000000");
});

test("binární převodník zvládá 42, A a 255", async ({ page }) => {
  await page.goto("laborator/binarni/");
  await page.getByRole("button", { name: "Nastavit 42" }).click();
  await expect(page.locator("[data-binary-value]")).toHaveText("00101010");
  await expect(page.locator("[data-hex-value]")).toHaveText("2A");
  await page.getByRole("button", { name: "Nastavit 65" }).click();
  await expect(page.locator("[data-ascii-value]")).toHaveText("A");
  await page.getByRole("button", { name: "Nastavit 255" }).click();
  await expect(page.locator("[data-decimal-value]")).toHaveText("255");
  await expect(page.locator("[data-hex-value]")).toHaveText("FF");
});

test("robot zastaví kolizi, umí reset a dokončí cestu", async ({ page }) => {
  await page.goto("laborator/robot/");
  await page.getByRole("button", { name: "Přidat: vpřed" }).click();
  await page.getByRole("button", { name: "Jeden krok" }).click();
  await expect(page.locator("[data-robot-status]")).toContainText("Náraz");
  await page.getByRole("button", { name: "Resetovat" }).click();

  const board = page.locator("[data-robot-board]");
  await board.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("[data-robot-queue] li").first()).toHaveText("Otočit vpravo");
  await page.getByRole("button", { name: "Resetovat" }).click();

  const route: Array<[string, number]> = [
    ["Otočit vpravo", 1], ["Přidat: vpřed", 1], ["Otočit vlevo", 1],
    ["Přidat: vpřed", 3], ["Otočit vpravo", 1], ["Přidat: vpřed", 1],
    ["Otočit vlevo", 1], ["Přidat: vpřed", 2], ["Otočit vpravo", 1],
    ["Přidat: vpřed", 3],
  ];
  for (const [name, count] of route) {
    for (let i = 0; i < count; i += 1) await page.getByRole("button", { name }).click();
  }
  await page.getByRole("button", { name: "Spustit frontu" }).click();
  await expect(page.locator("[data-robot-status]")).toContainText("dorazil do cíle", { timeout: 10_000 });
});

test("Pagefind prohledává produkční náhled; vývojový režim ukazuje vysvětlení", async ({ page }) => {
  await page.goto("vyhledavani/");
  await page.getByRole("searchbox", { name: "Co chceš objevit?" }).fill("Python");
  await page.getByRole("button", { name: "Hledat" }).click();
  if (process.env.PLAYWRIGHT_SEARCH_MODE === "pagefind") {
    await expect(page.locator(".search-results")).toContainText("Vyzkoušej si Python", { timeout: 12_000 });
    await expect(page.locator(".search-result-type").first()).toBeVisible();
    const firstResult = page.locator(".search-results a").first();
    await expect(firstResult).toHaveAttribute("href", /^\/itworkshop\//);
  } else {
    await expect(page.locator(".search-fallback")).toBeVisible();
  }
});
