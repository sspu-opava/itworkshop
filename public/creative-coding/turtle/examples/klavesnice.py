import turtle

okno = turtle.Screen()
pero = turtle.Turtle()
pero.shape("turtle")
pero.pensize(3)

def dopredu():
    pero.forward(10)

def dozadu():
    pero.backward(10)

def doleva():
    pero.left(15)

def doprava():
    pero.right(15)

okno.listen()
okno.onkey(dopredu, "Up")
okno.onkey(dozadu, "Down")
okno.onkey(doleva, "Left")
okno.onkey(doprava, "Right")
okno.onkey(pero.clear, "space")
turtle.done()
