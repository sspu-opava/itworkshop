<!--
author: ITWORKSHOP
title: Vyzkoušej si Python
language: cs
mode: Textbook
comment: Šest upravitelných programů pro úplné začátečníky.
import: https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md
-->

# Vyzkoušej si Python

Začni krátkým programem, uprav ho a spusť. Kurz střídá šest připravených projektů s otázkami LiaScriptu. Ukázky s `@Pyodide.eval` běží po spuštění v prohlížeči. Místní programy `main.py` si můžeš stáhnout a otevřít v Pythonu 3; nepotřebují balíčky z `pip`.

> V kódu používej přezdívky a vymyšlené hodnoty. Do online nástrojů nezadávej osobní údaje. Kalkulačka BMI v tomto kurzu není zdravotní posouzení; její ukázkové hodnoty jsou smyšlené.

## 1. Kostka štěstí

Funkce `randint` vybere celé číslo včetně obou hranic. Než program spustíš, tipni si, které výsledky může vrátit.

```python
import random

hod = random.randint(1, 6)
print("Na kostce padlo:", hod)
```
@Pyodide.eval

Změň rozsah na kostku s osmi stěnami. Potom přidej druhý hod a vypiš součet.

Která horní hodnota může z `randint(1, 6)` vypadnout?

[( )] Jen čísla od 1 do 5.
[(X)] Také číslo 6.
[( )] Také číslo 0.
[[?]] Obě hranice funkce `randint` zahrnuje.

## 2. Tajemné číslo

Program porovnává tip se zvoleným číslem. V tomto běhovém příkladu je řada tipů uložená v seznamu, takže můžeš vidět průběh bez zadávání osobních údajů nebo vyskakovacích dialogů.

```python
tajemstvi = 7
tipy = [3, 9, 7]

for pokus, tip in enumerate(tipy, start=1):
    print("Pokus", pokus, "– tip:", tip)
    if tip == tajemstvi:
        print("Správně, číslo je", tajemstvi)
        break
    if tip < tajemstvi:
        print("Tajné číslo je větší.")
    else:
        print("Tajné číslo je menší.")
```
@Pyodide.eval

Změň tajemství nebo pořadí tipů. Ověř také, že se program po správném tipu zastaví.

Jaký účel má `break`?

[( )] Spustí program znovu od začátku.
[(X)] Ukončí aktuální cyklus.
[( )] Převede text na číslo.

## 3. Kámen, nůžky, papír

Počítač vybere jednu ze tří možností. Doplň proměnnou `tvoje_volba` a pak rozšiř podmínku tak, aby rozpoznala výhru, prohru i remízu.

```python
import random

moznosti = ["kámen", "nůžky", "papír"]
computer = random.choice(moznosti)
tvoje_volba = "kámen"

print("Počítač:", computer)
print("Ty:", tvoje_volba)

if tvoje_volba == computer:
    print("Remíza.")
elif (tvoje_volba, computer) in (("kámen", "nůžky"), ("nůžky", "papír"), ("papír", "kámen")):
    print("Vyhráváš.")
else:
    print("Tentokrát vyhrál počítač.")
```
@Pyodide.eval

Vysvětli, proč výhra závisí na dvojici možností, ne jen na jednom slově. Potom přidej počítadlo bodů.

## 4. Želví grafika

Želví knihovna kreslí podle příkazů. Základní tvar čtverce vznikne čtyřmi stejně dlouhými pohyby a pravým otočením.

```python
import turtle

pero = turtle.Turtle()
for _ in range(4):
    pero.forward(80)
    pero.right(90)
turtle.done()
```

Turtle využívá grafické okno, které není součástí běhového modulu Pyodide v tomto kurzu. Spusť tento příklad v místním Pythonu s Tkinterem nebo v [připraveném želvím editoru](https://sspu-opava.github.io/itworkshop/creative-coding/turtle/index.html). Editor používá webový Skulpt; jeho chování se může od místního Pythonu lišit.

Kolik otočení o 90° uzavře čtverec?

[[4]]
[[?]] Čtverec má čtyři strany a čtyři vrcholy.

## 5. Tajná zpráva

Caesarova šifra posouvá písmena v abecedě. Tento příklad pracuje jen s ASCII písmeny, mezeru ponechá beze změny a kód pro dešifrování posune písmena opačným směrem.

```python
zprava = "AHOJ SVETE"
posun = 3
vysledek = ""

for znak in zprava:
    if "A" <= znak <= "Z":
        zaklad = ord("A")
        novy_kod = (ord(znak) - zaklad + posun) % 26 + zaklad
        vysledek += chr(novy_kod)
    else:
        vysledek += znak

print(vysledek)
```
@Pyodide.eval

Změň text i posun. Proč samotná Caesarova šifra není vhodná k ochraně skutečných zpráv?

[( )] Protože posun je příliš pomalý.
[(X)] Protože má málo možných klíčů a lze ji snadno vyzkoušet.
[( )] Protože mění jen barvu textu.
[[?]] Jde o historickou ukázku, ne o moderní bezpečné šifrování.

## 6. Kalkulačka BMI

Program níže používá pouze smyšlené hodnoty. Vzorec vydělí hmotnost druhou mocninou výšky v metrech. Výsledek je matematické cvičení, nikoli diagnóza nebo doporučení.

```python
hmotnost_kg = 53.0
vyska_m = 1.64

bmi = hmotnost_kg / (vyska_m ** 2)
print("Ukázkový výpočet:", round(bmi, 1))
```
@Pyodide.eval

Změň hodnoty jen na smyšlený příklad. Před výpočtem ověř, že výška je větší než nula.

Co znamená `** 2`?

[( )] Vydělí číslo dvěma.
[(X)] Umocní číslo na druhou.
[( )] Převede číslo na text.

## Co dál?

- [Stáhni šest návodů a programů `main.py`](https://sspu-opava.github.io/itworkshop/courses/python/examples/README.md)
- [Prohlédni si úplný návod](https://sspu-opava.github.io/itworkshop/navody/prvni-program-v-pythonu/)
- [Procvič základy v samostatném kvízu](https://sspu-opava.github.io/itworkshop/kvizy/python-zaklady/)

LiaScript a Pyodide spouštějí kód v prohlížeči. Interaktivní vstup v těchto příkladech nahrazuje upravitelná proměnná; plnou konzolovou verzi hry najdeš mezi místními soubory.
