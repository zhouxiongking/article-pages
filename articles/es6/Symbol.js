/**
 * Symbol
 */

// let s = Symbol();
// console.log(typeof s);  // symbol
//
// let s1 = new Symbol();  // TypeError: Symbol is not a constructor

// let s2 = Symbol('hello');
// let s3 = Symbol('hello');
//
// console.log(s2 === s3);  // false
//
// let s4 = Symbol('hello');
// console.log(s4.toString());  // Symbol(hello)
// console.log('s4 content is: ' + s4); // TypeError: Cannot convert a Symbol value to a string
//
// let PROP_NAME = Symbol();
//
// // 第一种写法
// let obj = {};
// obj[PROP_NAME] = 'Hello';
//
// // 第二种写法
// let obj = {
//     [PROP_NAME]: 'Hello'
// };
//
// // 第三种写法
// let obj = {};
// Object.defineProperty(obj, PROP_NAME, {
//     value: 'Hello'
// });
//
// const PROP_NAME = Symbol();
// const obj = {};
//
// obj.PROP_NAME = 'Hello!';
// obj[PROP_NAME];  // undefined
// obj['PROP_NAME']; // "Hello!"


// var shapeType = {
//     triangle: Symbol('triangle'),
//     rectangle: Symbol('rectangle')
// };
//
// function getArea(shape, options) {
//     var area = 0;
//     switch (shape) {
//         case shapeType.triangle:
//             area = .5 * options.width * options.height;
//             break;
//         case shapeType.rectangle:
//             area = options.width * options.height;
//             break;
//     }
//     return area;
// }
//
// console.log(getArea(shapeType.triangle, { width: 100, height: 100 }));  // 5000
// console.log(getArea(shapeType.rectangle, { width: 100, height: 100 })); // 10000

// let obj = {
//     [Symbol('name')]: '一斤代码',
//     age: 18,
//     title: 'Engineer'
// };
//
// console.log(Object.keys(obj));   // ['age', 'title']
//
// for (let p in obj) {
//     console.log(p);  // 分别会输出：'age' 和 'title'
// }
//
// console.log(Object.getOwnPropertyNames(obj));   // ['age', 'title']

// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
//
// s1 === s2; // true

// let obj = {
//     toString: function () {
//         return 'obj';
//     }
// };
// let s1 = Symbol.for(obj);
// let s2 = Symbol.for(obj);
//
// console.log(s1 === s2); // true

Symbol.for("bar") === Symbol.for("bar"); // true

Symbol("bar") === Symbol("bar");  // false
