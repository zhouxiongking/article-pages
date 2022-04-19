// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/96
// Done~~~
/**
 * 将某公司销售额由对象存储转换为数组存储
 * 输入：{1: 222, 2: 123, 5: 888}
 * 输出：[222, 213, null, null, 888, null, null, null, null, null, null, null]
 */
// 方法1
const obj = {1: 222, 2: 123, 5: 888};
let result = Array.from({ length: 12 });
result = result.map((item, index) => {
  if (obj[index + 1]) {
    return obj[index + 1];
  }
  return null;
});

// 方法2
let result2 = Array.from({ length: 12 }).fill(null);
Object.keys(obj).forEach(item => {
  result2[item - 1] = obj[item];
});