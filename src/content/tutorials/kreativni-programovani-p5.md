---
title: "Kreativní programování v JavaScriptu a p5.js"
description: "Nauč se kreslit, experimentovat a vytvářet vlastní grafické programy."
topic: grafika
tags: ["JavaScript", "p5.js", "grafika"]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 90
featured: false
draft: false
updatedAt: "2026-11-25"
cover: /images/courses/kreativni-programovani-v-js.webp
coverAlt: Počítač zobrazuje program p5.js a barevnou generativní grafiku.
---
![Ukázka kreativního programování](/creative-coding/images/p5-cover.svg)

JavaScript je jazyk interaktivního webu. HTML popisuje obsah, CSS jeho vzhled a JavaScript chování. Knihovna p5.js zpřístupňuje jednoduché kreslení, animace, hry a reakce na myš či klávesnici.

## Jak začít

Použij [p5.js Web Editor](https://editor.p5js.org/) nebo editory pod příklady. V online editoru nahraď obsah `sketch.js` a stiskni Play. Zdejší editory používají p5.js 1.11.3; při použití jiné hlavní verze ověř kompatibilitu.

## Souřadnice a kreslení

![Souřadnice p5.js](/creative-coding/images/p5-souradnice.svg)

Počátek je vlevo nahoře, x roste doprava, y dolů. `setup()` se provede jednou, `draw()` se opakuje.

| Příkaz | Význam |
|---|---|
| `circle(x,y,d)` | kruh |
| `rect(x,y,w,h)` | obdélník |
| `square(x,y,s)` | čtverec |
| `ellipse(x,y,w,h)` | elipsa |
| `triangle(x1,y1,x2,y2,x3,y3)` | trojúhelník |
| `line(x1,y1,x2,y2)` | úsečka |
| `fill("red")` | výplň |
| `stroke("blue")` | obrys |
| `strokeWeight(5)` | tloušťka |
| `noStroke()` / `noFill()` | bez obrysu / výplně |
| `background(220)` | pozadí |

Barvu lze zadat názvem, hexadecimálním zápisem (`"#0000FF"`) nebo pomocí RGB (`0, 0, 255`). Složky RGB mají ve výchozím režimu rozsah 0–255.

## 1. První grafický program

setup() se spustí jednou, draw() se opakuje (cílově 60 snímků za sekundu). createCanvas() určí velikost plochy; circle(x,y,d) střed a průměr.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  circle(200, 150, 100);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#prvni-kruh) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/prvni-kruh.js)

**Výzva:** Změň velikost, polohu a průměr kruhu.

## 2. Geometrická galerie

Kruh a elipsa mají souřadnice středu, obdélník a čtverec levého horního rohu. Trojúhelník určuje trojice vrcholů.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(235);
  circle(70, 70, 80);
  rect(150, 30, 100, 80);
  triangle(320, 30, 280, 110, 360, 110);
  ellipse(100, 210, 140, 80);
  square(220, 170, 80);
  line(330, 170, 370, 260);
}
```

![Ilustrace: Geometrická galerie](/creative-coding/images/p5-galerie.svg)

[Otevřít interaktivní editor](/creative-coding/p5/index.html#galerie) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/galerie.js)

**Výzva:** Vytvoř jednoduché logo ze tří různých tvarů.

## 3. Robot Byte

fill() ovlivňuje následující objekty. Později kreslené tvary překrývají dřívější. noStroke() vypíná obrys.

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 235, 250);
  noStroke();
  fill("gray");
  rect(195, 30, 10, 50);
  fill("red");
  circle(200, 30, 20);
  fill("steelblue");
  rect(110, 70, 180, 120, 15);
  fill("white");
  circle(155, 120, 40);
  circle(245, 120, 40);
  fill("black");
  circle(155, 120, 18);
  circle(245, 120, 18);
  rect(160, 155, 80, 12, 5);
  fill("steelblue");
  rect(140, 200, 120, 110, 10);
  rect(85, 205, 40, 100, 8);
  rect(275, 205, 40, 100, 8);
  rect(145, 320, 45, 55, 5);
  rect(210, 320, 45, 55, 5);
  fill("cyan");
  rect(160, 220, 80, 40, 5);
}
```

![Ilustrace: Robot Byte](/creative-coding/images/p5-robot.svg)

[Otevřít interaktivní editor](/creative-coding/p5/index.html#robot) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/robot.js)

**Výzva:** Přidej ovládací tlačítka, změň oči a výraz robota.

## 4. Pohybující se míček

let vytváří proměnnou. x += 2 zvětší souřadnici o dva pixely při každém snímku. background() smaže předchozí snímek.

```javascript
let x = 30;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("royalblue");
  circle(x, 150, 40);
  x += 2;
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#pohyb) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/pohyb.js)

**Výzva:** Změň rychlost na 5, pak na -2. Co se stane, když míček opustí plochu?

## 5. Nekonečný pohyb

if provede blok jen při splnění podmínky. width je šířka plochy. Míček se vrací za levý okraj.

```javascript
let x = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("royalblue");
  circle(x, 150, 40);
  x += 3;
  if (x > width + 20) {
    x = -20;
  }
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#navrat) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/navrat.js)

**Výzva:** Zkus svislý pohyb pomocí y a height.

## 6. Odraz od stěny

Kladná rychlost znamená pohyb doprava, záporná doleva. || je logické NEBO. constrain() zabrání překročení okraje.

```javascript
let x = 100;
let rychlost = 3;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("royalblue");
  x += rychlost;
  if (x >= width - 20 || x <= 20) {
    x = constrain(x, 20, width - 20);
    rychlost = -rychlost;
  }
  circle(x, 150, 40);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#odraz-x) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/odraz-x.js)

**Výzva:** Změň průměr míčku a současně uprav mezní souřadnice.

## 7. Míček ve všech směrech

Dvě souřadnice a dvě rychlosti určují pohyb v rovině. Při odrazu se mění znaménko odpovídající rychlosti.

```javascript
let x = 100;
let y = 100;
let vx = 3;
let vy = 2;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(20, 30, 50);
  x += vx;
  y += vy;
  if (x >= width - 20 || x <= 20) {
    x = constrain(x, 20, width - 20);
    vx = -vx;
  }
  if (y >= height - 20 || y <= 20) {
    y = constrain(y, 20, height - 20);
    vy = -vy;
  }
  noStroke();
  fill("cyan");
  circle(x, y, 40);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#odraz-xy) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/odraz-xy.js)

**Výzva:** Při každém odrazu změň barvu pomocí random().

## 8. Řada barevných kruhů

Cyklus for nastaví i na 0, ověřuje i < 10 a po každém průchodu zvýší i o jedna. Poloha i barva závisí na i.

```javascript
function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(230);
  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(i * 25, 100, 220);
    circle(20 + i * 40, 100, 35);
  }
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#rada) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/rada.js)

**Výzva:** Nakresli řadu čtverců s rostoucí velikostí.

## 9. Barevná mozaika

Vnořené cykly vytvářejí síť: pro každé x projdeme všechna y.

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  noStroke();
  for (let x = 20; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
      fill(x / 2, y / 2, 220);
      circle(x, y, 30);
    }
  }
}
```

![Ilustrace: Barevná mozaika](/creative-coding/images/p5-mozaika.svg)

[Otevřít interaktivní editor](/creative-coding/p5/index.html#mozaika) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/mozaika.js)

**Výzva:** Vytvoř šachovnici nebo změň rozestupy.

## 10. Kruh sledující kurzor

mouseX a mouseY uchovávají aktuální souřadnice myši v plátně.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  noStroke();
  fill("royalblue");
  circle(mouseX, mouseY, 50);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#mys) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/mys.js)

**Výzva:** Nakresli druhý kruh se souřadnicí width - mouseX.

## 11. Chameleon

Poloha myši mění i barvu a velikost. RGB složky běžně nabývají hodnot 0 až 255.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(20);
  noStroke();
  fill(mouseX / 2, mouseY / 2, 255);
  circle(mouseX, mouseY, 30 + mouseY / 3);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#chameleon) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/chameleon.js)

**Výzva:** Ať se kruh zvětšuje při pohybu doprava.

## 12. Interaktivní přepínač barev

mouseIsPressed je logická hodnota true nebo false. if/else volí jednu ze dvou větví.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(230);
  noStroke();
  if (mouseIsPressed) {
    fill("orange");
  } else {
    fill("royalblue");
  }
  circle(mouseX, mouseY, 60);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#kliknuti) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/kliknuti.js)

**Výzva:** Při držení tlačítka zvětši také průměr.

## 13. Vlastní kreslicí program

Pozadí je pouze v setup(), proto kresba zůstává. pmouseX a pmouseY jsou předchozí souřadnice myši. keyPressed() reaguje na klávesu.

```javascript
function setup() {
  createCanvas(500, 350);
  background("white");
}

function draw() {
  if (mouseIsPressed) {
    stroke("royalblue");
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === "c") {
    background("white");
  }
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#paint) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/paint.js)

**Výzva:** Přidej proměnnou barvy pera a klávesy r, b, g.

## 14. Generátor barevných bublin

mousePressed() se zavolá jednou při stisku tlačítka. random() vrací náhodné číslo; horní mez není zahrnuta.

```javascript
function setup() {
  createCanvas(500, 350);
  background(20);
  noStroke();
}

function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255));
  circle(mouseX, mouseY, random(20, 100));
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#bubliny) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/bubliny.js)

**Výzva:** Místo kruhů kresli čtverce; zkus čtvrtý parametr fill() pro průhlednost.

## 15. Ovládání čtverce

keyIsDown() sleduje držení klávesy. Čtyři nezávislé podmínky umožňují šikmý pohyb. Klikni do plátna, aby získalo fokus.

```javascript
let x = 200;
let y = 150;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) x -= 3;
  if (keyIsDown(RIGHT_ARROW)) x += 3;
  if (keyIsDown(UP_ARROW)) y -= 3;
  if (keyIsDown(DOWN_ARROW)) y += 3;
  x = constrain(x, 0, width - 40);
  y = constrain(y, 0, height - 40);
  fill("royalblue");
  square(x, y, 40);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#klavesnice) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/klavesnice.js)

**Výzva:** Nahraď čtverec vlastní kosmickou lodí.

## 16. Pulzující světlo

sin() vrací hodnoty -1 až 1. Průměr se mění mezi 50 a 150. frameCount roste při každém snímku.

```javascript
function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(10, 20, 40);
  let prumer = 100 + sin(frameCount * 0.05) * 50;
  noStroke();
  fill("cyan");
  circle(200, 150, prumer);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#pulz) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/pulz.js)

**Výzva:** Použij sin() pro svislou souřadnici místo průměru.

## 17. Lovec hvězd

dist() měří vzdálenost středů. Poloměry 20 a 10 dávají mez 30. Při zásahu roste skóre a cíl mění polohu.

```javascript
let x = 100;
let y = 100;
let skore = 0;

function setup() {
  createCanvas(500, 350);
}

function draw() {
  background(15, 25, 45);
  noStroke();
  fill("deepskyblue");
  circle(mouseX, mouseY, 40);
  fill("gold");
  circle(x, y, 20);
  if (dist(mouseX, mouseY, x, y) < 30) {
    skore++;
    x = random(20, width - 20);
    y = random(20, height - 20);
  }
  fill("white");
  textSize(20);
  text("Skóre: " + skore, 15, 30);
}
```

![Ilustrace: Lovec hvězd](/creative-coding/images/p5-kolize.svg)

[Otevřít interaktivní editor](/creative-coding/p5/index.html#lovec) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/lovec.js)

**Výzva:** Přidej výhru při 10 bodech nebo časový limit pomocí millis().

## 18. Flotila kosmických lodí

Funkce lod(x,y) přijímá parametry polohy. Jednotlivé části kreslí relativně k nim.

```javascript
function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(15, 25, 45);
  lod(100, 150);
  lod(250, 80);
  lod(400, 150);
}

function lod(x, y) {
  noStroke();
  fill("deepskyblue");
  triangle(x, y - 40, x - 25, y + 30, x + 25, y + 30);
  fill("white");
  circle(x, y, 18);
  fill("orange");
  triangle(x - 12, y + 30, x + 12, y + 30, x, y + 55);
}
```

[Otevřít interaktivní editor](/creative-coding/p5/index.html#flotila) · [Stáhnout zdrojový kód](/creative-coding/p5/examples/flotila.js)

**Výzva:** Jednu loď ovládej pomocí lod(mouseX, mouseY).

## Samostatné projektové výzvy

### Interaktivní krajina

Slunce sleduje myš; klávesa přepíná den/noc.

Nápověda: Proměnná den a keyPressed().

### Semafor

Tři světla se střídají.

Nápověda: Podmínky a frameCount nebo millis().

### Sluneční soustava

Planety obíhají kolem Slunce.

Nápověda: x = stredX + cos(uhel)*r; y obdobně se sin().

### Ohňostroj

Kliknutí vytvoří barevnou explozi.

Nápověda: mousePressed(), cyklus, random().

### Ping-pong

Míček a plošinka ovládaná myší.

Nápověda: Odraz y při dotyku plošinky.

### Generativní umění

Mřížka tvarů reaguje na myš.

Nápověda: Vnořené cykly, mouseX a mouseY.

### Obránce vesmíru

Loď se vyhýbá meteoritům nebo je odstraňuje světelným paprskem.

Nápověda: Šipky, mezerník a kontrola vzdálenosti.

## Ověř si znalosti

[Kvíz v katalogu](/kvizy/p5/) · [Spustit interaktivní kvíz](/creative-coding/p5/quiz.html)

1. Která funkce se provede jednou?
   - draw()
   - setup()
   - circle()

2. Kde je bod (0,0)?
   - Uprostřed
   - Vlevo dole
   - Vlevo nahoře

3. Průměr circle(100,80,40)?
   - 100
   - 40
   - 80

4. Co dělá x += 3?
   - Přičte 3
   - Nastaví 3
   - Vynásobí 3

5. Co nastavuje výplň?
   - stroke
   - background
   - fill

6. Co je mouseY?
   - Rychlost
   - Svislá poloha
   - Tlačítko

7. Kolikrát proběhne for(let i=0;i<5;i++)?
   - 5
   - 4
   - 6

8. Co bez background() v draw()?
   - Vždy stop
   - Bez pohybu
   - Kresba se automaticky nemaže

9. Co sleduje držení klávesy?
   - keyIsDown()
   - random()
   - createCanvas()

10. Co vrací dist()?
   - Velikost
   - Vzdálenost
   - Rychlost

## Co dělat, když kód nefunguje?

Zkontroluj závorky, uvozovky a názvy funkcí. Pokud se objekt nehýbe, ověř změnu souřadnic a umístění proměnné mimo draw(). Pro klávesnici klikni do plátna. Pokud vzniká stopa, zkontroluj background().

## Závěrečný projekt

Vytvoř vlastní obrázek nebo interaktivní svět. Použij proměnné, barvy, cyklus a vlastní funkci. Přidej animaci a ovládání myší nebo klávesnicí. Dokážeš vysvětlit, jak program funguje?

Další dokumentace: [p5.js 1.x](https://v1.p5js.org/reference/), [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [The Coding Train](https://thecodingtrain.com/).
