let x = 200;
let y = 150;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) x -= 3;
  if (keyIsDown(RIGHT_ARROW)) x += 3;
  if (keyIsDown(UP_ARROW)) y -= 3;
  if (keyIsDown(DOWN_ARROW)) y += 3;
  x = constrain(x, 0, width - 40);
  y = constrain(y, 0, height - 40);
  fill("royalblue");
  square(x, y, 40);
}
