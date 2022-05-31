// https://blog.csdn.net/qq_38211443/article/details/104830509?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_paycolumn_v3&utm_relevant_index=5
// Done~~~
// 搜索插入的位置
// 给定一个排序数组和一个目标值，
// 1. 在数组中找到目标值，并返回其索引。
// 2. 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
/**
  输入: [1, 3, 5, 6], 5
  输出: 2

  输入: [1, 3, 5, 6], 2
  输出: 1

  输入: [1, 3, 5, 6], 7
  输出: 4
 */

/**
 * 1. 循环遍历
 * 数组的每个值都与目标值进行比较
 *  - 如果当前值等于目标值，则返回当前值索引
 *  - 如果当前值大于目标值，则需要插入到当前位置对应的索引处，
 *    返回当前值对应的索引
 * o(n)
 */
function searchInsert1(array, target) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element >= target) {
      return index;
    }
  }
  return array.length;
}

const arr = [1, 3, 5, 6];
// const r1 = searchInsert1(arr, 5);
// const r2 = searchInsert1(arr, 2);
// const r3 = searchInsert1(arr, 7);
// console.log('r1: ', r1);
// console.log('r2: ', r2);
// console.log('r3: ', r3);

/**
 * 2. 二分查找
 * （1）取left和right，表示左右两个索引
 * （2）取中间索引对应的值，和目标值进行比较，
 *   - 中间值等于目标值，则返回中间值对应的索引
 *   - 中间值小于目标值，则修改left索引，继续寻找
 *   - 中间值大于目标值，则修改right索引，继续寻找
 * （3）如果没有找到目标值，则直接返回left索引。
 * o(logn)
 */
function searchInsert2(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const arr2 = [1, 3, 5, 6];
const r4 = searchInsert2(arr2, 5);
const r5 = searchInsert2(arr2, 2);
const r6 = searchInsert2(arr2, 7);
console.log('r4: ', r4);
console.log('r5: ', r5);
console.log('r6: ', r6);
