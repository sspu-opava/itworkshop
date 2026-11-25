<!--
author: ITWORKSHOP
title: Kreativní programování s p5.js
language: cs
mode: Textbook
comment: Osmnáct ukázek kresby, animace a interakce v JavaScriptu.
-->

# Kreativní programování s p5.js

p5.js poskytuje funkce pro kreslení na plátno. V samostatném editoru vyber příklad, změň kód a stiskni **Spustit**. Nejprve popiš, co očekáváš; potom výsledek porovnej.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(245);
  circle(200, 150, 60);
}
```

`setup` připraví plátno. `draw` se volá opakovaně a překresluje scénu.

## 1. Souřadnice a tvary

Počátek plátna je vlevo nahoře. Změň první dvě souřadnice kruhu. Kterým směrem se posune, když zvětšíš hodnotu `x`?

[( )] Vlevo.
[(X)] Vpravo.
[( )] Nahoru.

## 2. Barva a vrstvy

Předpověz, zda překrytý tvar zakryje podklad. V editoru změň pořadí dvou příkazů kreslení a pozoruj vrstvy.

## 3. Pohyb a proměnné

Proměnná může uchovávat polohu objektu. V ukázce `odraz-x` nebo `odraz-xy` změň hodnotu rychlosti, spusť projekt a porovnej, jak se změní pohyb.

Která funkce se v p5.js opakuje během animace?

[[ (draw) | setup | createCanvas ]]

## 4. Myš a klávesnice

Prozkoumej příklady, které čtou polohu myši nebo stisk klávesy. Změň jeden ovládací prvek a zkontroluj, že se reakce objeví až po vstupu.

## 5. Kolize a hra

V příkladu s robotem najdi podmínku, která rozhoduje o střetu. Změň rozměry objektu a porovnej, ve kterém okamžiku se kolize vyhodnotí.

## 6. Vlastní varianta

Uprav jednu ukázku. Zapiš jméno souboru, změněnou hodnotu a co se po spuštění skutečně stalo. Kód z editoru se po zavření automaticky neukládá; důležité změny si stáhni nebo zkopíruj.

## Pokračuj

- [Otevři editor s osmnácti příklady](https://sspu-opava.github.io/itworkshop/creative-coding/p5/index.html)
- [Ověř znalosti v kvízu](https://sspu-opava.github.io/itworkshop/creative-coding/p5/quiz.html)
- [Přečti si článek kurzu](https://sspu-opava.github.io/itworkshop/navody/kreativni-programovani-p5/)

Editor načte p5.js z CDN až po otevření. Nekonečná synchronní smyčka může zablokovat kartu; při potížích zavři rámec. Nepoužívej cizí nedůvěryhodný kód.
