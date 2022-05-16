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
// 方法1
function permutation(str) {
  let res = [str[0]];
  for (let i = 1; i < str.length; i++) {
    res = fp(res, str[i]);
  }
  return res.sort();
}

function fp(arr, ch) {
  let tmp = [];
  for (let i = 0; i <= arr[0].length; i++) {
    const newArr = arr.map(x => {
      return x.slice(0, i) + ch + x.slice(i);
    });
    tmp = tmp.concat(arr.map((x) => x.slice(0, i) + ch + x.slice(i)));
  }
  return tmp;
}

// 方法2: https://www.jb51.net/article/39291.htm
function swap(arr, i, j) {
  if (i !== j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
 
function perm(arr) {
  function fn(n) {
    for (let i = n; i < arr.length; i++) {
      swap(arr, i, n);
      if (n + 1 < arr.length - 1) {
        fn(n + 1);
      } else {
        console.log(arr);
      }
      swap(arr, i, n);
    }
  }
  fn(0);
}
perm(['a', 'b', 'c', 'd']);