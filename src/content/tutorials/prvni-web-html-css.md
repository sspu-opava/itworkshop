---
title: "Prvn? web: HTML a CSS"
description: "Sestav p??stupnou str?nku v sedmi kroc?ch a uprav jej? vzhled."
topic: web
tags: ["HTML","CSS","web"]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 120
featured: false
draft: false
updatedAt: "2026-11-25"
---
Webová stránka je dokument, který prohlížeč zobrazí jako text, obrázky a další prvky. HTML popisuje obsah a jeho význam, CSS určuje vzhled. V tomto kurzu vytvoříš vlastní stránku bez JavaScriptu a bez instalace knihoven.

**Co potřebuješ:** textový editor (například VS Code), prohlížeč a složku projektu. Vytvoř `index.html`, později `style.css` a složku `images`. Ukládej soubory v UTF-8. Otevři index.html v prohlížeči, po změně ulož Ctrl+S a obnov Ctrl+R. Každá etapa je samostatně spustitelná.

[Otevřít interaktivní dílnu](/html-css/playground.html) · [Hotový web](/html-css/07-design/index.html)

## Jak číst HTML

Značka `<p>` začíná odstavec a `</p>` jej ukončuje. Mezi nimi je obsah. Atributy doplňují informace, například `href` určuje cíl odkazu. Některé prvky, například `img`, nemají ukončovací značku. Vnořené prvky odsazuj pro přehlednost. `head` obsahuje údaje o dokumentu, `body` viditelný obsah. `lang="cs"` označuje češtinu, `charset` zajišťuje správné zobrazení znaků a viewport pomáhá mobilnímu zobrazení.

## 1. První stránka

Napiš kostru dokumentu. Změň nadpis a odstavec.

[Zobraz výsledek](/html-css/01-zaklad/index.html)

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hardware a software</title>
</head>
<body>
<h1>Hardware a software</h1>
<p>Co se skrývá uvnitř počítače?</p>
</body>
</html>
```

**Výzva:** Co se stane, když změníš text v title?

## 2. Nadpisy a části stránky

Rozděl obsah na header, nav, main, section a footer. Nadpis h1 je hlavní, h2 označuje kapitoly. ID umožňuje odkazovat na část stránky.

[Zobraz výsledek](/html-css/02-struktura/index.html)

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hardware a software</title>
</head>
<body>
<header>
  <h1>Hardware a software</h1>
  <p>Co se skrývá uvnitř počítače?</p>
</header>
<nav aria-label="Hlavní navigace">
  <a href="#hardware">Hardware</a>
  <a href="#software">Software</a>
</nav>
<main>
<section id="hardware">
  <h2>Hardware</h2>
  <p>Hardware jsou fyzické součásti počítače. Můžeme se jich dotknout.</p>
</section>
<section id="software">
  <h2>Software</h2>
  <p>Software tvoří programy, které počítači říkají, co má dělat.</p>
</section>

</main>
<footer><p>ITWORKSHOP – Objevuj. Experimentuj. Tvoř.</p></footer>
</body>
</html>
```

**Výzva:** Přidej odstavec o tom, proč hardware a software potřebují jeden druhého.

## 3. Obrázky a odkazy

Obrázek img má atribut src s relativní cestou a alt s textovým popisem. Odkaz a má href; #hardware odkazuje na stejnojmenné ID.

[Zobraz výsledek](/html-css/03-obrazky/index.html)

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hardware a software</title>
</head>
<body>
<header>
  <h1>Hardware a software</h1>
  <p>Co se skrývá uvnitř počítače?</p>
</header>
<nav aria-label="Hlavní navigace">
  <a href="#hardware">Hardware</a>
  <a href="#software">Software</a>
</nav>
<main>
<section id="hardware">
  <h2>Hardware</h2>
  <p>Hardware jsou fyzické součásti počítače. Můžeme se jich dotknout.</p>
  <img src="images/hardware.svg" alt="Monitor na stojanu a klávesnice" width="480" height="260">
</section>
<section id="software">
  <h2>Software</h2>
  <p>Software tvoří programy, které počítači říkají, co má dělat.</p>
  <img src="images/software.svg" alt="Okno programu se symbolem zdrojového kódu" width="480" height="260">
</section>

</main>
<footer><p>ITWORKSHOP – Objevuj. Experimentuj. Tvoř.</p></footer>
</body>
</html>
```

**Výzva:** Přidej odkaz na https://www.mozilla.org/ a vlastní obrázek.

## 4. Seznamy

ul je neuspořádaný seznam, ol číslovaný seznam, li jedna položka. Odkaz na Python vede mimo stránku.

[Zobraz výsledek](/html-css/04-seznamy/index.html)

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hardware a software</title>
</head>
<body>
<header>
  <h1>Hardware a software</h1>
  <p>Co se skrývá uvnitř počítače?</p>
</header>
<nav aria-label="Hlavní navigace">
  <a href="#hardware">Hardware</a>
  <a href="#software">Software</a>
</nav>
<main>
<section id="hardware">
  <h2>Hardware</h2>
  <p>Hardware jsou fyzické součásti počítače. Můžeme se jich dotknout.</p>
  <img src="images/hardware.svg" alt="Monitor na stojanu a klávesnice" width="480" height="260">
  <h3>Příklady hardwaru</h3>
  <ul>
    <li>Procesor</li>
    <li>Operační paměť</li>
    <li>Monitor</li>
  </ul>
</section>
<section id="software">
  <h2>Software</h2>
  <p>Software tvoří programy, které počítači říkají, co má dělat.</p>
  <img src="images/software.svg" alt="Okno programu se symbolem zdrojového kódu" width="480" height="260">
  <h3>Jak spustit program</h3>
  <ol>
    <li>Zapni počítač.</li>
    <li>Najdi ikonu programu.</li>
    <li>Otevři program.</li>
  </ol>
  <p><a href="https://www.python.org/">Python – příklad programovacího jazyka</a></p>
</section>

</main>
<footer><p>ITWORKSHOP – Objevuj. Experimentuj. Tvoř.</p></footer>
</body>
</html>
```

**Výzva:** Přidej dvě položky hardwaru a jeden krok do číslovaného seznamu.

## 5. Tabulka

table obsahuje řádky tr, záhlaví th a buňky td. caption pojmenovává tabulku; thead a tbody oddělují záhlaví a data.

[Zobraz výsledek](/html-css/05-tabulka/index.html)

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hardware a software</title>
</head>
<body>
<header>
  <h1>Hardware a software</h1>
  <p>Co se skrývá uvnitř počítače?</p>
</header>
<nav aria-label="Hlavní navigace">
  <a href="#hardware">Hardware</a>
  <a href="#software">Software</a>
</nav>
<main>
<section id="hardware">
  <h2>Hardware</h2>
  <p>Hardware jsou fyzické součásti počítače. Můžeme se jich dotknout.</p>
  <img src="images/hardware.svg" alt="Monitor na stojanu a klávesnice" width="480" height="260">
  <h3>Příklady hardwaru</h3>
  <ul>
    <li>Procesor</li>
    <li>Operační paměť</li>
    <li>Monitor</li>
  </ul>
</section>
<section id="software">
  <h2>Software</h2>
  <p>Software tvoří programy, které počítači říkají, co má dělat.</p>
  <img src="images/software.svg" alt="Okno programu se symbolem zdrojového kódu" width="480" height="260">
  <h3>Jak spustit program</h3>
  <ol>
    <li>Zapni počítač.</li>
    <li>Najdi ikonu programu.</li>
    <li>Otevři program.</li>
  </ol>
  <p><a href="https://www.python.org/">Python – příklad programovacího jazyka</a></p>
</section>
<section id="porovnani">
  <h2>Porovnání</h2>
  <table>
    <caption>Hardware a software v praxi</caption>
    <thead>
      <tr><th scope="col">Hardware</th><th scope="col">Software</th></tr>
    </thead>
    <tbody>
      <tr><td>Procesor</td><td>Operační systém</td></tr>
      <tr><td>Klávesnice</td><td>Textový editor</td></tr>
      <tr><td>Monitor</td><td>Webový prohlížeč</td></tr>
    </tbody>
  </table>
</section>
</main>
<footer><p>ITWORKSHOP – Objevuj. Experimentuj. Tvoř.</p></footer>
</body>
</html>
```

**Výzva:** Přidej nový řádek: reproduktor a přehrávač hudby.

## 6. První styly CSS

Připoj style.css pomocí link v head. Selektor body vybírá tělo stránky; vlastnost color určuje barvu textu.

[Zobraz výsledek](/html-css/06-css/index.html)

V souboru `index.html` přidej do `head` následující řádek:

```html
<link rel="stylesheet" href="style.css">
```

Obsah `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background: #eef4fa;
  color: #172b45;
  margin: 0;
}
h1 { color: white; }
header { background: #073798; color: white; padding: 24px; }
a { color: #1454b5; }
img { max-width: 100%; height: auto; }
main { max-width: 850px; margin: auto; padding: 20px; }
```

**Výzva:** Změň barvu pozadí a velikost vnitřního odsazení header.

## 7. Hotový design

Doplň okraje, zaoblení, styly tabulky a navigace. max-width omezuje šířku obsahu, margin auto jej centruje.

[Zobraz výsledek](/html-css/07-design/index.html)

V souboru `index.html` přidej do `head` následující řádek:

```html
<link rel="stylesheet" href="style.css">
```

Obsah `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background: #eef4fa;
  color: #172b45;
  margin: 0;
}
h1 { color: white; }
header { background: #073798; color: white; padding: 24px; }
a { color: #1454b5; }
img { max-width: 100%; height: auto; }
main { max-width: 850px; margin: auto; padding: 20px; }

* { box-sizing: border-box; }
nav { background: white; padding: 16px; text-align: center; }
nav a { margin: 0 10px; font-weight: bold; }
section { background: white; padding: 20px; margin-bottom: 20px; border: 1px solid #d2deeb; border-radius: 12px; }
h2 { color: #073798; }
img { display: block; border-radius: 8px; }
table { width: 100%; border-collapse: collapse; }
caption { text-align: left; margin-bottom: 10px; }
th, td { border: 1px solid #c4d2e3; padding: 10px; text-align: left; }
th { background: #073798; color: white; }
footer { text-align: center; padding: 16px; }
a:hover { color: #073798; text-decoration: none; }
a:focus-visible { outline: 3px solid #0891b2; outline-offset: 3px; }
```

**Výzva:** Vytvoř vlastní barevnou variantu a ověř stránku v úzkém okně.

## Jak funguje CSS

Pravidlo `p { color: navy; }` má selektor `p`, vlastnost `color` a hodnotu `navy`. Složené závorky ohraničují deklarace. Středník odděluje deklarace. Selektor `.karta` vybírá prvky s `class="karta"`; `#hardware` vybírá prvek s daným ID. Třídu lze použít opakovaně. Pozdější pravidlo stejné specificity může přepsat předchozí.

Model boxu: obsah obklopuje padding (vnitřní odsazení), border (rámeček) a margin (vnější mezera). `box-sizing: border-box` zahrnuje padding a border do zadané šířky.

## Samostatné výzvy

1. Přidej třetí sekci o periferiích a odkaz v navigaci.
2. Doplň obrázek s vlastním alternativním textem.
3. Vytvoř seznam oblíbených programů a tabulku se třemi sloupci (součást, funkce, příklad).
4. Přidej třídě `.zvyrazneni` vlastní styl a použij ji u vybraného odstavce.
5. Navrhni vlastní barevné schéma, ověř čitelnost a zobrazení na telefonu.

## Když něco nefunguje

- Obrázek se nezobrazuje: ověř cestu, příponu a velikost písmen v názvu.
- CSS se neprojevuje: ověř link v head a umístění style.css.
- Odkaz na sekci nefunguje: zkontroluj shodu href a id.
- Stránka se nezměnila: ulož soubor a obnov prohlížeč.
- Rozbitá tabulka: zkontroluj uzavření tr, th a td.

## Ověř si znalosti

[Kvíz v katalogu](/kvizy/html-css/) · [Interaktivní kvíz](/html-css/quiz.html)

Další materiály: [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).
