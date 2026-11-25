<!--
import: https://raw.githubusercontent.com/LiaTemplates/Pyodide/master/README.md
-->

# Vyzkoušej si Python

V tomto kurzu si postupně vyzkoušíš výpis, proměnné, vstup, podmínky a cykly. Příklady můžeš upravovat. Do ukázek nikdy nevkládej skutečné jméno ani jiné osobní údaje.

## 1. První program

Funkce `print` vypíše text nebo výsledek výpočtu. Text píšeme do uvozovek.

```python
print("Ahoj, světe!")
print(3 + 4)
```
@Pyodide.eval

**Úkol:** Změň pozdrav a přidej další výpis. Než kód spustíš, zkus odhadnout druhou hodnotu.

### Kvíz 1

K čemu slouží funkce `print`?

[( )] Uloží hodnotu do souboru.
[(X)] Vypíše hodnotu.
[( )] Vypne program.
[[?]] `print` zobrazí text nebo výsledek v jeho výstupu.

## 2. Proměnné

Proměnná je pojmenované místo, do kterého si program dočasně uloží hodnotu. Hodnotu později můžeš změnit.

```python
body = 10
print(body + 5)
```
@Pyodide.eval

**Úkol:** Změň počet bodů a předpověz, co program vypíše. Potom přidej další proměnnou `bonus` a vypiš součet.

## 3. Vstup od uživatele

Funkce `input` vrací zadaný text. Pokud očekáváš celé číslo, převeď text pomocí `int`. Při zadání, které není číslo, může převod vyvolat chybu `ValueError`.

```python
jmeno = input("Jak ti máme říkat? ")
print("Ahoj, " + jmeno)

try:
    pocet = int(input("Kolik bodů přičíst? "))
    print("Nový počet:", pocet + 5)
except ValueError:
    print("Zadej celé číslo.")
```

**Úkol:** Spusť ukázku ve svém počítači, zadej přezdívku a potom číslo. Vyzkoušej také text místo čísla. V interaktivním online příkladu by `input` čekal na text z konzole, proto je tento blok určený pro místní Python.

## 4. Podmínky

Podmínka vybere jednu z cest podle toho, zda je výraz pravdivý. Řádek za `if` a `else` musí být odsazený.

```python
body = 12

if body >= 10:
    print("Cíl splněn.")
else:
    print("Zkus získat další body.")
```
@Pyodide.eval

**Úkol:** Změň hranici na jinou hodnotu a ověř oba výsledky.

### Kvíz 2

Co znamená operátor `>=`?

[( )] Je menší než.
[(X)] Je větší nebo rovno.
[( )] Je přesně stejné.
[[?]] Porovná, zda je levá hodnota větší než pravá, nebo se jí rovná.

## 5. Cykly

Cyklus `for` zopakuje odsazené instrukce. `range(5)` vytvoří postupně čísla od 0 do 4; horní hranice se nezapočítá.

```python
for cislo in range(1, 11):
    print(cislo)
```
@Pyodide.eval

**Úkol:** Uprav rozsah tak, aby se vypsala čísla od 3 do 7. Kolik hodnot cyklus vypíše?

## 6. Minihra: hádej číslo

Program si vybere celé číslo od 1 do 10. Máš nejvýše tři pokusy. Nečíselný vstup se bezpečně oznámí a stále spotřebuje jeden pokus.

```python
import random

tajemstvi = random.randint(1, 10)

for pokus in range(1, 4):
    try:
        tip = int(input(f"Pokus {pokus}/3. Zadej číslo 1–10: "))
    except ValueError:
        print("Tohle není celé číslo.")
        continue

    if tip == tajemstvi:
        print("Správně! Našel jsi číslo.")
        break
    if tip < tajemstvi:
        print("Tajné číslo je větší.")
    else:
        print("Tajné číslo je menší.")
else:
    print("Došly pokusy. Hledané číslo bylo", tajemstvi)
```

Tento program používá vstup z terminálu, a proto jej spusť místně v Pythonu. Pokud Python ještě nemáš, projdi návod [První program v Pythonu](https://itworkshop.cz/navody/prvni-program-v-pythonu/). Při místním vývoji webu odkaz na tento kurz načte jeho veřejnou kopii z domény `itworkshop.cz`.

**Rozšíření:** Přidej volbu obtížnosti, která změní rozsah tajného čísla. Počet pokusů ponech omezený.

## Co dál?

Změň příklady, pozoruj výsledek a zkus vysvětlit, proč se změnil. Celý zdroj můžeš uložit a otevřít v editoru Markdown nebo LiaScriptu.
