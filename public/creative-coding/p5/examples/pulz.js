function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(10, 20, 40);
  let prumer = 100 + sin(frameCount * 0.05) * 50;
  noStroke();
  fill("cyan");
  circle(200, 150, prumer);
}
