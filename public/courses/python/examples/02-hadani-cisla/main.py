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
