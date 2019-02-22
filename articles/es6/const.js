/**
 * const
 */

const constant = 123;
// constant = 456;  // TypeError: Assignment to constant variable.


// const arg2; // SyntaxError: Missing initializer in const declaration
//
// if (!true) {
//     const MAX = 123;
// }
// console.log(MAX);  // ReferenceError: MAX is not defined

// if (true) {
//     console.log(MAX);  // ReferenceError: MAX is not defined
//     const MAX = 123;
// }

// var MIN = 1;
// if(true) {
//     const MIN = 1; // 正常声明
// }
// const MIN = 2;  // SyntaxError: Identifier 'MIN' has already been declared

const person = {
    age: 12
};
person.name = 'kingx';
person.age = 13;
console.log(person); // { age: 13, name: 'kingx' }
// person = {age: 12}; // TypeError: Assignment to constant variable.

const arr = ['1', '2'];
arr[0] = '3';

const arr2 = [{
    name: 'kingx'
}];
arr2[0] = null;

// var声明的变量和函数表达式
var a = 1;
var fn = function () {
    console.log('global method');
};
console.log(window.a); // 1
window.fn();  // global method
// let声明的变量和函数表达式
let b = 2;
let foo = function () {
    console.log('global method');
};
console.log(window.b); // undefined
window.foo(); // TypeError: window.foo is not a function

const c = 1;
console.log(window.c);




