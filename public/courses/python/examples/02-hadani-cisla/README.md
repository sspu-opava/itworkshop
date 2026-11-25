# Tajemné číslo

Počítač ukryje číslo a ty ho zkusíš najít pomocí nápověd.

**Co si procvičíš:** cyklus while, vstup, převod na int, porovnávání.

**Obtížnost:** začátečník.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
import random

tajne = random.randint(1, 20)
tip = 0
pokusy = 0
while tip != tajne:
    tip = int(input("Hádej číslo od 1 do 20: "))
    pokusy += 1
    if tip < tajne:
        print("Zkus větší číslo.")
    elif tip > tajne:
        print("Zkus menší číslo.")
print("Uhodnuto! Počet pokusů:", pokusy)
```

## 3. Jak program funguje

### 1. Skryj číslo

`randint` vylosuje tajné číslo jednou, ještě před cyklem. `tip = 0` zajistí, že první podmínka cyklu bude pravdivá.

### 2. Opakuj hádání

`while tip != tajne:` opakuje odsazené příkazy, dokud se hodnoty nerovnají. `input()` vrací text, proto jej `int()` převede na celé číslo. `pokusy += 1` zvýší počítadlo o jedna.

### 3. Vytvoř nápovědu

Operátory `<` a `>` porovnávají velikost. `elif` se testuje pouze tehdy, když předchozí podmínka neplatí. Při správném tipu se žádná nápověda nevypíše.

### 4. Ukonči hru

Při dalším testu podmínky cyklu již `tip != tajne` neplatí. Poslední `print` není odsazený, proto se provede až po skončení cyklu.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Hádej číslo od 1 do 20: 10
Zkus větší číslo.
Hádej číslo od 1 do 20: 15
Uhodnuto! Počet pokusů: 2
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.
- Tato krátká verze předpokládá číselný vstup. Nečíselný text vyvolá `ValueError`; jeho ošetření je vhodné jako rozšíření.

## 6. Tvoje výzvy

1. Zvětši rozsah na 1 až 100.
2. Přidej pochvalu, pokud hráč uhodne nejvýše na tři pokusy.
3. Bonus: ošetři nečíselný vstup pomocí `try` a `except ValueError`.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: cyklus while, vstup, převod na int, porovnávání. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
