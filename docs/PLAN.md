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
- Etapa 2 dokončena: společné rozvržení, původní logo, přístupná mobilní navigace, vizuální tokeny, hero, témata a sekce úvodní stránky. `npm run check` má 0 chyb a `npm run build` vytvořil statickou stránku. Uživatelský prohlížečový most CUA nebyl dostupný; responzivní kontrola se pokusí přes automatizovaný browser test.
- Etapy 3–6 probíhají. Závěrečné výsledky kontrol se doplní po jejich skutečném spuštění.
