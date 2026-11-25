import turtle

pero = turtle.Turtle()
pero.pensize(3)
pero.pencolor("navy")
pero.fillcolor("skyblue")
pero.begin_fill()
for i in range(4):
    pero.forward(100)
    pero.right(90)
pero.end_fill()

pero.fillcolor("red")
pero.begin_fill()
pero.left(60)
for i in range(3):
    pero.forward(100)
    pero.right(120)
pero.end_fill()

turtle.done()
