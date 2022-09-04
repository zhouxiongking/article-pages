// 实现十进制数字转化成 N 进制数字的字符串表示，2 <= N <= 16
// console.log(Number(1234).toString(7));

/**
 * 
  采用除基取余法
  1234/7, 商176, 余2
  176/7,  商25,  余1
  25/7,   商3,   余4
  3/7,    商0,   余3
  从上到下依次是个位、十位、百位、千位
  所以,最终结果为(3412)
*/
Number.prototype.tranform = function (base) {
  let num = this;
  if (num === 0) {
    return '0';
  }
  let prefix = '';
  if (num < 0) {
    prefix = '-';
    num = -num;
  }
  const map = ['A', 'B', 'C', 'D', 'E', 'F'];
  let result = [];
  while(num > 0) {
    let rest = num % base;
    num = Math.floor(num / base);
    result.push(rest > 9 ? map[rest - 10] : rest);
  }
  return `${prefix}${result.reverse().join('')}`;
}

const r1 = Number(-15).tranform(16);
console.log(r1);