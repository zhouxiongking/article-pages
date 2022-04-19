// https://blog.csdn.net/qq_38211443/article/details/104830509?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2.pc_relevant_paycolumn_v3&utm_relevant_index=5
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
/**
  输入: [1,3,5,6], 5
  输出: 2

  输入: [1,3,5,6], 2
  输出: 1

  输入: [1,3,5,6], 7
  输出: 4
 */

// 1. 循环遍历
// 2. 二分查找
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
