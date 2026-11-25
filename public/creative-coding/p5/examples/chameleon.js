function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(20);
  noStroke();
  fill(mouseX / 2, mouseY / 2, 255);
  circle(mouseX, mouseY, 30 + mouseY / 3);
}
