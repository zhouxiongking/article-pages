// let particle;
let gravity;
let fireworks = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);
  strokeWeight(4);
  gravity = createVector(0, 0.2);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.2) {
    fireworks.push(new Firework());
  }
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}