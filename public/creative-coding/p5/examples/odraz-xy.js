let x = 100;
let y = 100;
let vx = 3;
let vy = 2;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(20, 30, 50);
  x += vx;
  y += vy;
  if (x >= width - 20 || x <= 20) {
    x = constrain(x, 20, width - 20);
    vx = -vx;
  }
  if (y >= height - 20 || y <= 20) {
    y = constrain(y, 20, height - 20);
    vy = -vy;
  }
  noStroke();
  fill("cyan");
  circle(x, y, 40);
}
