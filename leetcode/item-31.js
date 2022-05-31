// https://leetcode.cn/problems/3sum/
// 三数之和
// 排序 + 双指针
var threeSum = function (nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const sum = 0 - nums[i];
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === sum) {
        result.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        while(left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] > sum) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
