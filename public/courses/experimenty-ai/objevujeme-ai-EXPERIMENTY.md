<!--
author: ITWORKSHOP
title: Objevujeme AI – praktická laboratoř
language: cs
mode: Textbook
comment: Šest bezpečných experimentů s hudební AI, Blenderem a prací se zdroji.
-->

# Praktická laboratoř: Objevujeme AI

V šesti experimentech porovnáš výstupy AI, upravíš ověřený Blender skript a zkontroluješ odpovědi proti zdrojům. Výsledek vždy popiš spolu s důkazem a omezením; samotný screenshot nestačí.

> **🛡️ Bezpečnostní pravidlo laboratoře**
>
> Veřejné AI služby používá pouze učitel ve školou schváleném účtu a po ověření aktuálních podmínek. Studenti pracují s připravenými fiktivními texty a zadáními. Nevkládej osobní údaje, soukromé dokumenty, hlas jiné osoby ani cizí texty písní. Blender skript si před spuštěním přečti a nech jej zkontrolovat učitelem.

| Experiment | Hlavní otázka | Nástroj | Orientační čas |
|---|---|---|---:|
| 1.1 Tempo v soundtracku | Co změní jediný parametr zadání? | Suno – učitelem vedená ukázka | 25 min |
| 1.2 Prompt a požadavky | Které pokyny AI skutečně splní? | Suno – učitelem vedená ukázka | 25 min |
| 1.3 Robot z připraveného skriptu | Co skript v Blenderu vytvoří a čeho se nedotýká? | Blender a `robot.py` | 30 min |
| 1.4 Změna proporcí | Jak jedna hodnota změní geometrii? | Blender a kopie skriptu | 25 min |
| 1.5 Citace ve zdroji | Opírá se odpověď NotebookLM o správnou pasáž? | Připravené TXT a učitelem vedená ukázka | 25 min |
| 1.6 Informace mimo zdroje | Pozná nástroj, že odpověď v podkladech chybí? | Připravené TXT a učitelem vedená ukázka | 25 min |

## Experiment 1.1: Změň tempo, zachovej zadání

**Cíl:** Porovnat dva hudební výstupy vytvořené ze stejného zadání, které se liší pouze uvedeným tempem, a popsat, co se změnilo a co zůstalo nejisté.

**Nástroj:** Učitelem vedená ukázka služby Suno, schválený účet, sluchátka nebo reproduktor, [připravená zadání](../../experimenty-ai/suno/prompty.md) a [pracovní list](../../experimenty-ai/suno/pracovni-list.md). Studenti se nepřihlašují a nic do služby sami nenahrávají.

**Úkoly:**

1. Vytvoř nebo sleduj dvě verze krátkého instrumentálního soundtracku: zachovej stejný popis a změň pouze „střední tempo“ na „pomalé tempo“.
2. Před poslechem předpověz, která verze bude působit klidněji; při stejné hlasitosti si poslechni stejný dlouhý úsek obou verzí.
3. Zaznamenej, zda slyšíš pravidelný puls, opakovaný motiv a změnu energie; odliš pozorování od svého dojmu.
4. Rozhodni, zda výsledek prokazuje vliv tempa, nebo zda jej mohl změnit i náhodný rozdíl mezi generacemi.

**Výstupy:** Dvě přesná zadání s vyznačenou jedinou změnou, stručná srovnávací tabulka, předpověď a závěr s omezením pokusu. Hudbu nestahuj ani nesdílej bez souhlasu učitele a ověření práv.

<details>

<summary>**🧠 Rozbalit článek: Prompt je plán, ne notový zápis**</summary>

Generativní hudební model převádí textové zadání na zvukové vzory, které se naučil z trénovacích příkladů. Slova „pomalé tempo“ jsou vodítko, nikoli přesný metronom. Výstup se může lišit i tehdy, když je zadání stejné.

Stejně jako kuchařský popis receptu neudává každý pohyb ruky, hudební prompt nepopisuje každou notu. Proto si nejprve všimni, co je skutečně slyšet. Jediná změna v zadání zlepšuje porovnání, ale náhodnost modelu znamená, že jeden pár ukázek neizoluje příčinu dokonale.

Hudební výsledek je navíc obsah s možnými autorskými a licenčními omezeními. Nezadávej jména konkrétních interpretů, cizí texty ani cizí hlas. Ve školní hodině rozhoduje učitel, zda se výstup smí přehrát nebo uložit.

</details>

<details>

<summary>**🧭 Rozbalit přesný postup a ověření**</summary>

**Příprava a předpověď**

1. Učitel předem ověří, že službu smí pro ukázku použít, že účet splňuje podmínky a že výstup nezveřejní. Pokud přístup schválen není, experiment se provede jako učitelem připravená ukázka; nepředává se přihlašování studentům.
2. Z prvního zadání v souboru `../../experimenty-ai/suno/prompty.md` připrav základní verzi. Druhé zadání vytvoř kopií prvního a změň jen tempo.
3. Každý žák před poslechem zapíše vlastní předpověď; nepoužívej jména, hlasové nahrávky ani vlastní identifikační údaje.

**Měření a záznam**

1. Učitel vygeneruje dvě krátké instrumentální varianty. Rozhraní služby se může měnit; volby hledej podle významu, ne podle přesného umístění tlačítka.
2. Pusť obě ukázky při podobné hlasitosti a porovnej stejně dlouhé úseky. Pokud se výstup liší i jinak, tuto skutečnost poznamenej.
3. Do pracovního listu zapiš prompt, pozorovaný puls, opakující se motiv, energii a jistotu závěru. Nehodnoť hudební kvalitu jako objektivní měření.

**Interpretace, fallback a úklid**

Srovnání ukazuje, zda se výstupy lišily; samo o sobě nedokazuje, že příčinou bylo pouze tempo. Pokud služba není dostupná, učitel předem připraví dvě varianty a doloží přesná zadání. Po hodině zavře relaci; výstupy nepublikuje a nemaže ani nesdílí účetní data.

</details>

Která změna je v tomto experimentu záměrně jediná?

[( )] Hudební nástroj i tempo.
[(X)] Tempo.
[( )] Text, hlas a tempo současně.

## Experiment 1.2: Ověř, které části promptu model splní

**Cíl:** Rozdělit požadavky na hudební výstup na pozorovatelná kritéria, porovnat je s výsledkem a navrhnout přesnější zadání bez kopírování cizí hudby nebo textu.

**Nástroj:** Stejná učitelem vedená ukázka Suno, [promptové kartičky](../../experimenty-ai/suno/prompty.md), pracovní list a učitelem připravený kontrolní seznam: bez zpěvu, elektronické nástroje, střední tempo, postupně rostoucí energie.

**Úkoly:**

1. Napiš zadání pro instrumentální hudbu do fiktivní logické hry a uveď čtyři konkrétní požadavky, které lze během poslechu ověřit.
2. U každého požadavku předpověz, jak poznáš, že jej výstup splnil.
3. Sleduj, jak učitel použije zadání ve službě; ohodnoť každý požadavek jako „splněn“, „částečně“ nebo „nepozorovatelný“.
4. Změň pouze jednu nejasnou formulaci a porovnej, zda je druhé zadání konkrétnější.

**Výstupy:** Prompt s nejméně čtyřmi ověřitelnými požadavky, tabulka předpovědi a pozorování, jedna cílená úprava zadání a poznámka, co výstupem nelze zaručit.

<details>

<summary>**🧠 Rozbalit článek: Jak poznat splněný požadavek**</summary>

Slovo „napínavé“ může pro dva posluchače znamenat něco jiného. „Bez zpěvu“ je naproti tomu snáze pozorovatelné. Dobré experimentální zadání proto spojuje tvůrčí cíl s několika kontrolovatelnými znaky.

Model může některý požadavek vynechat nebo ho vyložit jinak. Když do promptu přidáš pět nových věcí naráz, nebude jasné, která úprava pomohla. Změň jednu nejasnou část, ponech ostatní podmínky a zapiš, co se skutečně změnilo.

Tento postup testuje shodu s požadavky, ne to, zda má hudba univerzálně nejlepší kvalitu. Názor posluchače je důležitý, ale odlišuje se od ověřitelného pozorování.

</details>

<details>

<summary>**🧭 Rozbalit praktický postup**</summary>

**Příprava a předpověď**

1. Použij pouze vymyšlenou herní scénu, například průzkum opuštěné vesmírné stanice. Nepoužívej konkrétní značku, interpreta, cizí text ani hlas.
2. Napiš čtyři požadavky: instrumentální, elektronické nástroje, střední tempo, energie postupně roste.
3. U každého kritéria napiš, jak jej rozpoznáš. „Působí dobře“ není samo o sobě měřitelný znak.

**Provedení a ověření**

1. Učitel spustí ukázku pod schváleným účtem nebo použije předem připravený výstup se známým zadáním.
2. Posluchači hodnotí každý požadavek odděleně. „Nezjistitelné“ je platný výsledek, pokud stopa neposkytuje dost důkazů.
3. Vyber jednu nejasnou frázi, nahraď ji konkrétnějším popisem a zapiš přesný rozdíl obou promptů.
4. Porovnej druhý výstup stejným kontrolním seznamem. Pokud se změnil i náhodný průběh generování, závěr formuluj opatrně.

**Fallback a úklid**

Bez přístupu službu nepoužívej. Učitel předvede připravené ukázky a zadání, zatímco žáci vyhodnotí stejná kritéria. Zápis stačí uchovat v pracovním listu; nic se nemusí nahrávat do veřejné služby.

</details>

Který požadavek je nejlépe pozorovatelný?

[( )] Udělej to zajímavé.
[(X)] Bez zpěvu.
[( )] Vytvoř dokonalou skladbu.

## Experiment 1.3: Proveď bezpečnostní kontrolu robota

**Cíl:** Před spuštěním popsat, které části připraveného Blender skriptu vytvářejí objekty, a po kontrole ověřit, co ve scéně skutečně vzniklo.

**Nástroj:** Blender na školou schváleném počítači, kopie souboru [`robot.py`](../../experimenty-ai/blender/robot.py), obrázek robota [`robot.svg`](../../experimenty-ai/blender/robot.svg) a kontrolní seznam níže. Pokud Blender není dostupný, provede ukázku učitel.

**Úkoly:**

1. Před spuštěním zkopíruj `robot.py` do své pracovní složky, vyhledej všechny operace s `bpy` a označ, které vytvářejí scénu, kvádr, materiál nebo kouli.
2. Zkontroluj, že skript neobsahuje mazání objektů, souborové či síťové operace, `subprocess` ani `eval`.
3. Po kontrole učitele spusť skript v Blenderu a najdi scénu „Robot Byte“.
4. Porovnej seznam vytvořených částí s nákresem a vysvětli, jak cyklus vytváří párové oči, nohy a ruce.

**Výstupy:** Vyplněný kontrolní seznam kódu, seznam nalezených objektů, vysvětlení role funkce `kvadr` a uložený projekt `.blend` ve vlastní pracovní složce.

<details>

<summary>**🧠 Rozbalit článek: Kód je návod, který se opravdu provádí**</summary>

Python skript pro Blender není jen obrázek robotova vzhledu. Je to seznam příkazů pro API `bpy`, které vytváří scénu a její objekty. Funkce `kvadr` zabalí opakující se kroky do jednoho pojmenovaného příkazu; cyklus pak stejný postup použije pro dvě oči, nohy nebo ruce.

AI může kód navrhnout, ale běhové prostředí vykoná přesně to, co v něm stojí. Proto se kód nejdříve čte jako plán a teprve po kontrole se spouští. Připravený skript vytváří novou scénu a neobsahuje práci se sítí ani soubory. To neznamená, že každý neznámý skript je bezpečný.

Výsledek v pohledu Blenderu ověřuje, co program vytvořil, nikoli zda by byl model připravený k 3D tisku. Tisk vyžaduje další kontrolu geometrie, která v tomto úkolu není provedena.

</details>

<details>

<summary>**🧭 Rozbalit přesný postup a bezpečnostní kontrolu**</summary>

**Příprava**

1. Otevři kopii `../../experimenty-ai/blender/robot.py` v textovém editoru, ne v automatickém spouštěči. Nepoužívej účet ani API.
2. Učitel předem projde soubor. Pokud se liší od připravené kopie nebo obsahuje operaci, které nerozumíte, nespouštějte jej.
3. V Blenderu ulož prázdný cvičný projekt pod novým názvem, například `byte-zaklad.blend`.

**Provedení a evidence**

1. Najdi `bpy.data.scenes.new`, `primitive_cube_add`, `primitive_uv_sphere_add`, funkci `material`, funkci `kvadr` a oba cykly `for`.
2. V kontrolním seznamu zaznamenej, zda se v souboru vyskytuje `delete`, `open`, `requests`, `subprocess` nebo `eval`. Připravený soubor by neměl obsahovat operace, které mažou nebo přistupují k datům mimo Blender.
3. Teprve po kontrole učitele spusť skript z pracovního prostoru Scripting. Přepni se do Layout, zobraz všechny objekty a zaznamenej jejich názvy.
4. Ověř, že se objevilo tělo, hlava, oči, zornice, nohy, ruce, panel a světlo antény. Pokud některá část chybí, zastav se a porovnej kód s připraveným souborem.
5. Ulož projekt do vlastní složky; původní vzorový soubor nepřepisuj.

**Fallback a úklid**

Pokud Blender není nainstalovaný nebo schválený, učitel ukáže spuštění na svém počítači. Žák vyplní stejný inventář objektů z ukázky a přiřadí každou skupinu řádků v kódu k výsledným částem. Zavři projekt bez uložení, pokud si nejsi jistý, do které složky se ukládá.

</details>

Co funkce `kvadr` opakuje?

[( )] Posílá síťový požadavek pro každý objekt.
[(X)] Vytváří pojmenovaný kvádr, nastaví jeho polohu, rozměry a materiál.
[( )] Odstraňuje původní scénu.

## Experiment 1.4: Změň pouze šířku hlavy

**Cíl:** Změnou jediného parametru skriptu vytvořit druhou variantu modelu a na konkrétních hodnotách ověřit, jak se změnila jeho geometrie.

**Nástroj:** Blender, kontrolovaná kopie `robot.py` a pracovní list pro [experiment s 3D modelem](../../experimenty-ai/blender/pracovni-list.md). AI generátor kódu není potřeba.

**Úkoly:**

1. V kopii skriptu změň pouze šířku hlavy z `1.6` na `2.0`; ostatní hodnoty ponech.
2. Spusť původní a upravenou kopii ve dvou oddělených nových scénách.
3. Porovnej šířku objektu „Hlava“ a ověř, zda oči a tělo zůstaly stejné.
4. Vysvětli, proč dvě běžící varianty usnadňují kontrolu změny.

**Výstupy:** Původní a upravená kopie skriptu, dvě scény nebo uložené projekty, zapsaná hodnota šířky hlavy před a po změně a fotografie či popis rozdílu s vysvětlením, co zůstalo stejné.

<details>

<summary>**🧠 Rozbalit článek: Změň jednu veličinu, porovnej dvě scény**</summary>

V kódu je rozměr hlavy zadán jako trojice čísel. První určuje šířku, další hloubku a poslední výšku kvádru. Změníš-li jen první číslo, vytváříš kontrolované porovnání: ostatní části modelu zůstávají stejné.

Představ si, že v jedné verzi změníš současně hlavu, barvu, oči i pozici. I kdyby výsledek vypadal lépe, nebylo by jasné proč. Oddělené scény pomáhají změnu najít. Hodnota `scale` je parametr objektu, který může ovlivnit i jeho rozměry v dalších výstupech.

Porovnání ověřuje rozměr v modelu, nikoli jeho tisknutelnost. Pro export nebo 3D tisk by bylo třeba zkontrolovat další vlastnosti sítě.

</details>

<details>

<summary>**🧭 Rozbalit postup, měření a návrat**</summary>

**Příprava a předpověď**

1. Ulož kopii originálního skriptu jako `robot-siroka-hlava.py`; na originál nepiš.
2. Vyhledej řádek, který začíná `kvadr("Hlava"`. Zapiš původní rozměry `(1.6, 0.9, 0.9)` a předpověz, která osa se změní.

**Změna a ověření**

1. Změň pouze první číslo z `1.6` na `2.0`. Ostatní kód porovnej s originálem.
2. Spusť originál jako první scénu a poznamenej rozměr nebo hodnotu měřítka hlavy.
3. Spusť kopii jako druhou scénu. V seznamu objektů vyber „Hlava“ a prohlédni hodnotu rozměru či měřítka v panelu transformací.
4. Porovnej oči a tělo: jejich parametry by měly zůstat shodné. Pokud se liší, zkontroluj, zda nebyla upravena další hodnota.
5. Ulož obě varianty pod rozdílnými názvy. V závěru popiš rozdíl mezi měnícím se parametrem a neměnnými parametry.

**Fallback a úklid**

Pokud Blender není dostupný, projdi s učitelem hodnoty ve dvou souborech a využij připravený nákres jako vizuální kontrolu. Nezaměň tento statický fallback za skutečné ověření v Blenderu. Zavři nepoužívané scény a nemaž originální soubor.

</details>

Které změně lze po porovnání nejlépe přiřadit širší hlavu?

[(X)] Změně hodnoty `1.6` na `2.0` při stejných ostatních parametrech.
[( )] Současné změně rozměru, barvy i polohy.
[( )] Pouhému otočení kamery.

## Experiment 1.5: Ověř citaci proti připravenému zdroji

**Cíl:** Prověřit alespoň dvě tvrzení odpovědi NotebookLM přímo v textu A nebo B a rozhodnout, zda citace skutečně podporuje uvedený význam.

**Nástroj:** Dva připravené fiktivní texty [`zdroj-a.txt`](../../experimenty-ai/notebooklm/zdroj-a.txt) a [`zdroj-b.txt`](../../experimenty-ai/notebooklm/zdroj-b.txt), učitelem vedená ukázka NotebookLM, [prompty](../../experimenty-ai/notebooklm/prompty.md) a pracovní list. Do služby se nepřidávají jiné soubory.

**Úkoly:**

1. Vytvoř nebo sleduj notebook pouze s texty A a B a polož otázku: „Vysvětli rozdíl RAM a SSD pouze ze zdrojů a cituj je.“
2. Otevři citaci u tvrzení o RAM a najdi v textu A větu, která popisuje její obsah po vypnutí napájení.
3. Ověř také tvrzení o SSD a zkontroluj, zda citace opravdu podporuje výrok o uchování souborů bez napájení.
4. Označ každé tvrzení jako podložené, částečně podložené nebo nepodložené a přepiš jednu větu vlastními slovy.

**Výstupy:** Záznam otázky, dvě ověřená tvrzení s přesnými pasážemi, rozhodnutí o kvalitě citací a krátké vysvětlení limitu odpovědi.

<details>

<summary>**🧠 Rozbalit článek: Citace ukazuje cestu k důkazu**</summary>

NotebookLM pracuje s vybranými zdroji a snaží se odpovídat s oporou v nich. Citace je užitečná jako cesta k pasáži, ale samotná značka citace není důkaz, že výrok přesně odpovídá textu. Otevři ji a přečti okolní větu.

Je to jako obsah knihy s číslem stránky: číslo tě navede, ale stránku si musíš přečíst. Zdroj může být příliš stručný, zjednodušený nebo se může týkat jen části otázky. Tvrzení o RAM a SSD lze ověřit, protože jsou v textu A výslovně popsaná.

NotebookLM ani citace nejsou nezávislou kontrolou faktů. Při školním použití nahrávej jen texty, ke kterým máš oprávnění, a které neobsahují osobní či neveřejné údaje.

</details>

<details>

<summary>**🧭 Rozbalit postup s měřením a soukromím**</summary>

**Příprava a předpověď**

1. Učitel ověří, že může použít schválený účet a ukázat rozhraní. Studenti účet nepotřebují.
2. Stáhni nebo otevři pouze `../../experimenty-ai/notebooklm/zdroj-a.txt` a `../../experimenty-ai/notebooklm/zdroj-b.txt`. Jde o připravené původní ukázkové texty, ne o osobní poznámky.
3. Před dotazem předpověz, ve kterém zdroji hledat rozdíl mezi RAM a SSD.

**Dotaz a ověření**

1. Přidej oba texty jako zdroje. Pokud přímé vložení textového souboru není dostupné, použij pouze obsah připravených TXT souborů.
2. Polož otázku z [promptových kartiček](../../experimenty-ai/notebooklm/prompty.md).
3. Otevři citaci u tvrzení o RAM; porovnej ji se větou v textu A o vypnutí napájení.
4. Otevři citaci u tvrzení o SSD; ověř, že text A říká, že úložiště soubory uchovává i bez napájení.
5. Do pracovního listu zapiš přesné znění tvrzení, název zdroje, relevantní pasáž a svůj verdikt. Citaci přijmi pouze tehdy, pokud pasáž výrok podporuje.

**Fallback a úklid**

Bez schváleného účtu učitel promítne odpověď, nebo žáci ručně zvýrazní stejná tvrzení v textu a vysvětlí, jak by citaci ověřili. Ruční kontrolu neuváděj jako test funkce NotebookLM. Notebook nesdílej veřejně; po ukázce jej zavři a smaž jen tehdy, pokud to školní pravidla dovolují.

</details>

Který krok poskytne důkaz, že citace podporuje odpověď?

[( )] Přečíst pouze souhrn vygenerovaný AI.
[(X)] Otevřít citovanou pasáž a porovnat její význam s tvrzením.
[( )] Zkontrolovat pouze barvu ikony citace.

## Experiment 1.6: Najdi tvrzení, které ve zdroji chybí

**Cíl:** Porovnat odpověď na otázku doloženou zdroji s odpovědí na otázku, na kterou texty neobsahují potřebné informace, a správně označit nejistotu.

**Nástroj:** Stejné dva výukové soubory A a B, učitelem vedená ukázka NotebookLM a zadání „Která tvrzení nelze z vložených zdrojů ověřit? Nevymýšlej chybějící informace.“

**Úkoly:**

1. S oběma zdroji se zeptej: „Kolik stojí nejrychlejší procesor na trhu?“
2. Otevři případnou citaci a zjisti, zda některý text uvádí aktuální cenu nebo model procesoru.
3. Zapiš, zda nástroj přizná, že údaj chybí, nebo nabídne nepodloženou odpověď.
4. Polož otázku znovu s výslovným pokynem nepřidávat informace mimo zdroje a porovnej odpovědi.

**Výstupy:** Obě přesná znění promptu, odpovědi nebo jejich shrnutí, doklad, zda cena v podkladech chybí, a bezpečně formulovaný závěr o hranici zdrojů.

<details>

<summary>**🧠 Rozbalit článek: Ticho ve zdrojích je také výsledek**</summary>

Jazykový model může vytvořit větu, která zní jistě, i když k ní vybrané materiály nic neříkají. Někdy doplní informaci ze svého obecného modelu světa, někdy si ji domyslí. Z toho, že odpověď působí odborně, nepoznáme, zda má oporu v konkrétních textech.

Otázka na cenu nejrychlejšího procesoru je záměrně mimo rozsah obou podkladů. Správný výzkumný postup je zaznamenat, že ji nelze z daných zdrojů ověřit. Pokud systém přesto cenu uvede, není tím prokázáno, že cena je skutečná.

Změna promptu může model navést, aby se držel zdrojů, ale nezaručuje bezchybnou odpověď. Proto citaci otevři, ověř její obsah a odliš „text to říká“ od „domnívám se, že je to pravda“.

</details>

<details>

<summary>**🧭 Rozbalit postup, porovnání a úklid**</summary>

**Příprava a předpověď**

1. Použij stejný notebook a stejné zdroje jako v Experimentu 1.5. Nepřidávej webové stránky ani další soubory, protože by se změnil soubor důkazů.
2. V textu A a B vyhledej, zda se v nich vyskytuje cena nebo název konkrétního procesoru. Zapiš předpověď, jak by měla odpověď vypadat.

**Porovnání odpovědí**

1. Polož otázku: „Kolik stojí nejrychlejší procesor na trhu?“ Zaznamenej, zda nástroj odmítne odpovědět, nebo poskytne číslo.
2. Pokud se objeví číslo, klikni na jeho citaci. Pokud citace neexistuje nebo mluví o něčem jiném, označ tvrzení jako nepodložené.
3. Zopakuj otázku s dodatkem: „Odpověz pouze podle zdrojů. Pokud údaj chybí, napiš, že jej nelze určit.“
4. Porovnej obě odpovědi a zapiš, zda druhá lépe přiznává limit. Ani případné „nevím“ neověřuje skutečnou cenu mimo tyto zdroje.

**Fallback a úklid**

Pokud učitel nemůže ukázat službu, žáci vyhledají v obou souborech slova týkající se procesoru a ceny a sepíší, co lze a nelze z textu doložit. Zapiš, že jde o analýzu zdrojů, nikoli o pozorovaný výstup služby. Zavři dočasný notebook a nezveřejňuj jej.

</details>

Když otázka přesahuje obsah dvou vybraných textů, co je nejpřesnější závěr?

[( )] Odpověď AI musí být pravdivá, protože zní jistě.
[(X)] Z těchto zdrojů ji nelze ověřit; je potřeba další důvěryhodný zdroj.
[( )] Citace není nutné otevírat.

## Závěrečné zamyšlení

V posledním LiaScript kvízu se vrať ke třem otázkám: Co zadal člověk? Jaký důkaz poskytl nástroj? Který závěr ještě vyžaduje kontrolu?
