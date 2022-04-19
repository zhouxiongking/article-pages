// https://www.cnblogs.com/-867259206/p/6795354.html
// Done~~~
// 判断两个数组是否相等
// 前提: 数组可能出现嵌套，每层数组的元素都是简单数据类型
// 判断相等条件: 数组元素顺序和每层元素的值是相同的
// a1 = [1]
// a2 = ['1']  // false

// a1 = [1, 2]
// a2 = [1, [2]]; // false

// a1 = [1, 2, 3, 4]
// a2 = [1, 2, 3, 4] // true

// a1 = ['a', ['b', ['c']], 'd']
// a2 = ['a', ['b', ['c']], 'd']  // true
Array.prototype.equals = function (arr) {
  if (!arr) {
    return false;
  }
  if (this.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && Array.isArray(arr[i])) {
      if (!this[i].equals(arr[i])) {
        return false;
      }
    } else {
      if (this[i] !== arr[i]) {
        return false;
      }
    }
  }
  return true;
};
let a1 = ['a', ['b', ['c']], 'd'];
let a2 = ['a', ['b', ['c']], 'd'];
a1.equals(a2);

let a3 = [1, 2];
let a4 = [1, [2]];
a3.equals(a4);

// 优化点
Object.defineProperty(Array.prototype, 'equals', {
  enumerable: false,
});
const arr = [1, 2, 3, 4];
for (let i in arr) {
  console.log(i);
}

