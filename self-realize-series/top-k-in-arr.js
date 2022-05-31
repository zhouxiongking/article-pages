/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let quickSort = function (arr, begin, end, k) {
    if (begin > end) return;
    let tmp = arr[begin];
    let i = begin;
    let j = end;
    while(i !== j) {
      while(arr[j] >= tmp && j > i) {
        j--;
      }
      arr[i] = arr[j];
      while(arr[i] <= tmp && j > i) {
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = tmp;
    const ti = arr.length - k;
    // 一轮执行完成后判断
    if (i === ti) {
      return arr[ti];
    } else if (i < ti) {
      return quickSort(arr, i + 1, end, k);
    } else {
      return quickSort(arr, begin, i - 1, k);
    }
  };

  return quickSort(nums, 0, nums.length - 1, k);
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
