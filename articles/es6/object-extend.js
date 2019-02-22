/**
 * 对象扩展
 */

// const name = 'kingx';
// const age = 12;
// const obj = {name, age}; // { name: 'kingx', age: 12 }
// // 等同于
// const obj = {
//     name: name,
//     age: age
// };
//
// const obj = {
//     method: function () {
//         return 'Hello';
//     }
// };
// // 等同于
// const obj = {
//     method() {
//         return 'Hello';
//     }
// };
//
// let obj = {};
//
// function getItem (key) {
//     return key in obj ? obj[key] : null;
// }
//
// function setItem (key, value) {
//     obj[key] = value;
// }
//
// function clear () {
//     obj = {};
// }
//
// module.exports = { getItem, setItem, clear };
// // 等同于
// module.exports = {
//     getItem: getItem,
//     setItem: setItem,
//     clear: clear
// };
// 定义父类
// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// }
// // 定义子类
// class Cat extends Animal {
//     constructor(age, weight, name, type) {
//         super(name, type);
//         this.age = age;
//         this.weight = weight;
//         this[Symbol('one')] = 'one';
//     }
// }

// function Animal(name, type) {
//     this.name = name;
//     this.type = type;
// }
//
// function Cat(age, weight) {
//     this.age = age;
//     this.weight = weight;
//     this[Symbol('one')] = 'one';
// }
//
// Cat.prototype = new Animal('Tom', 'cat');
// // Cat.prototype.constructor = Cat;
// // 生成子类的实例
// let cat = new Cat(12, '10kg');
//
// // 实例增加可枚举属性
// Object.defineProperty(cat, 'color', {
//     configurable: true,
//     enumerable: true,
//     value: 'blue',
//     writable: true
// });
// // 实例增加不可枚举属性
// Object.defineProperty(cat, 'height', {
//     configurable: true,
//     enumerable: false,
//     value: '20cm',
//     writable: true
// });
//
// for (let key in cat) {
//     console.log(key);
// }
//
// console.log(Object.keys(cat));
// console.log(Object.getOwnPropertyNames(cat));
// console.log(Object.getOwnPropertySymbols(cat));
// console.log(Reflect.ownKeys(cat));
//
// let target = {a: 1}; //目标对象
// let source1 = {b: 2}; //源对象1
// let source2 = {c: 3}; //源对象2
// let source3 = {c: 4}; //源对象3，和source2中的对象有同名属性c
// console.log(Object.assign(target, source1, source2, source3));
// 结果
// { a: 1, b: 2, c: 4 }
// console.log(cat);
// console.log(Object.assign({}, cat));

// let target = {};
// let source1 = {a: 1, b: {c: 2}};
// let result = Object.assign(target, source1);
//
// console.log(result.a);  // 1
// console.log(result.b.c);// 2
//
// // 修改源对象的引用属性
// source1.b.c = 3;
// console.log(result.b.c); // 3

// var obj = Object.create({a: 1}, {  // a是继承属性
//     b: {
//         value: 2  // b是不可枚举属性
//     },
//     c: {
//         value: 3,
//         enumerable: true,  // c是可枚举属性
//     },
//     [Symbol('one')]: {    // Symbol属性
//         value: 'one',
//         enumerable: true
//     }
// });
//
// var result = Object.assign({}, obj);
//
// console.log(result);

// 传统的写法
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
// Object.assign()写法
function Person(name, age, address) {
    Object.assign(this, {name, age, address});
}

var p = new Person('kingx', 12, 'beijing');
var p2 = new Person('kingx2', 13, 'tianjin');

console.log(p);
console.log(p2);

// 传统写法
Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.getAge = function () {
    return this.age;
};
// Object.assign()写法
Object.assign(Person.prototype, {
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    }
});

// 多个对象合并到一个目标对象
const merge =
    (target, ...sources) => Object.assign(target, ...sources);
// 多个对象合并为一个新对象并返回
const merge =
    (...sources) => Object.assign({}, ...sources);


