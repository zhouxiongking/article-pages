/***
 * let
 */

// {
//     let a = 1;
// }

{
    var a = 1;
    let b = 2;
}
console.log(a);  // 1
// console.log(b);  // ReferenceError: b is not defined

for (var i = 0; i < 10; i++) {
    // ...
}
console.log(i);  // 10

for (let i = 0; i < 10; i++) {
    // ...
}
// console.log(i); // ReferenceError: i is not defined

var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
    };
    // arr[i]();
}
arr[1]();  // 10

var arr = [];
let j;
for (j = 0; j < 10; j++) {
    arr[j] = function () {
        console.log(j);
    };
}
arr[1]();  // 1

for (let i = 0; i < 2; i++) {
    let i = 'kingx';
    console.log(i);
}

console.log(c);  // undefined
var c = 'kingx';

// console.log(d);  // ReferenceError: d is not defined
// let d = 'kingx';
//
// if (true) {
//     // 暂时性死区开始
//     param = 'kingx';    // ReferenceError: d is not defined
//     console.log(param); // ReferenceError: d is not defined
//     // ...
//     // 暂时性死区结束
//     let param;
//
// }

// typeof param;
// let param;

// function foo() {
//     let arg1 = 'kingx';
//     if (true) {
//         let arg1 = 'kingx';
//     }
//     var arg1 = 'kingx'; // SyntaxError: Identifier 'arg1' has already been declared
// }

// function foo(arg1) {
//     let arg1 = 'kingx'; // SyntaxError: Identifier 'arg1' has already been declared
//     if (true) {
//         let arg1 = 'kingx';
//     }
// }

var arg1 = 'kingx';

function foo() {
    console.log(arg1);  // undefined
    if (false) {
        var arg1 = 'kingx2';
    }
}

foo(); // undefined

var arg1 = 'kingx';

function foo() {
    console.log(arg1);  // undefined
    if (false) {
        var arg1 = 'kingx2';
    }
}

foo(); // undefined

for (var i = 0; i < 4; i++) {
    // do something
}
console.log(i); // 4

