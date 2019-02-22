/**
 * 箭头函数
 */

// var foo = v => v;
//
// var foo = function (v) {
//     return v;
// };
//
// [1, 2, 3].map(r => r * 2);
//
// var fn = (num1, num2) => {
//     return num1 + num2
// };

// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function () {
//         this.s2++;
//     }, 1000);
// }
//
// var timer = new Timer();
//
// setTimeout(() => console.log('s1: ', timer.s1, s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);


// const Person = {
//     'name': 'little bear',
//     'age': 18,
//     'sayHello': function () {
//         setTimeout(function ()  {
//             console.log('我叫' + this.name + '我今年' + this.age + '岁!')
//         }, 1000);
//     }
// };
// Person.sayHello();

// var name = 'kingx';
// const Person2 = {
//     'name': 'little bear',
//     'age': 18,
//     'sayHello': () => {
//         setTimeout(() => {
//             console.log('我叫' + this.name + '我今年' + this.age + '岁!')
//         }, 1000);
//     }
// };
// Person2.sayHello();

// const fn = () => {
//     console.log(arguments);
// };
// fn(1, 2);

const fn = (...args) => {
    console.log(args);
};
fn(1, 2); // [1, 2]

console.log([1, 2, 3, 4].reduce((x, y) => x + y, 0));  // 10

console.log([1, 4, 6, 3, 2].sort((x, y) => x - y)); // [ 1, 2, 3, 4, 6 ]

console.log([1, 2, 5, 6, 3].filter(x => x > 3)); // [ 5, 6 ]

function Person(name) {
    this.name = name;
}
var p = new Person('kingx'); // 正常

// var Person = (name) => {
//     console.log(this);
//     this.name = name
// };
// var p = new Person('kingx'); // Uncaught TypeError: Person is not a constructor

var a = ()=> {
    return 1;
};

function b() {
    return 2;
}

console.log(a.prototype);  // undefined
console.log(b.prototype);   // {constructor: ƒ}

function Person(name) {
    this.name = name
}
Person.prototype.sayHello = () => {
    console.log(this);
    console.log(this.name);
};
var p1 = new Person('kingx');
p1.sayHello();  // window undefined