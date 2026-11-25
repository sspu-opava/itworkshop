function setup() {
  createCanvas(500, 350);
  background("white");
}

function draw() {
  if (mouseIsPressed) {
    stroke("royalblue");
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === "c") {
    background("white");
  }
}
