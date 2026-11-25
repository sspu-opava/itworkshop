# Plán realizace ITWORKSHOP.CZ

## Audit

- Vstupní adresář obsahoval specifikaci, český obsah, designovou referenci PNG a originální logo SVG/PNG; žádný zdrojový web ani package manifest.
- Kořen pracovního prostoru ani `itworkshop-codex` zatím nebyl Git repozitář. Git je nainstalovaný, proto bude pro nové dílo inicializován lokální repozitář a etapy dostanou samostatné commity.
- Web zůstane statický a lokální. Specifikace výslovně zakazuje zveřejnění bez správce.
- Návrhová reference bude použita pouze jako vizuální vodítko. Hero dostane nový ilustrační obraz a originální SVG logo bude zkopírováno bez úprav.

## Etapy a kontroly

1. **Základ projektu** – Astro, strict TypeScript, Tailwind CSS 4 přes Vite, MDX, sitemap, Pagefind, skripty, verze Node/npm a statická konfigurace. Kontrola: instalace závislostí a první produkční build.
2. **Rozvržení a úvod** – základní layout, navigace včetně mobilní, přístupné komponenty, design tokeny, logo, hero, témata a hlavní sekce úvodní stránky. Kontrola: build a zobrazení na 360/768/1440 px.
3. **Obsah a routy** – typované kolekce s validací, všechna témata, kurzy, články, návody, kvízy, výzvy, laboratoře, odkazy, workshop a informační stránky. Kontrola: validace obsahu, rout a interních odkazů.
4. **Interakce a kurz Pythonu** – kvízy, filtry katalogů, binární/RGB/robotická laboratoř, lokální LiaScript kurz s kvízy a stažením zdroje. Kontrola: Vitest pro čistou logiku a browserové ověření dostupných tras a ovládání.
5. **Vyhledávání, přístupnost a SEO** – české Pagefind UI, metadata, sitemap/robots/favicon/404, klávesnice, redukovaný pohyb, ochrana soukromí. Kontrola: produkční Pagefind index a lokální odkazy.
6. **Dokumentace a CI** – README, průvodce obsahem, workflow GitHub Actions, závěrečný produkční build a shrnutí omezení. Kontrola: `npm run check`, `npm test`, `npm run build`, kontrola výstupu a dostupných viewportů.

Po každé etapě bude plán aktualizován a změny uloženy do samostatného lokálního commitu. Web ani DNS se nepublikují ani nemění.

## Stav

- Audit dokončen.
- Etapa 1 dokončena: Astro 7.4.13, Tailwind CSS 4.3.5, Pagefind 1.6.0, MDX, sitemap, strict TypeScript, npm lockfile a statický build. `npm run check` a `npm run build` prošly; Pagefind vytvořil český index.
- Etapa 2 dokončena: společné rozvržení, původní logo, přístupná mobilní navigace, vizuální tokeny, hero, témata a sekce úvodní stránky. Úvodní stránka byla vykreslena přes Playwright s lokálním Chromium a zkontrolována na šířkách 360, 768 a 1440 px bez horizontálního přetékání.
- Etapa 3 dokončena: všech šest témat, 3 kurzy, 5 článků, 2 návody, 2 kvízy, 3 výzvy, 3 laboratoře, 6 externích zdrojů, workshop a informační stránky jsou v oddělených kolekcích nebo šablonách. Katalogy mají sdílené filtry, URL parametry, prázdný stav a související obsah podle tématu a štítků. `npm run check` prošel bez chyb; build vytvořil 40 stránek; `npm run check:links` potvrdil 41 HTML souborů a žádné chybějící lokální cíle.
- Etapa 4 probíhá: kvíz, výzvy, binární/RGB/robotická laboratoř, LiaScript/Pyodide kurz a vzorové soubory HTML/CSS jsou připravené. Vitest: 11/11 kontrol čisté logiky. První běh produkčních Playwright testů: 11/11 prošlo; doplňkové klávesnicové, 404 a prázdné filtry čekají na závěrečný běh.
- Etapa 5 probíhá: Pagefind vytvořil český index 38 stránek, 1 487 slov a 3 filtry; produkční hledání bylo ověřeno v Playwrightu. Sitemap vynechává `/vyhledavani/` a vlastní 404. Finální testy SEO, přístupnosti a interakcí se doplní po posledním běhu.
- Etapa 6 připravena: README, průvodce obsahu a workflow GitHub Actions jsou součástí lokálního projektu. Repozitář nebyl nahrán do GitHubu a nasazení ani DNS se neprovádělo.
