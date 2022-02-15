// 查找兄弟单词
/**
 * 
  输入	
    先输入字典中单词的个数，再输入n个单词作为字典单词。
    输入一个单词，查找其在字典中兄弟单词的个数
    再输入数字n

  输出	
    根据输入，输出查找到的兄弟单词的个数
    输出指定的第n个兄弟单词

  样例输入	3 abc bca cab abc 1
  样例输出	2 bca
 */

let line = '6 cab ad abcd cba abc bca abc 1';
let arr = line.split(' ');
let k = arr[arr.length - 1];
let broWord = arr[arr.length - 2];
let ans = arr.slice(1, arr.length - 2);
let res = [];
for(let el of ans) {
  if(el !== broWord && broWord.length === el.length) {
    // 转换成数组比较是否相等
    if (el.split('').sort().join('') === broWord.split('').sort().join('')) {
      res.push(el);
    }
  }
}
res = res.sort();
console.log(res);
if (res.length >= k) {
  console.log(res.length);
  console.log(res[k - 1]);
}