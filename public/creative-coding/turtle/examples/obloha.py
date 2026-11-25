import turtle
import random

okno = turtle.Screen()
okno.bgcolor("midnightblue")
pero = turtle.Turtle()
pero.speed(0)
pero.penup()
barvy = ["white", "yellow", "skyblue"]
for i in range(100):
    x = random.randint(-280, 280)
    y = random.randint(-180, 180)
    pero.goto(x, y)
    pero.dot(random.randint(2, 8), random.choice(barvy))
pero.hideturtle()
turtle.done()
