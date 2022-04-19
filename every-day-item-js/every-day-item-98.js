// https://blog.csdn.net/katherine5980/article/details/114882308
// 找到整数数组中唯一一个出现次数为奇数次的整数
function findOdd(A) {
  let res = A.reduce((accumulator, currentValue) => {
    if (accumulator.has(currentValue)) {
      accumulator.delete(currentValue);
    } else {
      accumulator.set(currentValue, 1);
    }
    return accumulator;
  }, new Map());
  return res.keys().next().value;
}
 
// 更好的解法
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);