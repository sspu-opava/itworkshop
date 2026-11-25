import turtle

okno = turtle.Screen()
okno.bgcolor("black")
pero = turtle.Turtle()
pero.speed(0)
pero.pensize(2)
barvy = ["red", "orange", "yellow", "lime", "cyan", "magenta"]
for i in range(100):
    pero.pencolor(barvy[i % 6])
    pero.forward(i * 3)
    pero.right(91)
pero.hideturtle()
turtle.done()
