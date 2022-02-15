// 旋转数组
// Done~~~~
/**
 * 示例 1：
    输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
    输出: [5, 6, 7, 1, 2, 3, 4]
    解释:
    向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
    向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
    向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

    k = 3 [5, 6, 7] [1, 2, 3, 4]

    ...
    向右旋转 7 步: [1, 2, 3, 4, 5, 6, 7]
    向右旋转 8 步: [7, 1, 2, 3, 4, 5, 6]
    取余： k = 9 2 = 9 % 7
    k = 31  31 % 7 = 4

  示例 2：
    输入: [-1, -100, 3, 99] 和 k = 2
    输出: [3, 99, -1, -100]
    解释: 
    向右旋转 1 步: [99, -1, -100, 3]
    向右旋转 2 步: [3, 99, -1, -100]
 */
// 方法1：循环，每次取出数组的最后一位（pop），然后插入到数组的最前面（unshift）
function rotate1(arr, k) {
  const step = k % arr.length;
  for (let i = 0; i < step; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var k1 = 3;
var arr2 = [1, 2, 3, 4, 5, 6, 7];
var k2 = 13;
var result1 = rotate1(arr1, k1);
var result2 = rotate1(arr2, k2);

// 方法2：slice() -> 不改变数组本身
function rotate2(arr, k) {
  const step = k % arr.length;
  return arr.slice(-step).concat(arr.slice(0, arr.length - step));
  // [5, 6, 7] [1, 2, 3, 4]
}
var arr3 = [1, 2, 3, 4, 5, 6, 7];
var k3 = 3;
var result3 = rotate2(arr3, k3);

// 方法3：splice() -> 改变数组本身
function rotate3(arr, k) {
  const step = k % arr.length;
  return arr.splice(-step).concat(arr);
  // [5, 6, 7] arr -> [1, 2, 3, 4]
}
var arr4 = [1, 2, 3, 4, 5, 6, 7];
var k4 = 3;
var result4 = rotate3(arr4, k4);