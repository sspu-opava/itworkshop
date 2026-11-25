let x = 100;
let rychlost = 3;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("royalblue");
  x += rychlost;
  if (x >= width - 20 || x <= 20) {
    x = constrain(x, 20, width - 20);
    rychlost = -rychlost;
  }
  circle(x, 150, 40);
}
