function setup() {
  createCanvas(500, 350);
  background(20);
  noStroke();
}

function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255));
  circle(mouseX, mouseY, random(20, 100));
}
