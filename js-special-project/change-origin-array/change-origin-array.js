// 1. splice 添加和删除数组中的元素
arr.splice(index, howmany, item1, ...itemx);

// 1.1 删除元素
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(0, 3);
console.log(arr);
// 1.2 删除并添加
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(0, 3, 8, 9);
console.log(arr);

// 1.3 不删除只添加
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 0, 8, 9);
console.log(arr);

// 2. sort() 排序,默认按照字符串
var arr = ['a', 'c', 'b', 'g', 'e'];
arr.sort();
console.log(arr);

var arr = [10, 2, 3, 9, 12];
arr.sort();
console.log(arr);
var arr = [10, 2, 3, 9, 12];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);

// 3. pop() 删除数组中的最后一个值
var arr = [10, 2, 3, 9, 12];
arr.pop();
console.log(arr);

// 4. shift 删除数组中的第一个元素
var arr = [10, 2, 3, 9, 12];
arr.shift();
console.log(arr);

// 5. unshift 数组开头增加元素
var arr = [10, 2, 3, 9, 12];
arr.unshift(13);
console.log(arr);

// 6. push 往数组后面追加元素
var arr = [10, 2, 3, 9, 12];
arr.push(14);
console.log(arr);

// 7. reverse() 颠倒数组元素值
var arr = [10, 2, 3, 9, 12];
arr.reverse();
console.log(arr);

// 8.ES6 copyWithin 复制到制定的位置
var arr = [10, 2, 3, 9, 12, 14, 18];
arr.copyWithin(3, 4, 6);
console.log(arr);

// 10, 2, 3, 12 14 , 14, 18

// 9. ES6 fill() 填充数组
var arr = [];
arr.fill(1);
console.log(arr);
var arr = [10, 2, 3, 12, 14, 14, 18];
arr.fill(9, 4, 6);
console.log(arr);





