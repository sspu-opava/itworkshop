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
