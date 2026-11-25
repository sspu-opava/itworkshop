function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(230);
  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(i * 25, 100, 220);
    circle(20 + i * 40, 100, 35);
  }
}
