/**
 * 借助数组的filter方法，调用indexOf
 * 使用call()
 * @param {*} str 
 */
function removeDuplicateChar3(str) {
  var result = Array.prototype.filter.call(str, function(char, index, arr) {
    return arr.indexOf(char) === index;
  });
  return result.join('');
}

var str = 'hellojavascript';
console.log(removeDuplicateChar3(str));


/**
 * 借助ES6 Set
 * @param {*} str 
 */
function removeDuplicateChar4(str) {
  var set = new Set(str.split(''));
  return [...set].join('');
}

var str4 = 'hellojavascript';
console.log(removeDuplicateChar4(str4));