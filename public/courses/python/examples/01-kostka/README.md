# Kostka štěstí

Simuluj hod kostkou a zjisti, zda padla šestka.

**Co si procvičíš:** proměnné, import, náhodná čísla, podmínky.

**Obtížnost:** začátečník.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
import random

input("Stiskni Enter a hoď kostkou!")
hod = random.randint(1, 6)
print("Padlo:", hod)
if hod == 6:
    print("Výborně, šestka!")
else:
    print("Zkus to znovu!")
```

## 3. Jak program funguje

### 1. Připrav náhodu

`import random` zpřístupní modul pro práci s náhodnými čísly. `input()` zastaví program, dokud nestiskneš Enter.

### 2. Hoď kostkou

`random.randint(1, 6)` vybere celé číslo od 1 do 6 včetně obou mezí. Výsledek uložíme do proměnné `hod`. Funkce `print()` ho zobrazí.

### 3. Rozhodni o výsledku

`if hod == 6:` testuje rovnost. Dvojité `==` porovnává, jednoduché `=` ukládá hodnotu. Odsazené příkazy patří k podmínce. Větev `else` se provede, pokud podmínka neplatí.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Padlo: 6
Výborně, šestka!
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.

## 6. Tvoje výzvy

1. Změň kostku na desetistěnnou a uprav podmínku výhry.
2. Vylosuj druhou kostku a vypiš součet obou hodů.
3. Přidej zvláštní zprávu pro jedničku pomocí `elif`.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: proměnné, import, náhodná čísla, podmínky. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
