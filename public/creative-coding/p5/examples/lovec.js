let x = 100;
let y = 100;
let skore = 0;

function setup() {
  createCanvas(500, 350);
}

function draw() {
  background(15, 25, 45);
  noStroke();
  fill("deepskyblue");
  circle(mouseX, mouseY, 40);
  fill("gold");
  circle(x, y, 20);
  if (dist(mouseX, mouseY, x, y) < 30) {
    skore++;
    x = random(20, width - 20);
    y = random(20, height - 20);
  }
  fill("white");
  textSize(20);
  text("Skóre: " + skore, 15, 30);
}
