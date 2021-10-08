// 1.concat
var arr1 = [];
var r1 = arr1.concat(1, 'abc', ['cdf', 'ghf']);
console.log(arr1);

// 2.join
var arr2 = ['one', 'two', 'three'];
var r2 = arr2.join('-'); // ','
console.log(arr2);

// 3.slice
var arr3 = [1, 3, 5, 7, 9];
var r3 = arr3.slice(2); // >= start < end
console.log(arr3);

// 4.toString
var arr4 = [1, 'one', new Date()];
var r4 = arr4.toString(); 
console.log(arr4);
// 5.toLocaleString 数组的每个元素都会去调用元素自身的toLocaleString
var arr5 = [1, 'one', new Date()];
var r5 = arr4.toLocaleString(); 
console.log(arr5);

// 6.indexOf
var arr6 = [1, 3, 5, 3, 6, 3, 8, 9];
var r6 = arr6.indexOf(3);
console.log(arr6);

// 7.lastIndexOf
var arr7 = [1, 3, 5, 3, 6, 3, 8, 9];
var r7 = arr7.lastIndexOf(3);
console.log(arr7);

// 8.includes
var arr8 = [1, 3, 5, 3, 6, 3, 8, 9];
var r8 = arr8.includes(8);
console.log(arr8);