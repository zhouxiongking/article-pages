/*MoonCake.js*/
function MoonCake(options) {
  this.x = 0; // x轴坐标
  this.y = 0; // y轴坐标
  this.name = '五仁'; // 馅名
  this.strokeStyle = 'rgb(180, 110, 48)'; // 线条色
  this.fillStyle = 'rgb(250, 201, 81)'; // 填充色
  this.fontSize = 36; // 字体大小
  this.scale = 1; // 缩放大小
  Object.assign(this, options);
  this.ctx = null;
  this.progress = 0; // 绘制进度
  this.stepFn = []; // 绘制步骤
  this.isComplete = false; // 是否绘制结束
  this.nowDate = new Date(); // 当前时间
  this.lastDate = new Date(); // 结束时间
}
MoonCake.prototype.render = function (ctx) {
  // 渲染
  if (!ctx) throw new Error('context is undefined.');
  this.ctx = ctx;
  this.stepFn.length = 0;
  this.stepFn.push(() => this.drawEdge(180, 20));
  this.stepFn.push(() => this.drawEdge(140, 12));
  this.stepFn.push(() => this.drawRoundRectPath(140, 220, 40));
  this.stepFn.push(() => this.drawRoundRectPath(220, 140, 40));
  this.stepFn.push(() => this.drawLine(30, -110, 30, 110));
  this.stepFn.push(() => this.drawLine(0, -110, 0, 110));
  this.stepFn.push(() => this.drawLine(-30, -110, -30, 110));
  this.stepFn.push(() => this.drawLine(-110, -30, 110, -30));
  this.stepFn.push(() => this.drawLine(-110, 0, 110, 0));
  this.stepFn.push(() => this.drawLine(-110, 30, 110, 30));
  this.stepFn.push(() => this.drawRect(140, 140));
  this.stepFn.push(() => this.drawBox(140));
  this.stepFn.push(() => this.drawText());
  return this;
};
MoonCake.prototype.draw = function () {
  // 绘制
  for (let i = 0; i < this.progress; i++) {
    this.stepFn[i] && this.stepFn[i]();
  }
  if (this.progress > this.stepFn.length) return (this.isComplete = true);
  this.nowDate = new Date();

  if (this.nowDate - this.lastDate > 200) {
    this.progress++;
    this.lastDate = this.nowDate;
  }
};
MoonCake.prototype.drawText = function (n) {
  // 绘制文字
  const { ctx, x, y, name, fontSize, strokeStyle, scale } = this;
  let size = fontSize;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = strokeStyle;
  ctx.textAlign = 'center';
  ctx.font = `bolder ${size}px fangsong,self`;
  ctx.shadowColor = strokeStyle;
  ctx.shadowBlur = 1;
  if (name.length == 2) {
    ctx.fillText(name.charAt(0), 0, -size * 0.5 + 5);
    ctx.fillText(name.charAt(1), 0, size * 0.5 + 5);
  }
  if (name.length >= 3) {
    size *= 0.7;
    ctx.font = `bolder ${size}px fangsong,self`;
    ctx.fillText(name.charAt(0), 0, -size * 1 + 2);
    ctx.fillText(name.charAt(1), 0, size * 0 + 2);
    ctx.fillText(name.charAt(2), 0, size * 1 + 2);
  }
  ctx.restore();
};
MoonCake.prototype.drawBox = function (size) {
  // 绘制折线盒子
  const { ctx, x, y, strokeStyle, scale } = this;
  let v = 17,
    n = -size / 2;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 4;
  ctx.strokeStyle = strokeStyle;
  ctx.moveTo(v + n, n);
  ctx.lineTo(v + n, size - v + n);
  ctx.lineTo(size - v + n, size - v + n);
  ctx.lineTo(size - v + n, v + n);
  ctx.lineTo(v * 2 + n, v + n);
  ctx.lineTo(v * 2 + n, size - v * 2 + n);
  ctx.lineTo(size - v * 2 + n, size - v * 2 + n);
  ctx.lineTo(size - v * 2 + n, 45 + n);
  ctx.stroke();
  ctx.restore();
};
MoonCake.prototype.drawLine = function (x1, y1, x2, y2) {
  // 绘制线条
  const { ctx, x, y, strokeStyle, scale } = this;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 4;
  ctx.strokeStyle = strokeStyle;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
};
MoonCake.prototype.drawRect = function (width, height) {
  // 绘制矩形
  const { ctx, x, y, strokeStyle, fillStyle, scale } = this;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 4;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.rect(-width / 2, -height / 2, width, width);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};
MoonCake.prototype.drawRoundRectPath = function (width, height, radius) {
  // 绘制圆角矩形
  const { ctx, x, y, strokeStyle, fillStyle, scale } = this;
  let w = -width / 2,
    h = -height / 2;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.lineCap = 'round';
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(width - radius + w, height - radius + h, radius, 0, Math.PI / 2);
  ctx.lineTo(radius + w, height + h);
  ctx.arc(radius + w, height - radius + h, radius, Math.PI / 2, Math.PI);
  ctx.lineTo(w, radius + h);
  ctx.arc(radius + w, radius + h, radius, Math.PI, (Math.PI * 3) / 2);
  ctx.lineTo(width - radius + w, h);
  ctx.arc(
    width - radius + w,
    radius + h,
    radius,
    (Math.PI * 3) / 2,
    Math.PI * 2
  );
  ctx.lineTo(width + w, height - radius + h);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
};
MoonCake.prototype.drawEdge = function (radius, lineWidth) {
  // 绘制花边
  const { ctx, x, y, strokeStyle, fillStyle, scale } = this;
  let n = 12,
    v = 360 / n,
    m = 30;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.lineCap = 'round';
  for (let i = 0; i < n; i++) {
    let angle1 = (i * v * Math.PI) / 180;
    let angle2 = ((i + 1) * v * Math.PI) / 180;
    let angle3 = ((i + 0.5) * v * Math.PI) / 180;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    let _sx = radius * Math.cos(angle1),
      _sy = radius * Math.sin(angle1);
    ctx.lineTo(_sx, _sy);
    let _ex = radius * Math.cos(angle2),
      _ey = radius * Math.sin(angle2);

    let _mx = (radius + m) * Math.cos(angle3),
      _my = (radius + m) * Math.sin(angle3);
    ctx.bezierCurveTo(_mx, _my, _ex, _ey, _ex, _ey);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
};
