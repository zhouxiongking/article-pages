// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/8
// Done~~~
// 将数组扁平化并去除其中重复数据，
// 最终得到一个升序且不重复的数组
var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9,
  [11, 12, [12, 12, [13] ] ] ],
  10
];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 1. 数组扁平化
// 2. 去重
// 3. 排序
// 方法1：递归
// 1.1 不能使用箭头函数
Array.prototype.flat = function() {
  const result = this.map(item => {
    if (Array.isArray(item)) {
      return item.flat();
    }
    return [item];
  });
  return [].concat(...result);
};

// 方法2：使用while循环
Array.prototype.flat2 = function() {
  let result = this;
  // 寻找数组中有数组元素的值
  while(result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
};

// 2 去重
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// 3. 排序
/**
 * 正数 a > b 倒序
 * 0 顺序不变
 * 负数 a, b a < b 升序
 */
const sortFn = (a, b) => a - b;
arr.flat().unique().sort(sortFn);
arr.flat2().unique().sort(sortFn);

// 输入
var arr = [
  [1, 2, 2],
  [3, 4, [6, 7, [7]]],
  5
];
// 输出
[1, 2, 3, 4, 5, 6, 7]