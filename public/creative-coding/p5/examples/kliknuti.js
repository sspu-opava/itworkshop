function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(230);
  noStroke();
  if (mouseIsPressed) {
    fill("orange");
  } else {
    fill("royalblue");
  }
  circle(mouseX, mouseY, 60);
}
