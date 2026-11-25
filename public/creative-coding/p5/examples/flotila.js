function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(15, 25, 45);
  lod(100, 150);
  lod(250, 80);
  lod(400, 150);
}

function lod(x, y) {
  noStroke();
  fill("deepskyblue");
  triangle(x, y - 40, x - 25, y + 30, x + 25, y + 30);
  fill("white");
  circle(x, y, 18);
  fill("orange");
  triangle(x - 12, y + 30, x + 12, y + 30, x, y + 55);
}
