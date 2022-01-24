/**
 * 对象的属性转换
 *  属性值：字符串和Symbol
 *  Done~~~
 */
// 代码段1
var a = {}, b = '123', c = 123;
a[b]='b';
a[c]='c';
console.log(a[b]); // a.123 -> c
// a.123 = 'b';
// a.123 = 'c'; 
// a.123 -> c

// 代码段2
var a = {}, b = Symbol('123'), c = Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]); // b
// Symbol('123')  !== Symbol('123')


// 代码段3
var a = {}, b = {key: '123'}, c = {key: '456'};
a[b]='b';
a[c]='c';
console.log(a[b]); // a['[object Object]'] -> c
// b,c -> 字符串类型的值
// b.toString() -> '[object Object]'
// c.toString() -> '[object Object]'
// a.[object Object] = 'b';
// a.[object Object] = 'c'; 
//  a.[object Object] -> 'c'