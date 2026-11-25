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
