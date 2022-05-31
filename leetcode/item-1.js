// 两数之和
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (!map.has(val)) {
        map.set(nums[i], i);
    } else {
        return [map.get(val), i];
    }
  }
  return [];
};

console.log(twoSum([2,7,11,15], 9));