import random

input("Stiskni Enter a hoď kostkou!")
hod = random.randint(1, 6)
print("Padlo:", hod)
if hod == 6:
    print("Výborně, šestka!")
else:
    print("Zkus to znovu!")
