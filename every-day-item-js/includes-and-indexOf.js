// JavaScript 中的includes和indexOf
// Done~~~

// 主要用途：判断字符串或者数组中是否存在对应的元素

// 1. 数组中的includes和indexOf方法比较
//  1.1 函数返回值
const res1 = [1, 2, 3, 4].includes(2); // true Boolean
const res2 = [1, 2, 3, 4].indexOf(2); // 1 Number
if (res1) {}
if (res2 >= 0) {} // 不存在 -1
//  1.2 函数第二个参数

//  1.3 区别
// NaN includes 能匹配到NaN，indexOf不能匹配到NaN
// undefined  includes能识别到稀疏数组中的undefined，indexOf不可以
const arr1 = [];
arr1[2] = 2;
arr1.includes(undefined); // true
arr1.indexOf(undefined); // -1
// 2. 字符串和数组中的indexOf方法比较
// 不同点 => 数据类型转换
// 字符串会进行类型转换
// 数组 严格匹配 ===

// 3. 字符串和数组中的includes方法比较
// 不同点 => 数据类型转换
// 字符串会进行类型转换
// 数组 严格匹配 ===




