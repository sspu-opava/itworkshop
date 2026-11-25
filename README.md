# ITWORKSHOP.CZ

Český statický portál pro první zkušenosti s informačními technologiemi. Obsahuje tematické rozcestníky, kurzy, články, návody, kvízy, programátorské výzvy a tři interaktivní laboratoře. Web nevyžaduje účet a neodesílá výsledky.

## Technologie

- Astro 7.4.13, TypeScript 6.0.3 (strict), Tailwind CSS 4.3.5 a Pagefind 1.6.0.
- Node.js 26.13.1 je vývojová verze určená v `.nvmrc`; `package.json` podporuje Node.js `>=22.23.4 <27` a npm `>=10`.
- Obsah používá Astro collections s validací Zod. Výstup je statický, s koncovými lomítky a doménou `https://itworkshop.cz`.
- Kurz Pythonu je uložen v `public/courses/python/README.md`; po kliknutí se otevře v LiaScriptu a Python běží v prohlížeči přes veřejnou šablonu Pyodide.

## Spuštění ve Windows CMD

Použij Node.js 26.13.1 LTS a npm 12.0.2. V kořeni projektu spusť:

```bat
npm ci
npm run dev
```

Vývojový server zobrazí adresu, obvykle `http://localhost:4321/`. Ukonči ho klávesami `Ctrl+C`.

## Kontroly a sestavení

```bat
npm run check
npm test
npm run build
npm run check:links
npm run preview
```

`npm run build` vytvoří statický web do `dist/` a doplní český fulltextový index Pagefind. `npm run check:links` zkontroluje lokální odkazy a soubory ve vytvořeném buildu. `npm run preview` zobrazí produkční výstup. Playwright potřebuje nainstalovaný prohlížeč Chromium:

```bat
npx playwright install chromium
npm run test:e2e
npm run test:e2e:preview
```

`npm run test:e2e` ověřuje vývojový server a jeho vysvětlení, když Pagefind index ještě neexistuje; pokud na `http://127.0.0.1:4321/` už běží Astro dev server, použije ho a ponechá ho běžet. `npm run test:e2e:preview` vyžaduje předchozí `npm run build` a ověřuje plnotextové hledání v produkčním náhledu.

## Obsah a spolupráce

Před přidáním materiálu si přečti [průvodce obsahem](docs/CONTENT_GUIDE.md), [plán](docs/PLAN.md) a [záznam rozhodnutí](docs/DECISIONS.md). Změny obsahu drž v příslušné kolekci pod `src/content/`; `public/courses/` obsahuje soubory obsluhované přímo jako statické soubory.

Doporučený postup je větev pro jednu sadu změn, lokální kontroly, pull request do `main` a kontrola výstupu CI. Nepřidávej smyšlené termíny, kontakty, data zveřejnění ani ověřovací data externích zdrojů. Licence vlastního obsahu a právní údaje provozovatele musí před zveřejněním potvrdit vlastník projektu.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` kontroluje pull requesty a sestavuje web. Při pushi do `main` nebo ručním spuštění workflow z větve `main` předá ověřený build do GitHub Pages. Tato kopie projektu zatím nebyla nahrána do GitHubu a web nebyl zveřejněn.

Správce repozitáře musí v **Settings → Pages → Build and deployment** vybrat **GitHub Actions**. Před nasazením vlastní domény nastaví vlastník ověřenou doménu a DNS u registrátora; v projektu se DNS neupravuje. HTTPS vynucuj až po vystavení certifikátu.

Bez vlastní domény funguje web na adresách GitHub Pages. Produkční doména `itworkshop.cz` je nastavená v Astro konfiguraci, proto je před nasazením na projektovou adresu `*.github.io` potřeba upravit konfiguraci `site` a `og:image` na odpovídající adresu. Rollback veřejné změny proveď revertováním příslušného commitu a novým ověřeným nasazením z `main`.

## Obsah a omezení

- Všechny veřejné kurzy a interaktivní moduly mají funkční lokální obsah; workshop „První kód“ je pravdivě označen jako připravovaný.
- Python kurz používá vzdálený interpreter šablony Pyodide pouze při otevření LiaScriptu; v lokálním buildu je nabídnut zdroj ke stažení a návod pro místní Python.
- Pagefind indexuje lokální HTML. Vzdálené stránky, včetně LiaScriptového kurzu, se do indexu nepřenášejí. Čeština nemusí rozpoznat všechny tvary slov.
- Projekt není publikovaný. Text o soukromí upozorňuje, že skutečný provozovatel, hosting a podmínky musí správce před nasazením doplnit a schválit.
