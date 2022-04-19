// https://blog.csdn.net/qq_40608516/article/details/90721120?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=1
// Done~~~
// 找出数组中唯一落单的数（只出现一次的数）
// [1, 4, 3, 3, 2, 4, 1] => 2

/**
 * 方法1: 
 *   利用map的key-value特性存储数据，
 *   找出其实value值为1对应的key值
 */
function getUnique(arr) {
  const map = {};
  for (let item of arr) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      return +key;
    }
  }
}
const arr = [1, 4, 3, 3, 2, 4, 1];
getUnique(arr);

/**
 * 方法2: 
 *  如果一个值第一次出现的位置和最后一次出现的位置相同
 *  那么这个值就只出现了一次
 */
function getUnique2(arr) {
  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))[0];
}
getUnique2(arr);

/**
 * 方法3: 数字的异或运算
 *  两个相同的数字进行异或运算得到0
 *  0与任何值a异或运算得到a本身
 */
function getUnique3(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}
getUnique3(arr);
