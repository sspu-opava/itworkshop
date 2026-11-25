import turtle

pero = turtle.Turtle()
pero.speed(5)
barvy = ["blue", "cyan", "purple", "orange"]
for i in range(80):
    pero.pencolor(barvy[i % 4])
    pero.forward(i * 3)
    pero.right(91)
turtle.done()
