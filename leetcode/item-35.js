// https://leetcode.cn/problems/search-in-rotated-sorted-array/
// 搜索旋转排序数组
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if(nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let k = 0;
  // 确定数组旋转的下标
  while (k < nums.length) {
    if (nums[k] > nums[k + 1]) {
      break;
    }
    k++;
  }
  // 全升序
  let arr;
  let flag = 'no';
  if (k === nums.length) {
    arr = nums;
  } else {
    // 确定target在前半部分还是后半部分
    if (nums[0] > target) {
      arr = nums.slice(k + 1);
      flag = 'after';
    } else {
      arr = nums.slice(0, k + 1);
      flag = 'before';
    }
  }
  console.log('arr:', arr);
  // 二分查找
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      let c = 0;
      if (flag === 'after') {
        c = k + 1;
      }
      return m + c;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};

console.log(search([3, 1], 3));