# Želví spirála

Naprogramuj barevnou geometrickou kresbu, která vzniká z jednoduchých pravidel.

**Co si procvičíš:** for, range, funkce, souřadnicová grafika.

**Obtížnost:** začátečník.

> Tento příklad spusť v lokálním Pythonu s podporou Tk (běžná instalace Pythonu pro Windows). Standardní `turtle` nefunguje přímo v běžném Pyodide.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
import turtle

pero = turtle.Turtle()
pero.speed(0)
barvy = ["blue", "cyan", "purple", "orange"]
for i in range(80):
    pero.pencolor(barvy[i % 4])
    pero.forward(i * 3)
    pero.right(91)
turtle.done()
```

## 3. Jak program funguje

### 1. Vytvoř želvu

Modul `turtle` otevře grafické okno. `Turtle()` vytvoří kreslicí objekt a `speed(0)` nastaví nejrychlejší kreslení.

### 2. Opakuj příkazy

`range(80)` poskytne čísla 0 až 79. Cyklus `for` postupně uloží každé číslo do `i`.

### 3. Střídej barvy

Operátor `%` vrací zbytek po dělení. Pro `i % 4` se opakují indexy 0, 1, 2, 3. Indexování seznamu začíná nulou.

### 4. Kresli a otáčej

`forward(i * 3)` posouvá želvu stále dál. `right(91)` ji otočí doprava o 91 stupňů. Úhel o jeden stupeň větší než pravý vytváří postupně pootočené závity. `done()` ponechá okno otevřené.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Otevře se grafické okno s barevnou čtvercovou spirálou.
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.

## 6. Tvoje výzvy

1. Změň úhel na 90, 89 nebo 120 stupňů a porovnej výsledky.
2. Změň počet opakování a délku kroku.
3. Přidej `pero.width(3)` před cyklus.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: for, range, funkce, souřadnicová grafika. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
