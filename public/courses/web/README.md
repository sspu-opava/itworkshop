<!--
author: ITWORKSHOP
title: První web: HTML a CSS
language: cs
mode: Textbook
comment: Sedm praktických etap pro první samostatnou webovou stránku.
-->

# První web: HTML a CSS

Postupuj od prázdného souboru k malé přístupné stránce. Kód můžeš upravovat v [samostatné HTML/CSS dílně](https://sspu-opava.github.io/itworkshop/html-css/playground.html); náhled dílny má vypnutý JavaScript. Každou etapu si můžeš také stáhnout a otevřít místně.

## 1. První stránka

HTML popisuje obsah. Otevři dílnu, vyber první etapu a přidej odstavec pod hlavní nadpis.

```html
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8">
    <title>Moje stránka</title>
  </head>
  <body>
    <h1>Hardware a software</h1>
    <p>Co se skrývá uvnitř počítače?</p>
  </body>
</html>
```

Který prvek označuje hlavní nadpis stránky?

[( )] `<p>`
[(X)] `<h1>`
[( )] `<title>`

## 2. Nadpisy a části stránky

Rozděl obsah na `header`, `nav`, `main`, části `section` a `footer`. Nadpisy použij podle jejich úrovně, ne jen podle velikosti písma.

Který element má obsahovat hlavní jedinečný obsah dokumentu?

[[ (main) | nav | footer ]]

## 3. Obrázky a odkazy

Přidej připravené SVG obrázky. Jejich `alt` text popíše důležitou informaci člověku, který obrázek nevidí; dekorativní obraz může mít prázdný alternativní text.

```html
<img src="images/hardware.svg" alt="Monitor na stojanu a klávesnice">
<a href="#software">Přejít na software</a>
```

## 4. Seznamy

Použij `ul`, pokud na pořadí nezáleží. Použij `ol`, pokud popisuješ kroky nebo pořadí.

Zkus v dílně seznam součástí počítače převést na číslovaný postup. Potom rozhodni, která forma lépe odpovídá významu.

## 5. Tabulka

Tabulka patří na porovnání řádků a sloupců. Vyznač její záhlaví pomocí `th` a uveď popisek.

```html
<table>
  <caption>Hardware a software v praxi</caption>
  <thead><tr><th>Hardware</th><th>Software</th></tr></thead>
  <tbody><tr><td>Klávesnice</td><td>Textový editor</td></tr></tbody>
</table>
```

## 6. První styly CSS

CSS ovlivňuje vzhled dokumentu. V samostatném souboru můžeš upravit pravidlo, které se použije na více odstavců.

```css
body {
  max-width: 52rem;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}
```

Změň jednu vlastnost a předpověz, co se stane. Pak změnu spusť a porovnej s předpovědí.

## 7. Hotový design

Spoj všechny části do jedné stránky. Zkontroluj, že stránka má srozumitelnou strukturu, odkazy vedou na správné místo a obrázky mají užitečné alternativní texty.

### Rychlá kontrola

Které tvrzení platí?

[( )] HTML je jazyk pro barvu všech prvků.
[(X)] HTML popisuje obsah a CSS jeho vzhled.
[( )] CSS nahrazuje textový obsah stránky.

[[?]] HTML a CSS řeší dvě související, ale odlišné části stránky.

## Pokračuj v dílně

- [Otevři editor HTML/CSS](https://sspu-opava.github.io/itworkshop/html-css/playground.html)
- [Prohlédni sedm samostatných ukázek](https://sspu-opava.github.io/itworkshop/html-css/01-zaklad/index.html)
- [Ověř znalosti v kvízu](https://sspu-opava.github.io/itworkshop/html-css/quiz.html)
- [Vrať se na přehled kurzu](https://sspu-opava.github.io/itworkshop/kurzy/tvorba-vlastniho-webu/)

Editor zobrazuje kód jen v sandboxovaném rámci. Stránku nepublikuj, dokud nezkontroluješ odkazy, oprávnění k obrázkům a osobní údaje.
