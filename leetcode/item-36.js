// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// 在排序数组中查找元素的第一个和最后一个位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const length = nums.length;
  if (length === 0) return [-1, -1];
  let l = 0;
  let r = length - 1;
  let k = -1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      k = m;
      break;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  console.log('k:', k);
  if (k < 0) {
    return [-1, -1];
  } else {
    let m = k;
    let n = k;
    while (m >= 0) {
      if (nums[m - 1] === target) {
        m--;
      } else {
        break;
      }
    }
    while (n < length) {
      if (nums[n + 1] === target) {
        n++;
      } else {
        break;
      }
    }
  }
  return [m, n];
};

console.log(searchRange([5,7,7,8,8,10], 8));
