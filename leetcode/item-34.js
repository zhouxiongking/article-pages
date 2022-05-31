// https://leetcode.cn/problems/next-permutation/
// 下一个排列
// 思想：找到第一个A[i] < A[j]的两个值，
// 然后在[j, end)范围内从后向前找到第一个k，使得A[k] > A[i]
// 交换A[i]和A[k]
// 此时[j, end)范围内的数是降序的，然后将[j, end)范围内的数置为升序。
var nextPermutation = function (nums) {
  const length = nums.length;
  if (length < 1) return;

  let i = length - 2;
  let j = length - 1;
  let k = length - 1;
  // 找出第一个A[i]<A[j]的序列
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }
  if (i >= 0) {
    // 从[j, end)中找到第一个大于A[i]的值，A[k]
    while (nums[k] <= nums[i]) {
      k--;
    }
    // 交换A[i]和A[k]
    swap(nums, i, k);
  }
  // 对[j, end)升序操作，原本是降序，直接升序
  let m = j;
  let n = length - 1;
  let mid = Math.floor((m + n) / 2);
  for (let m = j, n = length - 1; m <= mid; m++, n--) {
    swap(nums, m, n);
  }
  return nums;
};

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

console.log(nextPermutation([1, 5, 1]));
