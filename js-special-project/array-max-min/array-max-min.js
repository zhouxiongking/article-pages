// 方法1：min max,扩展Array
// 求最小值
Array.prototype.min = function () {
  var min = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
};
// 求最大值
Array.prototype.max = function () {
  var max = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++) {
    if (this[i] > max) {
      max = this[i];
    }
  }
  return max;
};

var a = [2, 4, 10, 7, 5, 8 ,6];
console.log(a.min());
console.log(a.max());

// 方法2：借助Math对象的min和max方法
// 借助apply
Array.prototype.min2 = function () {
  return Math.min.apply(null, this);
};
Array.prototype.max2 = function () {
  return Math.max.apply(null, this);
};
console.log(a.min2());
console.log(a.max2());

// 方法3：借助reduce方法
Array.prototype.min3 = function () {
  return this.reduce(function (pre, cur) {
    const result = pre > cur ? cur : pre;
    return result;
  });
};
Array.prototype.max3 = function() {
  return this.reduce(function(pre, cur) {
    const result = pre > cur ? pre : cur;
    return result;
  });
};
console.log(a.min3());
console.log(a.max3());

// 方法4：借助Array sort()方法
var sortFn = function (a, b) {
  return a - b;
};
const sortArr = a.sort(sortFn);

// 方法5：借助ES6扩展运算符
console.log(Math.min(...a));
console.log(Math.max(...a));
