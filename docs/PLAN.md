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
- Etapa 4 dokončena: kvízy, výzvy, binární/RGB/robotická laboratoř, LiaScript/Pyodide kurz, stažitelný zdroj a ukázky HTML/CSS. Vitest ověřil 11/11 čistých logických kontrol. Playwright prošel 13/13 testů vývojového režimu i 13/13 testů produkčního náhledu; zahrnují navigaci, šířky 360/768/1440 px, klávesnici, katalogové filtry, kvíz, laboratoře a zdroj Python kurzu.
- Etapa 5 dokončena: české Pagefind UI funguje nad produkčním indexem 38 stránek, 1 487 slov a 3 filtry. Sitemap vynechává `/vyhledavani/` a vlastní 404. Kontrola potvrdila 41 HTML stránek a funkční lokální odkazy i zdroje; Playwright ověřil vyhledávání, 404 a klávesové ovládání.
- Etapa 6 dokončena: README, průvodce obsahem a workflow GitHub Actions pro kontroly a GitHub Pages jsou připravené. Finální `npm run check` skončil s 0 chybami, 0 varováními a 0 upozorněními; `npm test` 11/11, produkční build vytvořil 40 stránek a Pagefind index. Repozitář nebyl nahrán do GitHubu a nasazení ani DNS se neprovádělo.

## Omezení

- Vzdálený LiaScript/Pyodide runtime se načítá až po kliknutí na odkaz a nebyl ověřován v nasazené produkci. Kurz lze stáhnout a projít s místním Pythonem.
- Na tomto počítači nebyl nainstalovaný Playwright Chromium; závěrečné browserové testy použily systémový Google Chrome. CI workflow instaluje Playwright Chromium před E2E testy.
- Web zůstává lokální. Před zveřejněním musí správce potvrdit doménu, právní údaje a skutečnou správu hostingu; bez výslovného souhlasu nebyl web publikován a DNS se neupravovalo.

## Doplnění připravených materiálů

- Do katalogu přibyly čtyři kurzy, osm návodů, osmnáct tematických a praktických kvízů a laboratoř se šesti experimenty. První pořadí kurzů zůstává Python, tvorba webu a Objevujeme AI.
- Statické podklady z `priprava/` zůstaly dostupné pod `public/`: HTML/CSS dílna, p5.js a želví grafika, příkazový simulátor, VirtualBox/Linux, tři AI sady, deset tematických testů a šest Python příkladů.
- Detaily kurzů, kvízů a laboratoře mají odkazy do LiaScriptu; původní HTML aktivity a soubory lze otevřít nebo stáhnout z příslušných detailů. `public/` je vyloučeno z TypeScript kontroly, protože jeho nezávislé skripty se servírují jako statické materiály a nejsou součástí Astro aplikace.
- Opraveny náhradní znaky `?` v metadatech osmi návodů. Sedm kurzů a odpovídající návody používají připravené bannery WebP; nový fotorealistický hero obrázek je uložen jako `public/images/hero-learning.webp`.
- Dočasné nasazení na GitHub Pages používá adresu `https://sspu-opava.github.io/itworkshop/`; navigace, zdroje LiaScriptu, vyhledávání i mapa webu respektují projektovou cestu. Kontrola prohlížečem prochází všechny vytvořené HTML stránky a ověřuje základní interakce.
- Po dokončení: `npm run check` bez chyb, upozornění ani hintů; produkční build vytvořil 71 stránek a Pagefind index s 69 stránkami a 4 138 slovy. `npm run check:links` ověřil všech 104 HTML souborů a všechny lokální cíle.
