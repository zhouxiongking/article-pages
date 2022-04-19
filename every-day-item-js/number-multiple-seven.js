// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/161
// Done~~~~
// 不用加减乘除运算符，求整数的7倍
// 输入：5 输出：35
// 输入：8 输出：56

// 1. 字符串处理
function getValue(number) {
  return ''.padEnd(number, 0).replace(/0/g, ''.padEnd(7)).length;
  // 00000
}
function getValue(number) {
  return ''.padEnd(number, 0).repeat(7).length;
  // 00000
}

// 2. 数组处理
function getValue(number) {
  return new Array(number).fill().map(() => {
    return new Array(7).fill();
  }).flat().length;
}

// 3. 位移运算处理
function getValue(number) {
  return parseInt([(number).toString(7), 0].join(''), 7);
  // 15 -> 21 -> 210
}



