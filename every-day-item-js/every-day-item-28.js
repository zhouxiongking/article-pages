// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/113
// Done~~~
// 随机生成一个长度为 10 的整数类型的数组，
// 例如 [2, 10, 3, 35, 5, 11, 10, 11, 20]，
// 将其排列成一个新数组，要求新数组形式如下，
// [[2, 3, 5], [10, 11], [20], [35]]
// 2 / 10 = 0.2 -> 0  1
// 1. 获取随机数 0-99
// 2. 去重
// 3. 排序
// 4. 存储 0-9 10-19 20-29

// 5-10 0-1 * 6 0-6 + 5 -> 5 - 11 向下取整
// 1. 随机数
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let initArr = Array.from({ length: 10 }, () => { return getRandomNumber(0, 99); });
// 2 去重
initArr = [...new Set(initArr)];
// 3. 排序
initArr.sort((a, b) => a - b);
// 4. 存储 map
const map = {};
initArr.forEach(item => {
  const key = Math.floor(item / 10);
  if (!map[key]) {
    map[key] = [];
  }
  map[key].push(item);
});
const result = [];
for (const key in map) {
  result.push(map[key]);
}
console.log(result);

