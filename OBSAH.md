# Výchozí český obsah webu

Tento dokument je obsahový podklad pro implementaci. Přenes jednotlivé texty do odpovídajících kolekcí a stránek, nikoli do jedné dlouhé stránky. Doplň metadata a přirozené interní odkazy. U každého materiálu používej skutečnou délku odpovídající rozsahu; hodnoty níže jsou orientační. Všechny kurzy a experimenty označ jako dostupné až po jejich dokončení. Nevytvářej nepravdivé zprávy o uskutečněných akcích.

## Úvodní stránka `/`
H1: Tvůj vstup do světa IT

Objevuj programování, tvoř weby, poznávej umělou inteligenci, zkoušej grafiku a rozvíjej své digitální dovednosti. Začni s tím, co tě zajímá. Nepotřebuješ předchozí zkušenosti ani speciální vybavení.

CTA: Prozkoumat kurzy (/kurzy/); Zkusit kvíz (/kvizy/it-kviz/).

Tematické dlaždice: Programování, Web, Grafika, AI, Hardware, Bezpečnost.

Doporučené kurzy: Vyzkoušej si Python; Tvorba vlastního webu; Objevujeme umělou inteligenci.

Kvízy a výzvy: IT kvíz (10 otázek); Programátorská výzva (rozcestník tří úloh).

IT laboratoř: Změň hodnoty, vyzkoušej vlastní postup a sleduj, co se stane. Technologie nejlépe pochopíš, když s nimi můžeš experimentovat.

Workshopy pro ZŠ: Přijď se podívat, jak vznikají programy. Na praktických workshopech se středoškolskými studenty si vyzkoušíš práci programátora a vytvoříš vlastní řešení.

Nejnovější články: výběr zveřejněných článků; pokud chybí datum, nadpis „Tipy k objevování“.

Patička: ITWORKSHOP je vzdělávací projekt pro mladé zájemce o informační technologie. Odkazy na témata, kurzy, workshopy, o projektu a soukromí. Neuváděj nepotvrzený e-mail.

## Témata `/temata/`
H1: Co tě zajímá?
Informatika není jen psaní programů. Zahrnuje tvorbu webů, práci s obrazem, porozumění počítačům i bezpečné používání technologií. Vyber oblast a prozkoumej její kurzy, články a experimenty.

### Programování `/temata/programovani/`
Programování je způsob, jak převést nápad na přesné instrukce pro počítač. Naučíš se rozdělit problém na menší části, pracovat s proměnnými a rozhodováním a opakovat operace pomocí cyklů. Chyby nejsou konec práce: jsou informací o tom, co ještě potřebuješ upravit. Začni Pythonem nebo robotem v bludišti.

### Web `/temata/web/`
Webovou stránku tvoří obsah, vzhled a chování. HTML popisuje strukturu, CSS určuje vzhled a JavaScript přidává interakci. Vyzkoušej si vytvořit jednoduchou stránku, která bude fungovat i na telefonu, a zjisti, jak se dostane k návštěvníkům přes internet.

### Grafika `/temata/grafika/`
Digitální obraz může být složený z pixelů nebo matematicky popsaných tvarů. Prozkoumej barvy, rozlišení, animaci a rozdíl mezi rastrovým a vektorovým obrázkem. V barevné laboratoři zjistíš, jak displej míchá červenou, zelenou a modrou.

### AI `/temata/ai/`
Umělá inteligence dokáže rozpoznávat vzory v datech, vytvářet texty či obrázky a pomáhat při řešení úloh. Její výsledky ale mohou být nepřesné. Nauč se rozlišovat mezi schopnostmi modelu a jeho omezeními a ověřovat tvrzení pomocí dalších zdrojů.

### Hardware `/temata/hardware/`
Co se děje uvnitř počítače? Procesor vykonává instrukce, operační paměť drží právě používaná data a úložiště uchovává soubory. Prozkoumej, jak počítač reprezentuje čísla pomocí bitů a jak jednotlivé součásti spolupracují.

### Bezpečnost `/temata/bezpecnost/`
Digitální bezpečnost začíná každodenními rozhodnutími: silná unikátní hesla, vícefaktorové ověření, aktualizace a obezřetnost vůči nečekaným zprávám. Zjisti, jak poznat podvod a proč šifrování pomáhá chránit data.

## Kurzy `/kurzy/`
H1: Nauč se něco nového
Vyber kurz podle svého zájmu a zkušeností. Postupuj vlastním tempem, upravuj příklady a zkoušej, co se stane. Začátečnické kurzy nevyžadují předchozí znalost programování.

### Vyzkoušej si Python `/kurzy/vyzkousej-si-python/`
Začátečník, 12+, 60–90 minut. Python je jazyk, v němž můžeš vytvářet hry, zpracovávat data i automatizovat běžné úkoly. V tomto kurzu napíšeš svůj první program a postupně jej proměníš v jednoduchou hru. Cíle: používat print a input, rozlišit text a číslo, používat proměnné, podmínky a cykly. Předpoklady: běžná práce s počítačem. CTA Otevřít interaktivní kurz a Stáhnout zdroj.

Lekce 1 – První program: `print("Ahoj, světe!")`. Úkol: vypiš dvě různé zprávy. Kvíz: K čemu slouží print? Správně: vypíše hodnotu.

Lekce 2 – Proměnné: `body = 10; print(body + 5)`. Proměnná je pojmenované místo pro práci s hodnotou. Úkol: změň počet bodů a předpověz výsledek.

Lekce 3 – Vstup: `jmeno = input("Jak ti máme říkat? "); print("Ahoj, " + jmeno)`. input vrací řetězec; pro celé číslo použij int a vysvětli neplatný vstup. Úkol: vypočítej dvojnásobek zadaného celého čísla. Používej přezdívku, nikoli skutečné osobní údaje.

Lekce 4 – Podmínky: `if body >= 10:` následované odsazeným výpisem, `else:` s alternativou. Úkol: změň hranici. Kvíz: Co znamená >=? Správně: větší nebo rovno.

Lekce 5 – Cykly: `for i in range(5):` a odsazené `print(i)`. Úkol: vypiš čísla od 1 do 10 pomocí range(1, 11).

Lekce 6 – Minihra: hádej číslo. Program vybere náhodné číslo 1–10, nabídne nejvýše tři pokusy, sdělí vyšší/nižší nebo správně, ošetří nečíselný vstup. Doplň kompletní komentované řešení, nápovědu a rozšíření o obtížnost. Nepoužívej nekonečnou smyčku bez možnosti zastavení. Vygeneruj skutečné funkční LiaScript lekce s odpovídající syntaxí.

### Tvorba vlastního webu `/kurzy/tvorba-vlastniho-webu/`
Začátečník, 12+, 45 minut. Vytvoř stránku o tématu, které tě zajímá, a nauč se ovlivňovat její vzhled. Lekce: základ HTML (doctype, lang, head, body, h1, p); odkazy a obrázky (alt); CSS (barvy, mezery, selektory); responzivita (max-width, viewport); závěrečný projekt (osobní stránka o koníčku bez osobních údajů). Připrav plné minimální HTML a CSS v samostatných stažitelných souborech a ukázku výsledku. Úkol: změň barvy, nadpis a přidej seznam tří zajímavostí. Nevyžaduj veřejné publikování.

### Objevujeme umělou inteligenci `/kurzy/objevujeme-ai/`
Začátečník, 12+, 30 minut. AI se učí vzory z dat, ale nerozumí světu stejným způsobem jako člověk. Lekce: pravidlo vs. učený model; trénovací data; klasifikace; generativní modely a chyby; ověřování výstupů. Offline experiment: klasifikuj šest fiktivních předmětů podle dvou vlastností, změň pravidlo a diskutuj hraniční případy. Ukaž, že ručně napsaný klasifikátor není trénovaná neuronová síť. Závěrečný úkol: navrhni postup, jak ověřit tvrzení vytvořené AI. Bez externího účtu či API.

## Články `/clanky/`
H1: Příběhy a principy technologií
Zjisti, co se skrývá za obrazovkou, jak vznikají programy a proč některé technologie fungují právě tak, jak fungují.

### Co vlastně dělá programátor? `/clanky/co-dela-programator/`
Programátor nezačíná vždy psaním kódu. Nejprve potřebuje pochopit problém. Když například vzniká aplikace pro školní turnaj, je třeba určit pravidla, vstupní údaje a způsob vyhodnocení výsledků. Teprve potom následuje návrh algoritmu, implementace a testování. Algoritmus je popis postupu, zatímco program je jeho konkrétní zápis v jazyce, kterému dokáže počítač prostřednictvím příslušných nástrojů porozumět. Velkou část práce tvoří hledání chyb, čtení cizího kódu a spolupráce. Vyzkoušej si to: popiš postup přípravy čaje tak přesně, aby jej dokázal provést někdo, kdo jej nikdy nepřipravoval. Pak zvaž, co se má stát, pokud chybí voda. Právě tak začíná algoritmické myšlení.

### Jak počítač počítá do dvou `/clanky/binarni-cisla/`
Bit může nabývat dvou hodnot, 0 a 1. Osm bitů tvoří bajt. V bezznaménkovém osmibitovém zápisu lze vyjádřit 256 hodnot od 0 do 255. Každá pozice představuje mocninu dvou. Zprava jsou to 1, 2, 4, 8, 16, 32, 64 a 128. Číslo 00001010 má zapnuté pozice 8 a 2, a proto představuje 10. Stejná posloupnost bitů ale může v jiném kontextu znamenat znak nebo složku barvy. Význam tedy závisí na dohodnutém způsobu interpretace. Otevři binární laboratoř a sestav čísla 42 a 255.

### Proč mají displeje tři základní barvy? `/clanky/barvy-rgb/`
Displej skládá barvy ze světla červené, zelené a modré složky. V běžném osmibitovém RGB zápisu má každá složka hodnotu 0 až 255. Kombinace (255, 0, 0) představuje červenou, (255, 255, 0) žlutou a (0, 0, 0) černou. Nejde o stejné míchání jako při použití barev na papíře. Zápis #FF0000 je šestnáctková forma červené. V RGB laboratoři zkus vytvořit tyrkysovou a neutrální šedou.

### Když se AI mýlí `/clanky/kdyz-se-ai-myli/`
Jazykový model může vytvořit přesvědčivě znějící odpověď, která obsahuje chybný údaj nebo neexistující zdroj. Plynulost textu není důkaz správnosti. Při práci s AI nejprve zformuluj otázku, potom ověř konkrétní tvrzení v důvěryhodném zdroji a případně vyzkoušej výsledek v praxi. Pokud ti AI navrhne program, spusť jej na několika různých vstupech a zkus vysvětlit jeho chování. Do veřejných služeb nezadávej citlivé údaje. AI může být užitečný pomocník, odpovědnost za výsledek však zůstává na člověku.

### Jak poznat podezřelou zprávu `/clanky/podezrela-zprava/`
Podvodná zpráva se často snaží vyvolat spěch: účet bude zablokován, vyhrál jsi cenu nebo musíš okamžitě potvrdit údaj. Zkontroluj skutečnou adresu odesílatele, doménu odkazu a důvod požadavku. Neposílej hesla ani ověřovací kódy. Pokud si nejsi jistý, otevři známou službu přímo a ověř informaci jiným kanálem. Samotná absence pravopisných chyb není zárukou důvěryhodnosti. Požádej důvěryhodného dospělého nebo správce školy o pomoc, pokud zpráva vypadá neobvykle.

## Návody `/navody/`
H1: Vyzkoušej si to krok za krokem
Praktické návody ti pomohou vytvořit konkrétní výsledek. Začni jednoduchým příkladem, potom zkus vlastní úpravu.

### První program v Pythonu `/navody/prvni-program-v-pythonu/`
Otevři kurz Vyzkoušej si Python nebo nainstaluj Python z python.org. Vytvoř soubor ahoj.py s obsahem `print("Ahoj, světe!")`. V příkazovém řádku Windows otevři složku souboru a spusť `py ahoj.py` (případně `python ahoj.py`, pokud je dostupný). Výsledkem je jeden řádek textu. Pokud příkaz nefunguje, ověř `py --version` nebo `python --version`. Zkus změnit text a přidat další print. Nezadávej osobní údaje do online editorů.

### První HTML stránka `/navody/prvni-html-stranka/`
V textovém editoru vytvoř index.html. Použij tento kód:
```html
<!doctype html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Můj první web</title>
</head>
<body>
  <h1>Můj první web</h1>
  <p>Právě vzniká moje stránka.</p>
</body>
</html>
```
Ulož soubor, otevři jej v prohlížeči, změň text a obnov stránku. Přidej styl `body { font-family: sans-serif; color: #123; }` uvnitř elementu style v head. Úkol: přidej seznam tří oblíbených technologií.

## Kvízy `/kvizy/`
H1: Otestuj své znalosti
Kvízy nejsou známkovaný test. Po každé odpovědi zjistíš, proč je správná nebo nesprávná. Můžeš je opakovat, kolikrát chceš.

### IT kvíz `/kvizy/it-kviz/`
10 otázek, vždy jedna správná. Správné odpovědi zde označeny hvězdičkou pouze pro převod do JSON, nikoliv před odpovědí v UI.
1. Kolik bitů má bajt? 4 | 8* | 10. Bajt je tvořen osmi bity.
2. Co vykonává instrukce programu? Monitor | Procesor* | Klávesnice. Procesor zpracovává instrukce.
3. K čemu slouží HTML? Struktura webu* | Šifrování disků | Napájení PC. HTML popisuje obsah a jeho strukturu.
4. Co určuje CSS? Vzhled stránky* | IP adresu | Heslo. CSS řídí prezentaci dokumentu.
5. Jaký je výsledek Python výrazu 3 * 4? 7 | 12* | 34. Hvězdička označuje násobení.
6. K čemu slouží cyklus? Opakování příkazů* | Vypnutí počítače | Uložení obrázku. Cyklus provádí blok opakovaně.
7. Co znamená RGB? Red Green Blue* | Random Graphic Bit | Router Global Base. Jde o složky světla.
8. Může AI uvést chybnou informaci? Ano* | Nikdy | Jen bez internetu. Výstup modelu je třeba ověřovat.
9. Jak bezpečně reagovat na podezřelý odkaz? Hned otevřít | Ověřit jiným kanálem* | Poslat heslo. Ověření snižuje riziko podvodu.
10. Co je algoritmus? Přesně popsaný postup* | Typ monitoru | Formát fotografie. Algoritmus řeší úlohu pomocí kroků.

### Python – první kroky `/kvizy/python-zaklady/`
5 otázek: výstup print(2+3) = 5 (alternativy 23, 2+3); input vrací text (alternativy vždy číslo, soubor); podmínka if rozhoduje (alternativy kreslí, ukládá soubor); range(3) dává 0,1,2 (alternativy 1,2,3 a 0,1,2,3); odsazení určuje blok kódu (alternativy barvu, název souboru). Ke každé přidej krátké vysvětlení.

## Výzvy `/vyzvy/`
H1: Dokážeš najít řešení?
Než otevřeš nápovědu, zkus vlastní postup. Jedna úloha může mít více správných řešení.

### Sudé, nebo liché? `/vyzvy/sude-nebo-liche/`
Zadej celé číslo a vypiš, zda je sudé. Nápověda: operátor % vrací zbytek po dělení. Řešení: `n = int(input("Číslo: "))` a `print("Sudé" if n % 2 == 0 else "Liché")`. Vysvětli, že i záporná sudá čísla mají při dělení dvěma nulový zbytek. Rozšíření: ošetři neplatný vstup.

### Počítadlo bodů `/vyzvy/pocitadlo-bodu/`
Hráč získává v pěti kolech po třech bodech. Vypiš průběžný součet po každém kole. Nápověda: proměnná body začíná na nule. Řešení: `body = 0`, `for kolo in range(5):` a odsazené `body += 3; print(body)`. Výstup 3, 6, 9, 12, 15. Rozšíření: různé body za každé kolo.

### Robotova nejkratší cesta `/vyzvy/robotova-cesta/`
V laboratoři Robot v bludišti sestav příkazy vedoucí do cíle. Nejprve plánuj na papíře, poté spusť simulaci. Nápověda: směr robota se mění otočením, ne pohybem. Řešení musí odpovídat konkrétní mapě implementované v RobotLab; doplň funkční sekvenci a otestuj ji. Rozšíření: najdi kratší sekvenci.

## Laboratoř `/laborator/`
H1: IT laboratoř
Technologie nejsou jen teorie. Měň vstupní hodnoty, pozoruj výsledek a zkus vysvětlit, proč se změnil. Experimenty běží přímo v prohlížeči.

### Binární laboratoř `/laborator/binarni/`
Přepínej osm bitů. Nad každým bitem je jeho váha. Sleduj desítkovou a šestnáctkovou hodnotu a případný tisknutelný znak ASCII. Úkol: vytvoř 42, 65 a 255. Vysvětlení: číslo 65 odpovídá znaku A v ASCII, ne každý bajt však představuje tisknutelný znak.

### Barevná laboratoř `/laborator/rgb/`
Uprav červenou, zelenou a modrou složku. Sleduj barvu a její CSS zápis. Úkol: vytvoř žlutou, tyrkysovou a šedou. Vysvětli aditivní míchání. Nabídni kopírování HEX hodnoty s dostupnou zpětnou vazbou.

### Robot v bludišti `/laborator/robot/`
Naprogramuj robota pomocí fronty příkazů. Otestuj jednotlivé kroky, vyhni se překážkám a dostaň se do cíle. Úkol: najdi funkční cestu, potom zkus snížit počet příkazů. Vysvětlení: program je posloupnost instrukcí; stav robota tvoří poloha a orientace.

## IT rozcestník `/odkazy/`
H1: Kam dál?
Vybrané zdroje pro samostatné objevování IT. Některé jsou v angličtině a některé mohou vyžadovat účet pro pokročilé funkce. Ověř aktuální dostupnost a podmínky před zveřejněním.
- Python – https://www.python.org/ – oficiální web, dokumentace a instalace (EN).
- MDN Web Docs – https://developer.mozilla.org/ – dokumentace a výuka webových technologií (zejména EN).
- LiaScript – https://liascript.github.io/ – interaktivní otevřené výukové materiály (EN).
- CS Unplugged – https://www.csunplugged.org/ – informatické aktivity i bez počítače (EN).
- p5.js – https://p5js.org/ – kreativní programování a grafika (EN).
- Scratch – https://scratch.mit.edu/ – volitelný externí zdroj blokového programování, nikoli doporučený kurz portálu.

## Workshopy `/workshopy/`
H1: Přijď si IT vyzkoušet
Chystáme praktické jednodenní workshopy pro žáky druhého stupně základních škol. Pod vedením středoškolských studentů a učitelů si účastníci vyzkoušejí programování, řešení problémů a spolupráci. Nepotřebují předchozí znalost kódu. Termíny a organizační informace zveřejníme po jejich potvrzení.

### První kód `/workshopy/prvni-kod/`
Stav: připravujeme. Orientační program: 30 minut seznámení a algoritmické úlohy; 60 minut základy Pythonu; 15 minut přestávka; 60 minut podmínky a cykly; 30 minut přestávka; 75 minut miniprojekt ve dvojicích; 30 minut prezentace a doporučení dalšího studia. Návrh trvá celkem 5 hodin. Organizace a délka jsou předběžné. Cíl: každý účastník si upraví funkční program, porozumí základním instrukcím a vyzkouší ladění chyb. Předem doporučujeme projít binární laboratoř a první lekci Pythonu, není to povinné. CTA: Prohlédnout kurz Python. Bez registračního formuláře, dokud nebude potvrzen organizační kontakt.

## O projektu `/o-projektu/`
H1: Technologie se učíme tím, že je tvoříme
ITWORKSHOP vzniká jako otevřený vzdělávací projekt propojující žáky základních škol se středoškolskými studenty a učiteli. Chceme ukázat, že informatika není jen používání počítače, ale také schopnost vytvářet vlastní řešení, rozumět technologiím a kriticky hodnotit informace.

Na portálu najdeš krátké kurzy, články, návody, kvízy a interaktivní experimenty. Materiály jsou určeny k samostatnému objevování i k využití při výuce. Studenti se mohou podílet na tvorbě obsahu a aplikací, které procházejí odbornou kontrolou před zveřejněním.

Pro učitele: materiály lze využívat jako doplněk hodin informatiky. O podmínkách dalšího šíření informuje licence uvedená u konkrétního materiálu. Nepřidávej licenci k cizím assetům bez ověření; navrhni CC BY 4.0 pro vlastní vzdělávací texty a MIT pro vlastní kód, ale označ je jako čekající na schválení vlastníkem, dokud nebude rozhodnuto.

## Soukromí `/soukromi/`
H1: Soukromí a bezpečné používání
Portál je navržen tak, aby jej bylo možné používat bez registrace. Výsledky zdejších kvízů neodesíláme do centrální databáze. Pokud používáme místní úložiště prohlížeče, slouží pouze k uchování nastavení nebo pokroku na daném zařízení. Externí služby a odkazy mají vlastní pravidla ochrany soukromí; hosting může zpracovávat technické údaje o přístupu. Neposkytuj zde osobní ani citlivé údaje. Před nasazením doplň skutečného provozovatele, kontakt, přesný popis úložišť a externích služeb podle implementace. Tento text je návrh, nikoli finální právní dokument.

## Vyhledávání `/vyhledavani/`
H1: Najdi, co tě zajímá
Zadej například Python, barvy, web nebo bezpečnost. Výsledky obsahují články, kurzy, návody, výzvy a experimenty.
Prázdný dotaz: Co chceš objevit? Žádné výsledky: Zkus jiné slovo nebo kratší dotaz. Chyba: Vyhledávání se nepodařilo načíst. Prohlédni si tematický rozcestník.

## 404
H1: Tady jsme trochu zabloudili
Stránka neexistuje nebo se přesunula. Vrať se na úvodní stránku, prozkoumej témata nebo zkus vyhledávání.
