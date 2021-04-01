// 方法1：会借助数组reverse()方法
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('absdefg'));
console.log(reverseString('aabbcc'));

// 方法2：使用字符串的charAt()
function reverseString2(str) {
  var result = '';
  for(var i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}
console.log(reverseString2('absdefg'));
console.log(reverseString2('aabbcc'));

// 方法3：使用递归去获取charAt()
function reverseString3(strIn, pos, strOut) {
  if (pos < 0) {
    return strOut;
  }
  strOut += strIn.charAt(pos--);
  return reverseString3(strIn, pos, strOut);
}

var str = 'absdefg';
var pos = str.length - 1;
var result = '';
console.log(reverseString3(str, pos, result));

// 方法4：使用call
function reverseString4(str) {
  var arr = Array.prototype.slice.call(str);
  return arr.reverse().join('');
}
console.log(reverseString4('absdefg'));
console.log(reverseString4('aabbcc'));


