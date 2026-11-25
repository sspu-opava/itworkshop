---
title: "Želví grafika v Pythonu"
description: "Nauč se kreslit, experimentovat a vytvářet vlastní grafické programy."
topic: programovani
tags: ["Python","turtle","grafika"]
difficulty: zacatecnik
ageMin: 12
durationMinutes: 75
featured: false
draft: false
updatedAt: "2026-11-25"
cover: /images/courses/zelvi-grafika.webp
coverAlt: Digitální želva kreslí barevnou spirálu.
---
![Ukázka kreativního programování](/creative-coding/images/turtle-cover.svg)

Představ si kreslicího robota, který poslouchá tvoje příkazy. Želví grafika vychází z jazyka Logo a učí algoritmy prostřednictvím kreslení. Želva má polohu, směr, pero a barvu. Nemusíš umět kreslit ručně – stačí sestavit posloupnost instrukcí.

## Jak začít

V lokálním Pythonu vytvoř soubor `kresleni.py` (nikoli `turtle.py`). Potřebuješ instalaci Pythonu s Tkinterem. Spusť `python kresleni.py`. Na webu otevři editor pod příkladem; používá webovou implementaci Pythonu Skulpt, nikoli Tkinter. Pokud některá funkce nefunguje, stáhni `.py` a spusť jej lokálně.

## Tahák příkazů

| Příkaz | Význam |
|---|---|
| `forward(100)` / `backward(100)` | pohyb vpřed/vzad |
| `right(90)` / `left(90)` | otočení ve stupních |
| `circle(50)` | kružnice s poloměrem 50 |
| `penup()` / `pendown()` | pohyb bez kreslení / kreslení |
| `pencolor("blue")` | barva pera |
| `pensize(5)` | tloušťka |
| `goto(100, 50)` | přesun na souřadnice |
| `speed(0)` | nejrychlejší režim |
| `clear()` | vymazání kresby |
| `hideturtle()` | skrytí želvy |

![Souřadnice želví grafiky](/creative-coding/images/turtle-souradnice.svg)

Počátek je uprostřed, x roste doprava, y nahoru. `import turtle` načte modul, `pero = turtle.Turtle()` vytvoří kreslicí objekt. `turtle.done()` udržuje lokální okno otevřené.

## 1. První čára

Želva začíná uprostřed a směřuje doprava. forward() posune želvu o zadanou vzdálenost; done() drží okno otevřené.

```python
import turtle

pero = turtle.Turtle()
pero.shape("turtle")
pero.forward(150)

turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#prvni-cara) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/prvni-cara.py)

**Výzva:** Změň vzdálenost na 80 a potom na -100. Předem odhadni výsledek.

## 2. Čtverec bez cyklu

Každá strana má délku 100. Po každé straně se želva otočí o 90 stupňů. Čtyři dvojice příkazů ji vrátí do výchozí polohy i směru.

```python
import turtle

pero = turtle.Turtle()
pero.forward(100)
pero.right(90)
pero.forward(100)
pero.right(90)
pero.forward(100)
pero.right(90)
pero.forward(100)
pero.right(90)

turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#ctverec-bez-cyklu) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/ctverec-bez-cyklu.py)

**Výzva:** Nakresli obdélník změnou délek dvou protilehlých stran.

## 3. Čtverec s cyklem

range(4) poskytne hodnoty 0, 1, 2, 3. Odsazené příkazy se provedou čtyřikrát.

```python
import turtle

pero = turtle.Turtle()
for i in range(4):
    pero.forward(100)
    pero.right(90)

turtle.done()
```

![Ilustrace: Čtverec s cyklem](/creative-coding/images/turtle-ctverec.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#ctverec) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/ctverec.py)

**Výzva:** Nakresli trojúhelník: tři opakování a otočení o 120 stupňů.

## 4. Univerzální mnohoúhelník

Součet vnějších úhlů pravidelného mnohoúhelníku je 360°. Podmínka omezuje počet stran. int() převádí vstup na celé číslo; nečíselný vstup zde není ošetřen.

```python
import turtle

pero = turtle.Turtle()
pocet = int(input("Počet stran (3–12): "))

if 3 <= pocet <= 12:
    for i in range(pocet):
        pero.forward(60)
        pero.right(360 / pocet)
else:
    print("Zadej číslo od 3 do 12.")

turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#mnohouhelnik) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/mnohouhelnik.py)

**Výzva:** Zkus 5, 6 a 8 stran. Pro mnoho stran zkrať krok.

## 5. Barevný domek

begin_fill() a end_fill() vyplní uzavřený tvar. Čtverec tvoří stěnu, trojúhelník střechu.

```python
import turtle

pero = turtle.Turtle()
pero.pensize(3)
pero.pencolor("navy")
pero.fillcolor("skyblue")
pero.begin_fill()
for i in range(4):
    pero.forward(100)
    pero.right(90)
pero.end_fill()

pero.fillcolor("red")
pero.begin_fill()
pero.left(60)
for i in range(3):
    pero.forward(100)
    pero.right(120)
pero.end_fill()

turtle.done()
```

![Ilustrace: Barevný domek](/creative-coding/images/domek.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#domek) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/domek.py)

**Výzva:** Přidej dveře a okna. Přesouvej se bez kreslení pomocí penup(), goto() a pendown().

## 6. Vlastní souhvězdí

Seznam obsahuje dvojice souřadnic. Kladné x směřuje doprava, kladné y nahoru. dot() nakreslí vyplněnou tečku.

```python
import turtle

okno = turtle.Screen()
okno.bgcolor("midnightblue")
pero = turtle.Turtle()
pero.pencolor("white")
pero.pensize(2)
body = [(-150, 50), (-70, 100), (0, 20),
        (80, 100), (150, -50), (30, -80)]
pero.penup()
pero.goto(body[0])
pero.pendown()
for bod in body:
    pero.goto(bod)
    pero.dot(12)
pero.hideturtle()
turtle.done()
```

![Ilustrace: Vlastní souhvězdí](/creative-coding/images/souhvezdi.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#souhvezdi) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/souhvezdi.py)

**Výzva:** Změň seznam bodů a nakresli vlastní souhvězdí nebo raketu.

## 7. Pěticípá hvězda

Otočení o 144° vede k přeskakování vrcholů pětiúhelníku.

```python
import turtle

pero = turtle.Turtle()
pero.pencolor("orange")
pero.pensize(4)
for i in range(5):
    pero.forward(150)
    pero.right(144)

turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#hvezda) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/hvezda.py)

**Výzva:** Vyzkoušej 8 kroků s úhlem 135°.

## 8. Geometrická květina

circle(70) kreslí kružnici o poloměru 70. Po každé kružnici změníme směr; 24 × 15 = 360.

```python
import turtle

pero = turtle.Turtle()
pero.speed(0)
pero.pencolor("purple")
for i in range(24):
    pero.circle(70)
    pero.right(15)
pero.hideturtle()

turtle.done()
```

![Ilustrace: Geometrická květina](/creative-coding/images/kvetina.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#kvetina) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/kvetina.py)

**Výzva:** Vytvoř 12 kružnic otočených o 30° nebo změň poloměr.

## 9. Hranatá spirála

Proměnná i roste od 0 do 59. Délky úseček jsou 0, 4, 8… 236.

```python
import turtle

pero = turtle.Turtle()
pero.speed(0)
for i in range(60):
    pero.forward(i * 4)
    pero.right(90)

turtle.done()
```

![Ilustrace: Hranatá spirála](/creative-coding/images/spirala.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#spirala) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/spirala.py)

**Výzva:** Změň úhel na 91 nebo 120 stupňů.

## 10. Duhová spirála

Operátor % vrací zbytek po dělení. i % 6 střídá indexy 0 až 5. Změna úhlu výrazně ovlivní výsledný ornament.

```python
import turtle

okno = turtle.Screen()
okno.bgcolor("black")
pero = turtle.Turtle()
pero.speed(0)
pero.pensize(2)
barvy = ["red", "orange", "yellow", "lime", "cyan", "magenta"]
for i in range(100):
    pero.pencolor(barvy[i % 6])
    pero.forward(i * 3)
    pero.right(91)
pero.hideturtle()
turtle.done()
```

![Ilustrace: Duhová spirála](/creative-coding/images/turtle-cover.svg)

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#duhova-spirala) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/duhova-spirala.py)

**Výzva:** Změň paletu, úhel nebo počet opakování. Při změně počtu barev použij len(barvy).

## 11. Rotující čtverce

def vytváří vlastní funkci. Vnější cyklus ji zavolá 36krát; vnitřní cyklus kreslí jednotlivé strany.

```python
import turtle

pero = turtle.Turtle()
pero.speed(0)
pero.pencolor("blue")

def ctverec():
    for i in range(4):
        pero.forward(100)
        pero.right(90)

for i in range(36):
    ctverec()
    pero.right(10)
pero.hideturtle()

turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#rotujici-ctverce) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/rotujici-ctverce.py)

**Výzva:** Přidej parametr delka do definice ctverec(delka) a místo 100 použij delka.

## 12. Hvězdná obloha

randint(a,b) losuje celé číslo včetně obou mezí. choice() vybírá náhodný prvek seznamu.

```python
import turtle
import random

okno = turtle.Screen()
okno.bgcolor("midnightblue")
pero = turtle.Turtle()
pero.speed(0)
pero.penup()
barvy = ["white", "yellow", "skyblue"]
for i in range(100):
    x = random.randint(-280, 280)
    y = random.randint(-180, 180)
    pero.goto(x, y)
    pero.dot(random.randint(2, 8), random.choice(barvy))
pero.hideturtle()
turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#obloha) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/obloha.py)

**Výzva:** Přidej měsíc nebo změň počet a velikost hvězd.

## 13. Bloudící robot

Náhodná procházka mění směr při každém kroku. Výsledný obraz se při každém spuštění liší.

```python
import turtle
import random

pero = turtle.Turtle()
pero.speed(0)
pero.pensize(3)
barvy = ["blue", "purple", "cyan", "orange"]
for i in range(200):
    pero.pencolor(random.choice(barvy))
    pero.forward(15)
    pero.right(random.choice([0, 90, 180, 270]))
turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#nahodna-prochazka) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/nahodna-prochazka.py)

**Výzva:** Použij random.randint(0, 360) a náhodnou délku kroku.

## 14. Kreslicí robot ovládaný klávesnicí

onkey propojuje stisk klávesy s funkcí. Název funkce předáváme bez závorek, aby se spustila až při události.

```python
import turtle

okno = turtle.Screen()
pero = turtle.Turtle()
pero.shape("turtle")
pero.pensize(3)

def dopredu():
    pero.forward(10)

def dozadu():
    pero.backward(10)

def doleva():
    pero.left(15)

def doprava():
    pero.right(15)

okno.listen()
okno.onkey(dopredu, "Up")
okno.onkey(dozadu, "Down")
okno.onkey(doleva, "Left")
okno.onkey(doprava, "Right")
okno.onkey(pero.clear, "space")
turtle.done()
```

[Otevřít interaktivní editor](/creative-coding/turtle/index.html#klavesnice) · [Stáhnout zdrojový kód](/creative-coding/turtle/examples/klavesnice.py)

**Poznámka:** tento příklad spouštěj primárně v lokálním Pythonu; podpora klávesových událostí se ve webovém interpretu může lišit.

**Výzva:** Přidej klávesy r, b, g pro barvy a u, d pro zvednutí a položení pera.

## Samostatné projektové výzvy

### Rostoucí kruhy

Deset kružnic vedle sebe, rostoucí poloměr, tři barvy.

Nápověda: Použij cyklus a penup().

### Šachovnice

8 × 8 střídavých čtverců.

Nápověda: Dva cykly a (radek + sloupec) % 2.

### Ohňostroj

Barevné exploze z paprsků.

Nápověda: Funkce s parametry polohy, cyklus a náhoda.

### Generátor krajiny

Hory, slunce, stromy, domy.

Nápověda: Rozděl kresbu do funkcí.

### Robot v bludišti

Nakresli bludiště a ovládej želvu.

Nápověda: Použij události klávesnice; kolize jako bonus.

### Digitální umělec

Uživatel zadá počet opakování, úhel a krok.

Nápověda: Uprav duhovou spirálu a použij input().

## Ověř si znalosti

[Kvíz v katalogu](/kvizy/zelvi-grafika/) · [Spustit interaktivní kvíz](/creative-coding/turtle/quiz.html)

1. Který příkaz posouvá želvu vpřed?
   - right(100)
   - forward(100)
   - goto(100,100)

2. Kolikrát proběhne range(6)?
   - 5
   - 7
   - 6

3. Úhel otočení trojúhelníku?
   - 60°
   - 120°
   - 90°

4. Co dělá penup()?
   - Zastaví želvu
   - Smaže kresbu
   - Zvedne pero

5. Kolik je 14 % 6?
   - 2
   - 6
   - 8

6. Co znamená def?
   - Proměnná
   - Definice funkce
   - Konec cyklu

7. Co dělá random.choice()?
   - Řadí
   - Převádí
   - Losuje položku

8. Bod vpravo nahoře?
   - (-100,50)
   - (100,50)
   - (100,-50)

## Co dělat, když kód nefunguje?

Zkontroluj odsazení, název souboru, dostupnost Tkinteru a `turtle.done()`. Pokud želva nekreslí, použij `pendown()`. Zmenši krok, pokud obrázek přesahuje okno.

## Závěrečný projekt

Vytvoř vlastní obrázek nebo interaktivní svět. Použij proměnné, barvy, cyklus a vlastní funkci. Přidej alespoň jeden prvek náhody nebo interakce. Dokážeš vysvětlit, jak program funguje?

Další dokumentace: [Python turtle](https://docs.python.org/3/library/turtle.html).
