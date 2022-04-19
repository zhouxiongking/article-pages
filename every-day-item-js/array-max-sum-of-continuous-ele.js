// https://www.nhooo.com/note/qa55ou.html
// Done~~~
// 算法题：数组中n个连续元素的最大和
// [2, 5, 3, 4, 6], 2 => 10
// [2, 5, 3, 4, 6], 3 => 13

/**
  方法1：截取数组求和
    借助于数组的API，通过遍历
    截取数组的left到right索引位置的元素，求和
    依次求出最大值，最后进行输出
 */
function arrSum(arr) {
  return arr.reduce((pre, cur) => pre + cur);
}
function getMaxSum(arr, n) {
  let left = 0;
  let right = left + n; // >= left < right
  let max = arrSum(arr.slice(left, right));
  for (; right <= arr.length; left++, right++) {
    const curSum = arrSum(arr.slice(left, right));
    max = Math.max(curSum, max);
  }
  return max;
}
const arr = [2, 5, 3, 4, 6];
const res1 = getMaxSum(arr, 2);
const res2 = getMaxSum(arr, 3);
console.log('res1: ', res1);
console.log('res2: ', res2);

/**
 * 方法2：纯算法思路，不借助于数组的API
 * 1.在循环，第一次执行的时候求出连续n个数的和，
 *   作为最原始的最大值max，和上一轮值preSum
 * 2.在后续的循环中，通过preSum，先减去前一个数，
 *   再加上后一个数，得到新的和curSum
 * 3.比较curSum和max值大小，更新max，更新preSum
 * 4.直到循环结束，输出max
 */
// const arr = [2, 5, 3, 4, 6]; n = 2
// 当i = 0时，sum = 2 + 5 = 7，max = 7
// 当i = 1时，sum = 7 - 2 + 3 = 8，因为8 > 7，所以max = 8
// 当i = 2时，sum = 8 - 5 + 4 = 7，因为7 < 8，所以max = 8
// 当i = 3时，sum = 7 - 3 + 6 = 10，因为10 > 8，所以max = 10
function getMaxSum2(arr, n) {
  let max = 0;
  let preSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      for (let j = 0; j < n; j++) {
        max += arr[j];
      }
      preSum = max;
    } else {
      const curSum = preSum - arr[i - 1] + arr[i - 1 + n];
      if (curSum > max) {
        max = curSum;
      }
      preSum = curSum;
    }
  }
  return max;
}
const arr2 = [2, 5, 3, 4, 6];
const res3 = getMaxSum2(arr2, 2);
const res4 = getMaxSum2(arr2, 3);
console.log('res3: ', res3);
console.log('res4: ', res4);