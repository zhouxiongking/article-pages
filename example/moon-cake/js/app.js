/*app.js*/
function Application() {
  this.canvas = null;
  this.ctx = null;
  this.w = 0;
  this.h = 0;
  this.types = ['五仁', '蛋黄', '莲蓉', '豆沙', '芝麻'];
  this.words = [
    '但愿人长久,千里共婵娟',
    '海上升明月,天涯共此时',
    '今夜月明人尽望，不知秋思落谁家',
  ];
  this.moonCake = null;
  this.text = '';
  this.textIndex = 0;
  this.dt = 0;
  this.init();
}
Application.prototype.init = function () {
  // 初始化
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  window.addEventListener('resize', this.reset.bind(this));
  this.reset();
  this.render();
  this.step();
};
Application.prototype.reset = function () {
  // 重置
  this.dt = 0;
  this.w = this.canvas.width = this.ctx.width = window.innerWidth;
  this.h = this.canvas.height = this.ctx.height = window.innerHeight;
  this.render();
};
Application.prototype.render = function () {
  // 主渲染
  const { w, h, ctx, types, words } = this;
  this.text = words[~~(words.length * Math.random())].split(',');
  this.textIndex = 0;
  // 实例化月饼
  this.moonCake = new MoonCake({
    x: w / 2,
    y: h / 2,
    scale: 0.85,
    name: types[~~(types.length * Math.random())],
  }).render(ctx);
};
Application.prototype.drawText = function () {
  const { ctx, w, h, text } = this;
  ctx.save();
  ctx.fillStyle = 'rgb(253,190,0)';
  ctx.textAlign = 'center';
  ctx.font = `bolder 32px fangsong,self`;
  ctx.shadowColor = 'rgb(253,190,0)';
  ctx.shadowBlur = 10;
  ctx.fillText(text[0].substr(0, this.textIndex), w / 2, h * 0.36 + 240);
  if (text[0].length < this.textIndex) {
    ctx.fillText(
      text[1].substr(0, this.textIndex - text[0].length),
      w / 2,
      h * 0.36 + 240 + 52
    );
  }
  // ctx.restore();
};
Application.prototype.step = function () {
  // requestAnimationFrame(this.step.bind(this));
  const interval = setInterval(() => {
    this.step();
    if (this.moonCake.isComplete) {
      clearInterval(interval);
    }
  }, 100);
  const { ctx, w, h } = this;
  ctx.clearRect(0, 0, w, h);
  this.moonCake && this.moonCake.draw();
  if (this.moonCake.isComplete) {
    this.moonCake.y -= 1.2;
    this.moonCake.y = Math.max(h * 0.36, this.moonCake.y);
    if (this.moonCake.y == h * 0.36) {
      this.drawText();
      if (this.dt % 20 == 0 && this.textIndex < this.text.join('').length) {
        this.textIndex++;
      }
    }
  }
  this.dt++;
};
window.onload = new Application();
