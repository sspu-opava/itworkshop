import turtle
import random

pero = turtle.Turtle()
pero.speed(0)
pero.pensize(3)
barvy = ["blue", "purple", "cyan", "orange"]
for i in range(200):
    pero.pencolor(random.choice(barvy))
    pero.forward(15)
    pero.right(random.choice([0, 90, 180, 270]))
turtle.done()
