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
