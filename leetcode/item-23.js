// https://leetcode.cn/problems/merge-sorted-array/
// 合并两个有序数组
// 思想：双指针
// p1 -> nums1
// p2 -> nums2
// 使用一个中间数组result存在所有已经处理过的值，升序排列
// while(p1 < m || p2 < n) 
var merge = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let result = Array.from({length: m + n}).fill(0);
  let cur;
  while(p1 < m || p2 < n) {
    // 当p1指针处理完成
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums2[p2] >= nums1[p1]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    result[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = result[i];
  }
  return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));