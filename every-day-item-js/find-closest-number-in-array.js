// https://www.cnblogs.com/echolun/p/13971943.html
// Done~~~
// 数组中找到与目标值最接近的数字
// arr = [1, 3, 5, 6, 10];
// target = 7; -> 6
// target = 3; -> 3

/**
 * 无序数组:
 * 通过遍历，依次求出每个元素值和目标值的差值，比较更新
 * 时间复杂度：o(n)
 */
const arr = [1, 3, 5, 6, 10];
function getClosestNumber(array, target) {
  let result = array[0];
  for (let index = 0; index < array.length; index++) {
    if (Math.abs(array[index] - target) < Math.abs(result - target)) {
      result = array[index];
    }
  }
  return result;
}
function getClosestNumber(array, target) {
  return array.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur;
  });
}
const res1 = getClosestNumber(arr, 7);
const res2 = getClosestNumber(arr, 3);
console.log('res1: ', res1);
console.log('res2: ', res2);

/**
 * 有序数组：二分查找法
 * 1. 取left和right两个索引，每次取出中间索引位mid的值与目标值比较
 *  - 如果中间位的值大于目标值，则想要寻找的值在左侧
 *  - 如果中间位的值小于目标值，则想要寻找的值在右侧
 * 2. 动态更新left和right，直到指针停留在相邻的两个数
 * 3. 进行最后一次计算，得到与目标值最近的数
 * 时间复杂度：o(log(n))
 */
const arr2 = [1, 3, 5, 8, 10, 11, 14, 16, 18];
function getClosestNumber2(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while(right - left > 1) {
    mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return Math.abs(array[left] - target) > Math.abs(array[right] - target) 
    ? array[right] : array[left];
}
const res3 = getClosestNumber2(arr2, 13);
const res4 = getClosestNumber2(arr2, 0);
console.log('res3: ', res3);
console.log('res4: ', res4);