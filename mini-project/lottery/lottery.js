/*
 * @Author: zhouxiongking zhouxiongking@163.com
 * @Date: 2023-09-19 19:46:48
 * @LastEditors: zhouxiongking zhouxiongking@163.com
 * @LastEditTime: 2023-09-19 19:47:04
 * @FilePath: /article-pages/mini-project/lottery/lottery.js
 * @Description: 
 */
"use strict";
var Lottery = /** @class */ (function () {
  function Lottery(options) {
    this.count = 0; //已转动次数
    this.timer = 0; //定时器
    this.started = false; //是否开始
    this.el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
    this.index = options.index || 0; //当前索引
    this.end = options.end || 1; //结束索引
    this.total = options.total || 4; //转动总数
    this.speed = options.speed || 100;//转动时间
    this.nodes = this.el.querySelectorAll('.lottery-ui');
    this.handle = options.handle || function () { };//回调函数
    this.init();
  }
  Lottery.prototype.init = function () {
    if (this.started)
      return;
    this.started = true;
    this.roll();
    return this;
  };
  Lottery.prototype.roll = function () {
    var _this = this;
    this.nodes.forEach(function (node) {
      node.classList.remove('active');
    });
    this.index++;
    // 每圈转动结束后重新开始 转动次数加1
    if (this.index > this.nodes.length - 1) {
      this.count++;
      this.index = 0;
    }
    // 给当前索引节点添加类名
    this.nodes[this.index].classList.add('active');
    // 如果转动次数等于转动总数并且当前索引等于结束索引 停止循环执行回调
    if (this.count >= this.total && this.index === this.end) {
      setTimeout(function () {
        _this.handle.call(_this, _this);
        _this.started = false;
      }, 500);
      clearTimeout(this.timer);
    } else {
      // 自定义转动到某一圈的转动时间
      if (this.count >= this.total - 3) {
        this.speed += 10;
      } else if (this.count >= this.total - 1) {
        this.speed += 30;
      }
      // 递归执行当前
      this.timer = setTimeout(function () {
        _this.roll();
      }, this.speed);
    }
    return this;
  };
  return Lottery;
}());