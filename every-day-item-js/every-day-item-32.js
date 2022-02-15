// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/201
// Done~~~
// 输入一串数字字符串，经过解析
// 如果连续数字的话，就取连续的第一个数和最后一个数，中间用~隔开。
// 如果不连续就用,隔开。
// 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3,5,7~8,10'
/**
 * 方法1
 * 1. 字符串 -> 数组
 * 2. 定义结果变量result
 * 3. 使用临时变量tmp表示序列的第一个值
 * 4. 遍历数组，cur(当前元素值) + 1 和 next(后面一个元素的值)
 *    cur + 1 === next 不做处理
 *    cur + 1 !== next
 *      如果临时变量 !== 当前值，则表示是一个序列，result中添加tmp~cur
 *      如果临时变量 === 当前值相等,则表示是一个独立的值，result中添加cur
 *    动态更新临时变量的值
 */
function getValue(str) {
  const arr = str.split(',').map(i => +i);
  const result = [];
  let tmp = arr[0];
  arr.forEach((item, index, self) => {
    if (item + 1 !== self[index + 1]) {
      if (tmp !== item) {
        result.push(`${tmp}~${item}`);
      } else {
        result.push(item);
      }
      tmp = self[index + 1];
    }
  });
  return result.join();
}
const str = '1, 2, 3, 5, 7, 8, 10';
const str2 = '1, 2, 3, 5, 7, 8, 9, 10, 11, 13';
getValue(str);

/**
 * 方法2
 * 1. 字符串 -> 数组
 * 2. 数组 -> 获取新格式的字符串
 *   1, 2, 3, 5, 7, 8, 10 -> 1~2~3,5,7~8,10
 * 3. 正则表达式替换中间多余的~值
 */
function getValue2(str) {
  const arr = str.split(',').map(i => +i);
  const target = arr.reduce((pre, cur, index, self) => {
    if (index > 0) {
      if (cur - 1 === self[index - 1]) {
        return `${pre}~${cur}`;
      } else {
        return `${pre},${cur}`;
      }
    } else {
      return cur;
    }
  }, '');
  return target.split(',').map(item => {
    // 10~11~12~13~14 -> 1~5
    const reg = /(\d{1,})(~\d{1,})*(~\d{1,})/;
    return item.replace(reg, '$1$3');
  }).join();
}