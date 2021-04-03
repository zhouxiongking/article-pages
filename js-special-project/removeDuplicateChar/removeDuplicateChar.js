/**
 * 调用indexOf()方法，
 * @param {*} str 
 */
function removeDuplicateChar1(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (result.indexOf(char) < 0) {
      result += char;
    }
  }
  return result;
}

var str = 'hellojavascript';
console.log(removeDuplicateChar1(str));

/**
 * key-value去存储
 * @param {*} str 
 */
function removeDuplicateChar2(str) {
  var result = [];
  var json = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!json[char]) {
      result.push(char);
      json[char] = true;
    }
  }
  return result.join('');
}

var str2 = 'hellojavascript';
console.log(removeDuplicateChar2(str2));
