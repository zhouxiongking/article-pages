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

// 绘制花边
MoonCake.prototype.drawEdge = function(radius, lineWidth) {
  const {  }
};
