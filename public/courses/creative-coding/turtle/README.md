<!--
author: ITWORKSHOP
title: Želví grafika v Pythonu
language: cs
mode: Textbook
comment: Čtrnáct praktických příkladů algoritmické kresby.
-->

# Želví grafika v Pythonu

Želva kreslí posloupností pohybů. V každém příkladu nejdřív předpověz tvar, potom změň jednu hodnotu a výsledek porovnej.

Webový editor používá Skulpt, který není úplně shodný s CPythonem. Kód zkoušej také v místním Pythonu s knihovnou Tkinter. Klávesový příklad je určen hlavně pro místní spuštění.

## 1. Čtverec

```python
import turtle

for _ in range(4):
    turtle.forward(80)
    turtle.right(90)
```

O kolik stupňů se želva otočí, když kreslí čtverec?

[( )] 45°
[(X)] 90°
[( )] 120°

## 2. Mnohoúhelník

V pravidelném mnohoúhelníku se želva otočí vždy o `360 / počet_stran` stupňů. Zkus změnit počet stran i délku kroku.

```python
strany = 6
for _ in range(strany):
    turtle.forward(60)
    turtle.left(360 / strany)
```

Vnitřní úhel v pravidelném šestiúhelníku je [[120]] stupňů.

## 3. Hvězda a opakování

Některé obrazce se uzavřou až po několika nestejných krocích. Prozkoumej připravené ukázky hvězdy a porovnej je s mnohoúhelníkem.

Předpověz, zda se cesta po pěti stejných otočeních vždy vrátí na začátek. Ověř to v editoru a zaznamenej počet vrcholů.

## 4. Spirálové vzory

V cyklu můžeš postupně měnit délku pohybu nebo úhel. Upravuj vždy jen jednu hodnotu, aby bylo možné připsat pozorovanou změnu správné příčině.

Když se délka v každém kroku zvětší, spirála se obvykle [[ rozšiřuje | zmenšuje | nemění ]].

## 5. Barvy a opakující se obrazce

Prohlédni si příklady květiny, duhové spirály, souhvězdí nebo rotujících čtverců. Najdi řádek, který určuje barvu nebo úhel, a změň jej.

## 6. Vstup z klávesnice

Událost přiřadí funkci ke stisku klávesy. Změň jednu vazbu a ověř, co se stane při stisku a při puštění klávesy. Tuto ukázku spouštěj místně, pokud webový interpret událost nepodporuje.

## 7. Vlastní kresba

Vyber si květinu, domek nebo hvězdné pole. Uprav jeden parametr a vysvětli, jak změnil výsledek. Ulož obrázek pouze tehdy, pokud editor nebo místní program tuto možnost nabízí; screenshot není důkazem, že kód funguje.

## Pokračuj

- [Otevři editor s čtrnácti Python příklady](https://itworkshop.cz/creative-coding/turtle/index.html)
- [Stáhni zdrojové soubory Pythonu](https://itworkshop.cz/creative-coding/turtle/examples/)
- [Ověř znalosti v kvízu](https://itworkshop.cz/creative-coding/turtle/quiz.html)
- [Přečti si článek kurzu](https://itworkshop.cz/navody/zelvi-grafika-python/)
