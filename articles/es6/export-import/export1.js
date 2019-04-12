/**
 * export
 */

// var a = 1;
// export default a;

// export default function () {
//     console.log('hello');
// }

// export default function a() {
//     console.log('hello');
// }

console.log('invoke');

// export function foo() {
//     console.log('hello');
// }

export var b = 2;

var obj = {};
var a = 1;
function foo() {}

// export obj;
// export a;
// export foo;

export var a = 1;
export {obj};
export {foo};

var _name = 'kingx';
//
export {_name as name};
// export {_name as name2};

// var name = 'kingx2';
// var age = 12;
// var sayHello = function () {
//     console.log('hello');
// };
//
// setTimeout(() => name = 'kingx3', 1000);

// export {name, age, sayHello};

// var _name = 'kingx';
// var name = 'kingx';
//
// export {_name as name};
// export {name};

export var foo1 = function () {
    console.log('foo1');
};