// https://blog.csdn.net/chenxi_li/article/details/100126524
// 实现十进制数字转化成 N 进制数字的字符串，2 <= N <= 16
/**
 * 
  采用除基取余法
  1234/7,商176,余2
  176/7,商25,余1
  25/7,商3,余4
  3/7,商0,余3
  从上到下依次是个位、十位、百位、千位
  所以,最终结果为(3412)7.
 */

Number.prototype.trans = function (base) {
  const map = ['A', 'B', 'C', 'D', 'E', 'F'];
  const result = []; // 将每次的余数放进来
  let num = this; // 商
  while (num > 0) {
    let q = num % base;
    num = Math.floor(num / base);
    result.push(q > 9 ? map[q - 10] : q);
  }
  return result.reverse().join('');
};
