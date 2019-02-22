/**
 * 解构
 */
//
// let [num1, num2] = ['one', 'two'];
// console.log(num1);
// console.log(num2);
//
// let [, , num3] = ['one', 'two', 'three'];
// console.log(num3); // three
//
//
// let [num1, num2, num3] = ['one', 'two'];
// console.log(num2); // two
// console.log(num3); // undefined

// let [num1 = 'num1', num2] = [, 'two'];
// console.log(num1); // num1
// console.log(num2); // two

// let [
//     num1 = 1,
//     num2 = 2,
//     num3 = 3
// ] = [null, '', undefined];
//
// console.log(num1);  // null
// console.log(num2);  // ''
// console.log(num3);  // num3

// var [x = 1, y = x] = [];
// console.log(x);
// console.log(y);

// var [x = y, y = 1] = [];
// console.log(x);
// console.log(y);

// var a = 1;
// var b = 2;
// var tmp;
//
// tmp = a;
// a = b;
// b = tmp;
//
// console.log(a);  // 2
// console.log(b);  // 1

// var a = 1;
// var b = 2;
//
// [b, a] = [a, b];
//
// console.log(a);  // 2
// console.log(b);  // 1

// function fn() {
//     return [12, 34];
// }
//
// let [num1, num2] = fn();
//
// console.log(num1); // 12
// console.log(num2); // 34
//
// let a = 1,
//     b = 2;
// [ a, b ] = [,];
// console.log(a); // 2
// console.log(b); // 1

// let [num1, num2, [num3]] = [12, [34, 56], [78, 89]];
//
// console.log(num1); // 12
// console.log(num2); // [34, 56]
// console.log(num3); // [78]

// let {m, n, o} = {m: 'kingx', n: 12};
// console.log(m); // kingx
// console.log(n); // 12
// console.log(o); // undefined
//
// let {m: name, n: age} = {m: 'kingx', n: 12};
// console.log(name); // kingx
// console.log(age);  // 12
//
//
// let {m: m, n: n} = {m: 'kingx', n: 12};
// // 简写方案
// let {m, n} = {m: 'kingx', n: 12};

// let {m: name} = {m: 'kingx'};
// console.log(name);// kingx
// console.log(m);   // ReferenceError: m is not defined

// let {m, n = 1, o = true} = {m: 'kingx', o: null};
// console.log(m); // kingx
// console.log(n); // 1
// console.log(o); // null

// let {m, n: age = 1} = {m: 'kingx'};
// console.log(m);   // kingx
// console.log(age); // 1
// console.log(n);   // ReferenceError: n is not defined

// let obj = {
//     p: [
//         'Hello',
//         {y: 'World'}
//     ]
// };
// let {p: [x, {y: name}]} = obj;
// console.log(x); // Hello
// console.log(name); // World
// console.log(y); // ReferenceError: y is not defined

// let obj = {
//     m: {
//         n: 'kingx'
//     }
// };

// // let {o: {n}} = obj;
// // console.log(n); // TypeError: Cannot match against 'undefined' or 'null'.
//
// const {min, max} = Math;
// console.log(min(1, 3));  // 1
// console.log(max(1, 3));  // 3
//
// var arr = [1, 4, 6, 8, 2];
// console.log(Math.max.apply(null, arr));
// console.log(Math.max(...arr));
//
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);
// console.log([...arr1, ...arr2]);
//
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);
//
// var arr = [1, 2, 4, 6, 2, 7, 4];
// console.log([...new Set(arr)]); // [ 1, 2, 4, 6, 7 ]

// function foo() {
//     for (let arg of arguments) {
//         console.log(arg);
//     }
// }
//
// foo('one', 'two', 'three', 'four');
//
// function foo(...args) {
//     for (let arg of args) {
//         console.log(arg);
//     }
// }
//
// foo('one', 'two', 'three', 'four');

// let arr = ['one', 'two', 'three', 'four'];
// let [arg1, ...arg2] = arr;
// console.log(arg1);  // one
// console.log(arg2);  // [ 'two', 'three', 'four' ]

// let arr = ['one', 'two', 'three', 'four'];
// let [...arg1, arg2] = arr; // SyntaxError: Rest element must be last element in array

// function foo([arg1, arg2]) {
//     console.log(arg1); // 2
//     console.log(arg2); // 3
// }
// foo([2, 3]);
//
// function whois({displayName: displayName, fullName: {firstName: name}}){
//     console.log(displayName + " is " + name);
// }
// var user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe"
//     }
// };
// whois(user); // jdoe is John

let obj = {
    name: 'kingx',
    address: {
        email: '100000',
        city: '北京shi'
    }
};

let {...arg} = obj;
console.log(arg);

let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
console.log(x); // 1
console.log(y); // 2
console.log(z); // {a: 3, b: 4}









