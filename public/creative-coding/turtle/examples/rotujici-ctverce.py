import turtle

pero = turtle.Turtle()
pero.speed(0)
pero.pencolor("blue")

def ctverec():
    for i in range(4):
        pero.forward(100)
        pero.right(90)

for i in range(36):
    ctverec()
    pero.right(10)
pero.hideturtle()

turtle.done()
