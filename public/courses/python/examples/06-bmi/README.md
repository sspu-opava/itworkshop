# Kalkulačka BMI

Nauč se pracovat s desetinnými čísly a matematickým vzorcem na modelových údajích dospělých.

**Co si procvičíš:** float, aritmetika, podmínky, formátování.

**Obtížnost:** začátečník s předchozími příklady.

> Používej výhradně fiktivní údaje dospělých. U dětí a dospívajících se BMI hodnotí odlišně s ohledem na věk a pohlaví. BMI samo o sobě neurčuje zdravotní stav.

## 1. Příprava

Otevři složku tohoto příkladu ve VS Code. Vytvoř vlastní soubor `pokus.py` nebo otevři přiložený `main.py`. Program spustíš v terminálu příkazem `python main.py` (ve Windows případně `py main.py`). Pokud píšeš do `pokus.py`, změň název v příkazu.

## 2. Kompletní program

```python
hmotnost = float(input("Hmotnost modelové dospělé osoby (kg): "))
vyska = float(input("Výška (cm): ")) / 100
if hmotnost <= 0 or vyska <= 0:
    print("Hodnoty musí být kladné.")
else:
    bmi = hmotnost / vyska ** 2
    print(f"BMI: {bmi:.1f}")
    if bmi < 18.5:
        print("Pod hranicí běžného rozmezí dospělých.")
    elif bmi < 25:
        print("V běžném rozmezí dospělých.")
    else:
        print("Nad hranicí běžného rozmezí dospělých.")
```

## 3. Jak program funguje

### 1. Načti údaje

`float()` převede text na desetinné číslo. Zadej desetinnou tečku, například `70.5`. Dělením 100 převedeme centimetry na metry.

### 2. Zkontroluj vstup

`or` znamená logické NEBO. Pokud alespoň jedna hodnota není kladná, program výpočet neprovede.

### 3. Použij vzorec

BMI = hmotnost v kg / (výška v m)². Operátor `**` znamená mocninu. F-string `f"BMI: {bmi:.1f}"` zobrazí číslo zaokrouhlené na jedno desetinné místo, ale původní hodnotu nemění.

### 4. Porovnej výsledek

Podmínky se testují shora dolů. Druhá větev platí od 18,5 do hodnot menších než 25. Jde o zjednodušenou orientační klasifikaci pro dospělé, nikoli o diagnózu.

## 4. Vyzkoušej program

Ukázka možného průběhu nebo výsledku:

```text
Hmotnost: 70
Výška: 175
BMI: 22.9
V běžném rozmezí dospělých.
```

Spusť program několikrát a sleduj, které hodnoty nebo větve se mění. U náhodných příkladů se výsledek může lišit.

## 5. Časté chyby

- Dodržuj odsazení čtyřmi mezerami uvnitř podmínek a cyklů.
- Nezapomeň na dvojtečku na konci hlavičky podmínky nebo cyklu.
- Při psaní řetězců používej párové uvozovky.
- Tato krátká verze předpokládá číselný vstup. Nečíselný text vyvolá `ValueError`; jeho ošetření je vhodné jako rozšíření.

## 6. Tvoje výzvy

1. Vyzkoušej fiktivní údaje 70 kg a 175 cm nebo 80 kg a 180 cm.
2. Zobraz výsledek na dvě desetinná místa.
3. Bonus: vytvoř podobnou kalkulačku rychlosti v km/h.

## 7. Co si odnést

Zkus vlastními slovy vysvětlit hlavní principy: float, aritmetika, podmínky, formátování. Před každou úpravou odhadni, co se stane, a potom svůj odhad ověř spuštěním.
