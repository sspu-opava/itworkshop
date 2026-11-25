---
title: "Experimenty s AI 02: Od n?padu k 3D modelu"
description: "Sestav robota v Blenderu a kriticky ov?? k?d navr?en? AI."
topic: ai
tags: ["AI","Blender","3D","Python"]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 75
featured: false
draft: false
updatedAt: "2026-11-25"
---
**Experimenty s AI / 02 · 60–90 min · začátečník**

Vytvoř robota pomocí AI a Blenderu.

![Pracovní postup](/experimenty-ai/blender/postup.svg)

## Bezpečná práce s AI
Používej jen školou schválené služby a účty, které splňují věkové podmínky. Nevkládej jména spolužáků, fotografie, hlasové nahrávky, známky, hesla ani neveřejné dokumenty. Pokud nemáš oprávněný účet, připrav zadání na papír a sleduj demonstraci učitele na jeho vlastním účtu. Nikdy nesdílej přihlašovací údaje. Výsledky AI kontroluj a uváděj, jak ti AI pomohla.

## 1. Jak lze pomocí AI vytvořit 3D model?
Blender je program pro modelování, animaci a rendering. AI může vytvořit obrázek modelu, vygenerovat síť v externí službě nebo napsat skript, který sestaví skutečné 3D objekty v Blenderu. V tomto kurzu použijeme poslední možnost: textové zadání → Python → Blender. Nepotřebuješ placený generátor 3D modelů.

## 2. Seznam se s 3D prostorem
Objekt má polohu ve třech osách X, Y, Z. Osa Z míří nahoru. Mesh je síť vrcholů, hran a ploch. Kvádry, koule a válce jsou základní tvary. Materiál určuje vzhled objektu. Robot Byte bude složen z několika těchto tvarů.

![Schematický přední pohled robota Byte](/experimenty-ai/blender/robot.svg)

## 3. První model bez AI
Otevři Blender 4.5 nebo 5.x, založ nový projekt General a ulož jej jako `byte.blend`. Prostřední tlačítko myši otáčí pohledem, kolečko přibližuje, Shift + prostřední tlačítko posouvá pohled. Vyber krychli, stiskni G pro posun, S pro změnu velikosti, R pro otočení. Esc zruší rozpracovanou transformaci. Vyzkoušej G, Z, 1, Enter: objekt se posune o jednotku nahoru.

## 4. Zadej úkol AI
Použij schváleného AI asistenta nebo připravený skript. Zadání:

> Vytvoř krátký Python skript pro Blender 4.5/5.x s bpy, který v nové scéně sestaví stylizovaného robota Byte z kvádrů a koule. Tělo modré, oči bílé s tmavými zornicemi, dvě ruce, dvě nohy a žlutá anténa. Přední strana směřuje k záporné ose Y. Použij pojmenované objekty a jednoduché materiály diffuse_color. Nic nemaž, nepoužívej síť, soubory, subprocess, eval ani externí balíčky. Vysvětli kód a předlož jej ke kontrole.

AI může vymyslet neexistující funkce nebo nebezpečný kód. Učitel musí zkontrolovat každý nově vygenerovaný skript před spuštěním. Nepovoluj automatické spouštění cizích skriptů. Pro první pokus použij připravený soubor robot.py.

## 5. Spusť modelovací skript
V Blenderu otevři pracovní prostor Scripting. V Text Editoru zvol Open a vyber stažený robot.py. Přečti kód a s učitelem ověř, že pouze vytváří objekty. Klikni Run Script. Skript vytvoří novou scénu Robot Byte, původní scénu nemaže. Přepni se do Layout a v pohledu 3D stiskni Home pro zobrazení všech objektů. Numpad 1 ukáže přední pohled. Pro barvy zvol Solid shading a v jeho nabídce Color → Material. Materiálové barvy v tomto příkladu jsou nastaveny pro zobrazení ve viewportu, nikoli pro finální fotorealistický render. Ulož projekt Ctrl+S.

[Stáhnout připravený skript](/experimenty-ai/blender/robot.py)

## 6. Rozuměj kódu
`import bpy` zpřístupní Blender API. `primitive_cube_add` vytvoří krychli, `location` určí střed, `scale` její rozměry při výchozí velikosti 1. Funkce kvadr() opakuje stejný postup pro různé části. Cyklus for vytvoří párové oči, nohy a ruce. Souřadnice očí mají záporné Y, proto jsou vpředu. Nová scéna umožňuje zachovat původní práci; opakované spuštění vytvoří další scénu.

## 7. Druhý model: vlastní varianta
Změň hodnotu rozměru hlavy z 1.6 na 2.0, barvu těla nebo výšku antény. Ulož upravený skript pod jiným názvem a spusť znovu. Porovnej scénu s původní. Zkontroluj, zda žádná část nelevituje nebo se nežádoucím způsobem nepřekrývá. Model není automaticky připraven pro 3D tisk: jednotlivé díly nejsou sloučené a nebyla ověřena vodotěsnost sítě.

## 8. Prezentuj výsledek
Ulož soubor .blend. Udělej snímek obrazovky ze zvoleného pohledu (Windows: Win+Shift+S). Volitelně exportuj vybrané objekty jako glTF/GLB přes File → Export → glTF 2.0, pokud je export dostupný. Zapiš původní prompt, změny, chyby a to, co jsi sám upravil. Obrázek modelu není totéž co editovatelný 3D model.

## Samostatné výzvy
1. Změň barvy a proporce robota.
2. Přidej druhou anténu nebo dvě tlačítka pomocí kvadr().
3. Navrhni pomocí AI jednoduchou raketu a s učitelem ověř její skript.

## Ověř si znalosti
[Kvíz v katalogu](/kvizy/blender-ai/) · [Spusť přímo interaktivní kvíz](/experimenty-ai/blender/quiz.html) · [Pracovní list](/experimenty-ai/blender/pracovni-list.md) · [Zadání pro vlastní experiment](/experimenty-ai/blender/prompty.md)

## Oficiální zdroje
Ověřeno 25. 11. 2026; rozhraní a podmínky se mohou měnit.
- <https://docs.blender.org/api/current/info_quickstart.html>
- <https://docs.blender.org/manual/en/5.2/editors/text_editor.html>
