// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/475
// 实现颜色转换 rgb -> 十六进制
// Done~~~
// 'rgb(255, 255, 255)' -> '#FFFFFF'
// 'RGB(  255 , 255  , 255  )'
// 1. rgb格式提取r,g,b数值
// 2. r,g,b -> 十六进制
// 'rgb(255, 255, 255)'
function getValue1(rgb) {
  // 1. 正则
  const reg1 = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
  const match = rgb.match(reg1);
  return [match[2] * 1, match[3] * 1, match[4] * 1];
}
// 方法2
function getValue2(rgb) {
  const reg2 = /\d+/g;
  const match = rgb.match(reg2);
  return [match[0] * 1, match[1] * 1, match[2] * 1];
}

// r g b -> 16进制
Number(14).toString(16); // C -> 0C
// 值小于16，得到一位数的16进制数，

// 1.与16进行比较
// (Number(r) > 16 ? '' : '0') + Number(r).toString(16);
// 2.手动拼接0，slice方法截取后面2位
('0' + Number(14).toString(16)).slice(-2);
// 3.padStart
Number(14).toString(16).padStart(2, '0');

// 算法1
function rgb2Hex(rgb) {
  const arr = getValue2(rgb);
  return arr.reduce((pre, cur) => {
    const val = ('0' + Number(cur).toString(16).toUpperCase()).slice(-2);
    return pre + val;
  }, '#');
}
const rgb1 = 'rgb(1,2,3)';
const rgb2 = 'rgb(123, 23, 78)';
const rgb3 = 'rgb(255, 255, 255)';
const result1 = rgb2Hex(rgb1);
const result2 = rgb2Hex(rgb2);
const result3 = rgb2Hex(rgb3);



