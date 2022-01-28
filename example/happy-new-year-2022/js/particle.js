class Particle {
  constructor(x, y, isFirework, colorH) {
    this.lifespan = 255;
    this.colorH = colorH;
    this.isFirework = isFirework;
    this.pos = createVector(x, y);
    if (this.isFirework) {
      this.vel = createVector(0, random(-16, -12));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel = this.vel.mult(random(2, 12));
    }
    this.acc = createVector(0, 0);
  }
  update() {
    if (!this.isFirework) {
      this.vel = this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show() {
    colorMode(HSB);
    if (this.isFirework) {
      strokeWeight(4);
      stroke(this.colorH, 255, 255);
    } else {
      strokeWeight(2);
      stroke(this.colorH, 255, 255, this.lifespan);
    }
    point(this.pos.x, this.pos.y);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  done() {
    return this.lifespan < 0;
  }
}