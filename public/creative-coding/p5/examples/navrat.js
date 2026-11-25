let x = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("royalblue");
  circle(x, 150, 40);
  x += 3;
  if (x > width + 20) {
    x = -20;
  }
}
