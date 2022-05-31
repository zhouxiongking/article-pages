// https://leetcode.cn/problems/container-with-most-water/
// 盛最多水的容器
// 思想：双指针，一个从左开始，一个从又开始
// 每次求出双指针之间的面积，比较最大值
// 然后移动数值比较小的那个指针，如果是左指针，则右移，如果是右指针则左移
// 直到两个指针重叠
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    const min = Math.min(height[l], height[r]);
    const k = r - l;
    const s = min * k;
    max = Math.max(max, s);
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(arr));
