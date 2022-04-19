// https://blog.csdn.net/huohuoit/article/details/115350997?spm=1035.2023.3001.6557&utm_medium=distribute.pc_relevant_bbs_down_v2.none-task-blog-2~default~OPENSEARCH~Rate-15.pc_relevant_bbs_down_v2_default&depth_1-utm_source=distribute.pc_relevant_bbs_down_v2.none-task-blog-2~default~OPENSEARCH~Rate-15.pc_relevant_bbs_down_v2_default
// 两数之和
// 输入：一个整数数组和一个目标整数
// 计算过程：在数组中找出和为目标值的两个整数，不能为同一个元素
// 输出：两个数对应的数组下标
// arr = [2, 3, 5, 7, 11, 15], target = 10
// 10 = 3 + 7 => [1, 3]

/**
 * 方法1：使用一层循环，每次循环计算差值
 *  通过indexOf()方法判断，差值是否在数组中，
 *  如果存在，则返回两个值的索引，
 *  如果不存在，则返回[]
 * 时间复杂度：o(n^2)
 */
function twoSum(array, target) {
  for (let index = 0; index < array.length; index++) {
    let diff = target - array[index];
    const diffIndex = array.indexOf(diff);
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
  return [];
}
const arr = [2, 3, 5, 7, 11, 15];
const target = 10;
const target2 = 19;
const res1 = twoSum(arr, target);
const res2 = twoSum(arr, target2);
console.log('res1: ', res1);
console.log('res2: ', res2);

/**
 * 方法2：HashMap存储
 *  增加一个Map记录已经遍历过的数字及其索引值
 *  当遍历到一个新数字时，先计算出和目标值的差值，
 *  然后查询出差值是否在Map中出现过
 *  如果出现过，则直接拿出差值对应的索引值和当前数字对应的索引位
 *  如果遍历完成都没有出现过，则直接返回[]
 * 时间复杂度：o(n)
 * 空间复杂度：o(n)
 */
function twoSum2(array, target) {
  const map = new Map();
  for (let index = 0; index < array.length; index++) {
    const diff = target - array[index];
    if (map.has(diff)) {
      return [map.get(diff), index];
    } else {
      map.set(array[index], index);
    }
  }
  return [];
}
const arr2 = [2, 3, 5, 7, 11, 15];
const target3 = 10;
const target4 = 19;
const res3 = twoSum(arr2, target3);
const res4 = twoSum(arr2, target4);
console.log('res3: ', res3);
console.log('res4: ', res4);