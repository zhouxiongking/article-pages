class Firework {
  constructor() {
    this.colorH = random(255);
    this.firework = new Particle(random(width), height, true, this.colorH);
    this.fireworks = [];
    this.exploded = false;
  }
  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    // 使用逆序索引
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      this.fireworks[i].applyForce(gravity);
      this.fireworks[i].update();
      if (this.fireworks[i].done()) {
        this.fireworks.splice(i, 1);
      }
    }
  }
  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let i = 0; i < this.fireworks.length; i++) {
      this.fireworks[i].show();
    }
  }
  explode() {
    for (let i = 0; i < 100; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, false, this.colorH);
      this.fireworks.push(p);
    }
  }
  done() {
    if (this.exploded && !this.fireworks.length) {
      return true;
    }
    return false;
  }
}