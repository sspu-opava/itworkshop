# Kámen, nůžky, papír

Zahraj si proti počítači jedno kolo známé hry.

**Co si procvičíš:** seznam, náhodný výběr, logické operátory.

**Obtížnost:** začátečník.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
import random

moznosti = ["kámen", "nůžky", "papír"]
hrac = input("Kámen, nůžky, nebo papír? ").strip().lower()
pc = random.choice(moznosti)
if hrac not in moznosti:
    print("Neplatná volba.")
else:
    print("Počítač:", pc)
    if hrac == pc:
        print("Remíza!")
    elif (hrac, pc) in [("kámen", "nůžky"), ("nůžky", "papír"), ("papír", "kámen")]:
        print("Vyhráváš!")
    else:
        print("Vyhrál počítač!")
```

## 3. Jak program funguje

### 1. Připrav možnosti

Hranaté závorky vytvářejí seznam tří textových hodnot. `random.choice()` vybere jednu z nich.

### 2. Načti volbu

`strip()` odstraní mezery na začátku a konci, `lower()` převede velká písmena na malá. Diakritiku však nemění.

### 3. Ověř vstup

`not in` zjišťuje, zda zadaná hodnota není v seznamu. Pouze platná volba pokračuje do vnořené podmínky.

### 4. Vyhodnoť souboj

`(hrac, pc)` je dvojice hodnot (n-tice). Seznam obsahuje právě tři vítězné dvojice hráče. Pokud je dvojice v seznamu, hráč vyhrál. Rovnost znamená remízu; ostatní platné dvojice jsou prohry.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Kámen, nůžky, nebo papír? kámen
Počítač: nůžky
Vyhráváš!
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.

## 6. Tvoje výzvy

1. Přidej možnost zadávat volby čísly 1, 2 a 3.
2. Přidej opakování hry pomocí cyklu.
3. Počítej vítězství hráče a počítače.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: seznam, náhodný výběr, logické operátory. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
