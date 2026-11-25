function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  noStroke();
  for (let x = 20; x < width; x += 40) {
    for (let y = 20; y < height; y += 40) {
      fill(x / 2, y / 2, 220);
      circle(x, y, 30);
    }
  }
}
