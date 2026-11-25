import turtle

okno = turtle.Screen()
okno.bgcolor("midnightblue")
pero = turtle.Turtle()
pero.pencolor("white")
pero.pensize(2)
body = [(-150, 50), (-70, 100), (0, 20),
        (80, 100), (150, -50), (30, -80)]
pero.penup()
pero.goto(body[0])
pero.pendown()
for bod in body:
    pero.goto(bod)
    pero.dot(12)
pero.hideturtle()
turtle.done()
