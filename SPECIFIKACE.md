# ITWORKSHOP.CZ – implementační specifikace v1

## 1. Produkt
Otevřený portál pro první zkušenosti s IT. Primární publikum: žáci 12–15 let; sekundární: učitelé ZŠ, rodiče a středoškolští přispěvatelé. Hlavní uživatelská cesta: vybrat téma → najít materiál podle obtížnosti → něco vyzkoušet → pokračovat dalším materiálem. Vše bez účtu. Produkční URL https://itworkshop.cz. Nepředpokládej existenci funkční e-mailové adresy ani konkrétního termínu workshopu.

## 2. Stack a inicializace
Použij aktuální stabilní vzájemně kompatibilní verze Astro, TypeScript a Tailwind CSS 4 (integrace @tailwindcss/vite, import `@import "tailwindcss";`), Node.js LTS podporovaný zvolenou verzí Astro, npm a package-lock.json. Nastav engines a .nvmrc, zapiš konkrétní verze do README. Přidej @astrojs/sitemap, @astrojs/mdx, astro check a Pagefind. Pro ikony použij lucide-astro nebo lokální SVG. Nepřidávej frontendový framework, pokud není nezbytný. Používej lokální fonty (Inter s podporou češtiny a licencí, případně systémový fallback). Konfigurace Astro: site podle produkční domény, output static, trailingSlash always; bez base pro vlastní doménu. Pokud se testuje na projektové github.io URL, samostatně řeš base a používej konzistentní helper URL. Nepředpokládej, že relativní cesty fungují ve všech hloubkách.

## 3. Informační architektura
| URL | Účel |
|---|---|
| / | Úvod, tematické rozcestníky, doporučený obsah |
| /temata/ | Přehled tematických oblastí |
| /temata/[slug]/ | Programování, Web, Grafika, AI, Hardware, Bezpečnost |
| /kurzy/ | Katalog kurzů |
| /kurzy/[slug]/ | Detail kurzu, cíle, předpoklady, otevření lekce |
| /clanky/ a /clanky/[slug]/ | Populárně naučné články |
| /navody/ a /navody/[slug]/ | Praktické postupy |
| /kvizy/ a /kvizy/[slug]/ | Kvízy s okamžitou zpětnou vazbou |
| /vyzvy/ a /vyzvy/[slug]/ | Úlohy s nápovědou a řešením |
| /laborator/ a /laborator/[slug]/ | Interaktivní experimenty |
| /odkazy/ | Kurátorované externí zdroje |
| /workshopy/ | Nabídka a materiály workshopů |
| /workshopy/prvni-kod/ | Detail jednodenního workshopu |
| /o-projektu/ | Poslání, přispívání, informace pro školy |
| /soukromi/ | Transparentní informace o zpracování údajů |
| /vyhledavani/ | Fulltextové výsledky |
| /404.html | Vlastní chybová stránka |

Hlavní menu: Témata (rozbalovací), Kurzy, Články a návody (rozbalovací), Kvízy a výzvy, Laboratoř, Workshopy; O projektu v sekundární navigaci nebo patičce. Vyhledávání jako ikona s textovou alternativou, CTA Začni objevovat vede na /temata/. Mobilní menu s přístupným ovládáním. Breadcrumbs na podstránkách.

## 4. Adresářová struktura
```
.github/workflows/deploy.yml
public/brand/logo.svg
public/courses/python/README.md
public/favicon.svg
public/robots.txt
src/assets/images/
src/components/{layout,content,interactive,search}/
src/layouts/{BaseLayout,ContentLayout}.astro
src/content.config.ts
src/content/{courses,articles,tutorials,quizzes,challenges,experiments,links,workshops}/
src/data/topics.ts
src/lib/{content,urls,filters}.ts
src/pages/...
src/styles/global.css
scripts/check-links.mjs
tests/
docs/{PLAN,DECISIONS,CONTENT_GUIDE}.md
```
Kolekce definuj přes defineCollection a glob/file loader s validací Zod, stránky detailů generuj getStaticPaths. Pro kvízy a odkazy používej JSON; pro texty Markdown/MDX; LiaScript v public/courses mimo běžné renderování Markdown. Používej ASCII slugy, české titulky.

## 5. Obsahový model
Společná metadata: title, description, topic (programovani|web|grafika|ai|hardware|bezpecnost), tags[], difficulty (zacatecnik|mirne-pokrocily|pokrocily), ageMin (10–18), durationMinutes (kladné celé), featured, draft, publishedAt (volitelné, pouze skutečné), updatedAt, cover (volitelné), coverAlt, author (volitelné). ID ze souboru; ověř unikátnost výsledných URL. Nezobrazuj draft ani v indexu. Pokud není obrázek, použij elegantní lokální tematický náhradní vizuál; nikdy rozbitý obrázek. Typy obsahu doplňují metadata: kurz – objectives[], prerequisites[], lessons[] a coursePath; kvíz – questions[] s id, prompt, options[], correctIndex, explanation; výzva – zadání, hint, solution; experiment – componentKey z explicitního registru; odkaz – url, provider, language, description, checkedAt (jen pokud skutečně ověřeno); workshop – status planned/open/closed, audience, duration, agenda, případný ověřený kontakt a datum. Validuj indexy odpovědí, lokální soubory a povolená URL schémata. MDX pouze od důvěryhodných autorů.

## 6. Vizuální systém
Vycházej ze světlé fotorealistické reference v design/. Bílé pozadí, tmavě modrá typografie, sytá modrá CTA, tyrkysový akcent podle originálního loga. Z loga odečti skutečné barvy SVG a použij je jako brand tokeny. Další návrhové tokeny: ink #111827, muted #475569, surface #f1f5f9, border #dbe4ef, action #064bdb. Kontrast ověř, tyrkys nepoužívej jako drobný text na bílé bez kontroly. Tailwind @theme pro barvy, písmo, radius a stíny; globální CSS pro focus-visible, obsah článků, Pagefind UI a reduced motion. Max šířka 1440px, okraje 16/24/40px, mezery 8px škála, karty radius 12–16px, jemný stín. Nadpisy 32–56px dle viewportu, běžný text minimálně 16px. Hero na desktopu text vlevo, fotorealistická scéna dvojice dospívajících u notebooku vpravo, na mobilu pod textem. Bez kreslených maskotů. Nepoužívej neověřené fotografie skutečných žáků, nezískávej obrázky bez oprávnění. Pokud schází samostatné fotografie, použij lokální licencované materiály nebo dočasné neutrální vizuály a zdokumentuj náhradu; screenshot není zdroj jednotlivých assetů. Optimalizuj obrázky (WebP/AVIF, rozměry, srcset, lazy loading mimo hero), logo jako SVG.

Homepage: header, hero „Tvůj vstup do světa IT“, dvě CTA, šest tematických dlaždic, na desktopu 3 doporučené kurzy a 2 karty kvízů/výzev vedle sebe, pásy Laboratoř a Workshopy, blok nejnovější články a odkazy, patička. Na menších šířkách skládej bez horizontálního přetékání. Nepřizpůsobuj vše násilně jednomu screenshotu 16:9.

## 7. Komponenty a chování
Header, MobileNav, Footer, Breadcrumbs, Hero, TopicCard, ContentCard, ContentGrid, SectionHeading, DifficultyLabel, TagList, FilterPanel, EmptyState, RelatedContent, CourseLaunch, QuizPlayer, ChallengeReveal, BinaryLab, RGBLab, RobotLab, SearchUI. Katalogy filtrují téma, obtížnost, typ a délku; URL parametry umožní sdílet výběr, reset obnoví stav, bez JS zůstane obsah dostupný. Související obsah vybírej dle tématu a tagů bez duplikátů. Datum jen pokud existuje. Kvíz: volba odpovědi, vysvětlení, výsledek, nový pokus; výsledek neposílej na server. Nápovědu a řešení výzvy zpřístupni samostatně (details/summary). Nezaměňuj veřejný kvíz za bezpečný zkouškový systém.

## 8. Pagefind
Instaluj jako devDependency. Skripty: dev `astro dev`, check `astro check`, build `astro build && pagefind --site dist`, preview `astro preview`. Zajisti indexaci českého obsahu (`html lang="cs"`), data-pagefind-body na hlavním obsahu indexovaných stránek, data-pagefind-ignore pro navigaci a opakující se prvky; neindexuj 404 a vyhledávání. Metadata typu, tématu a obtížnosti nastav jako Pagefind filtry, pokud jsou dostupná. Vlastní české UI nebo lokalizovaný Pagefind UI: label, dotaz, stav načítání, žádné výsledky, výsledky s titulkem, úryvkem a typem, odkaz na detail. Vyhledávání dostupné z hlavičky i samostatné stránky s parametrem q; ošetři chyby, závod při změně dotazu, bezpečné vykreslení úryvků. Při npm run dev bez indexu zobraz srozumitelnou informaci nebo lehký katalogový fallback; plný index ověř přes build + preview. Obsah samotných externích kurzů nebude automaticky indexován: detail kurzu musí obsahovat cíle a popis lekcí v HTML. Dokumentuj omezení češtiny a vyzkoušej dotazy Python, programování, šifrování i bez diakritiky; negarantuj plnou českou morfologii.

## 9. LiaScript a experimenty
Vytvoř lokální public/courses/python/README.md jako skutečný kurz: výpis, proměnné, vstup, podmínka, cyklus, závěrečná úloha. Každá lekce má vysvětlení, příklad a úkol; minimálně dva interaktivní kvízy. Spustitelný Python zapoj přes ověřený podporovaný LiaScript template nebo lokální Pyodide. Ověř syntaxi a běh v prohlížeči; pokud runtime není dostupný, poskytni jasný alternativní lokální postup a neoznačuj nefunkční editor jako funkční. Launch URL vytvoř z produkčního veřejného URL Markdown souboru (https://liascript.github.io/course/? + URL kurzu dle oficiální dokumentace), odkaz na stažení zdroje; iframe pouze volitelně, lazy, po akci uživatele a s alternativním odkazem. Pro lokální vývoj vysvětli, že vzdálený interpret nemusí načíst localhost. Externí služby nenačítej automaticky bez potřeby. Případný vlastní runtime izoluj do workeru, umožni zastavení nekonečného výpočtu, bez eval v hlavním kontextu.

Implementuj tři funkční laboratoře: 8bitový převodník (0–255, HEX, tisknutelné ASCII); RGB (3 posuvníky 0–255, HEX, vzorek barvy); Robot v mřížce 6×6 (start, cíl, překážky, fronta příkazů vpřed/otočit vlevo/vpravo, krok, spustit, reset, kolize, stav). Ovládání i klávesnicí, stav nevyjadřuj pouze barvou. Zastav běh při resetu a opuštění komponenty.

## 10. Bezpečnost, přístupnost, SEO
Žádné účty, cookies pro marketing, analytické sledování, veřejné formuláře pro nezletilé ani sběr výsledků. Případné lokální uložení vysvětli a umožni smazat. Externí odkazy označ, pokud se otevírají v nové kartě, použij rel=noopener. Nezveřejňuj osobní údaje, fotografie nebo jména žáků bez příslušných oprávnění. Žádné klíče v klientském JS. Semantické HTML, skip link, jeden H1, správná hierarchie nadpisů, alt texty, viditelný fokus, ovládání klávesnicí, respekt prefers-reduced-motion, přístupné chybové stavy, WCAG 2.2 AA jako cíl nikoli neověřená certifikace. Title, description, canonical, Open Graph, sitemap, robots, favicon, vlastní 404. Neuváděj smyšlené kontakty ani školní partnerství.

## 11. CI/CD
GitHub Actions: PR kontrola npm ci, npm run check, testy a build; main navíc upload dist a deploy-pages s minimálními oprávněními contents read, pages write, id-token write pouze pro nasazení. Použij aktuální podporované verze akcí z oficiálních dokumentací, concurrency pro Pages. GitHub Settings → Pages → GitHub Actions; doménu ověř na úrovni vlastníka, nastav custom domain a DNS podle aktuální dokumentace GitHub; po vystavení certifikátu Enforce HTTPS. README popisuje i postup bez domény a rollback na předchozí commit. DNS neprováděj automaticky. Pro veřejný GitHub Free repozitář lze využít Pages bez placeného hostingu; aktuální limity ověř před produkcí.

## 12. Etapy a akceptace
1. Audit, scaffold, nastavení Astro/Tailwind, build, Git. 2. Layout, logo, homepage, navigace, mobil. 3. Kolekce, routy, katalogy, veškerý seed obsah z OBSAH.md. 4. Kvízy, výzvy, laboratoře, LiaScript. 5. Pagefind, SEO, přístupnost. 6. CI/CD, dokumentace, ověření produkčního buildu.
Po každé etapě proveď commit a aktualizuj plán. Testuj minimálně viewporty 360, 768, 1440 px, navigaci klávesnicí, všechny lokální odkazy, žádné chyby konzole na hlavních trasách, výsledky kvízů, hranice RGB a binární laboratoře, kolize robota, filtry, prázdné výsledky, Pagefind na preview, otevření a stažení kurzu. Použij Vitest pro čistou logiku a Playwright pro smoke testy; nepředstírej dostupnost browseru, pokud chybí. Build nesmí obsahovat drafts. Doporučené měření Lighthouse na produkčním buildu (cíle performance 90, accessibility 95, ne garantované skóre). README pro Windows CMD: npm ci, npm run dev, npm run check, npm test, npm run build, npm run preview. CONTENT_GUIDE s příklady přidání článku, kvízu, kurzu a experimentu, Git větve a pull requesty. Pages CMS ponech jako volitelnou druhou etapu, nepřidávej neověřenou autentizaci.

## 13. Referenční dokumentace
https://docs.astro.build/en/guides/content-collections/
https://docs.astro.build/en/guides/deploy/github/
https://tailwindcss.com/docs/installation/framework-guides/astro
https://pagefind.app/docs/
https://pagefind.app/docs/indexing/
https://liascript.github.io/
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
