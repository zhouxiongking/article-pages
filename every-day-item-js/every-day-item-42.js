// 字符串全排列
/**
 * 示例1
 * 输入: abc
 * 输出: abc acb bac bca cab cba
 * 
 * 示例2
 * 输入: abcd
 * 输出: abcd abdc acbd acdb adbc adcb ... dcba -> 共计24个值
 */
function permutation(str) {
  let res = [str[0]];
  for (let i = 1; i < str.length; i++) {
    res = fp(res, str[i]);
  }
  return [...new Set(res)].sort();
}

function fp(arr, ch) {
  let tmp = [];
  for (let i = 0; i <= arr[0].length; i++) {
    tmp = tmp.concat(arr.map((x) => x.slice(0, i) + ch + x.slice(i)));
  }
  return tmp;
}
