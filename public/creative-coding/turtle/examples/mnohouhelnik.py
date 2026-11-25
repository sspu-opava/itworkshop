import turtle

pero = turtle.Turtle()
pocet = int(input("Počet stran (3–12): "))

if 3 <= pocet <= 12:
    for i in range(pocet):
        pero.forward(60)
        pero.right(360 / pocet)
else:
    print("Zadej číslo od 3 do 12.")

turtle.done()
