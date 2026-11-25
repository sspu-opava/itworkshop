# Tajná zpráva

Zašifruj a zase dešifruj text pomocí opakovaného hesla.

**Co si procvičíš:** řetězce, for, enumerate, modulo, funkce ord a chr.

**Obtížnost:** začátečník s předchozími příklady.

> Jde o výukovou variantu Vigenèrovy šifry, nikoli bezpečné šifrování. Nepoužívej ji pro hesla ani citlivé údaje.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
abeceda = "abcdefghijklmnopqrstuvwxyz"
text = input("Text bez diakritiky: ").lower()
heslo = input("Heslo (a-z): ").lower()
rezim = input("Šifrovat (s), nebo dešifrovat (d)? ")
if not heslo or any(c not in abeceda for c in heslo) or rezim not in ("s", "d"):
    print("Neplatné heslo nebo režim.")
else:
    smer = 1 if rezim == "s" else -1
    vysledek = ""
    for i, znak in enumerate(text):
        if znak in abeceda:
            posun = ord(heslo[i % len(heslo)]) - ord("a")
            index = (abeceda.index(znak) + smer * posun) % 26
            vysledek += abeceda[index]
        else:
            vysledek += znak
    print(vysledek)
```

## 3. Jak program funguje

### 1. Připrav abecedu a heslo

Používáme 26 malých písmen anglické abecedy. `any()` vrací True, pokud alespoň jeden znak hesla není v abecedě. Prázdné heslo je také neplatné.

### 2. Zvol směr

Zkrácená podmínka nastaví `smer` na 1 pro šifrování a -1 pro dešifrování. Prázdný řetězec `vysledek` se postupně doplňuje.

### 3. Procházej text

`enumerate(text)` vrací index i znak. `i % len(heslo)` opakuje indexy hesla. V této zjednodušené variantě se index hesla posouvá i přes mezery a interpunkci.

### 4. Vypočti posun

`ord()` vrací číselný kód znaku. Odečtením kódu `a` vznikne posun 0 až 25. `abeceda.index(znak)` najde pozici písmene. Modulo 26 zajistí návrat na začátek nebo konec abecedy.

### 5. Sestav zprávu

`+=` připojí další znak. Znaky mimo abecedu zůstávají beze změny; vstup se ovšem předem převede na malá písmena. Dešifrování se stejným heslem obrátí posuny.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Text: ahoj
Heslo: abc
Režim: s
Výsledek: aiqj
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.

## 6. Tvoje výzvy

1. Zašifruj zprávu a pošli ji spolužákovi, který zná heslo.
2. Vyzkoušej špatné heslo a porovnej výsledek.
3. Bonus: použij samostatné počítadlo pouze pro písmena.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: řetězce, for, enumerate, modulo, funkce ord a chr. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
