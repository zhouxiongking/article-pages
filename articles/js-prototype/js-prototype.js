/**
 * Created by zhouxiong on 2019/4/2.
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    };
}

var person = new Person('kingx', '12');
console.log(person);
person.sayName();

// Person('kingx', '12', 'coder');
// window.sayName();

var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName === person2.sayName); // false


function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName === person2.sayName); // true

function Person() {
    this.name = 'kingx';
}
Person.prototype.name = "Nicholas";

var person1 = new Person();
delete person1.name;
console.log(person1.name); // Nicholas
var person2 = new Person();

console.log('--------------');

function Person() {
}
var person1 = new Person();

Person.prototype = {
    name: 'Nicholas',
    sayName: function () {
        console.log(this.name);
    }
};
var person2 = new Person();

console.log(person2 instanceof Person);

person1.sayName(); // TypeError: person1.sayName is not a function
person2.sayName(); // Nicholas

function Person() {
}
var person = new Person();
// person实例沿着原型链第一次追溯，__proto__属性指向Person构造函数的原型对象
person.__proto__ === Person.prototype;
// person实例沿着原型链第二次追溯，Person原型对象的__proto__属性指向Object的原型对象
person.__proto__.__proto__ === Person.prototype.__proto__ === Object.prototype;
// person实例沿着原型链第三次追溯，Object原型对象的__proto__属性为null
person.__proto__.__proto__.__proto__ = Object.prototype.__proto__ === null;

var Foo = new Function();

Function.prototype.a = 'a';
Object.prototype.b = 'b';

function Person() {
}

var p = new Person();

console.log('p.a:', p.a);  // undefined
console.log('p.b:', p.b);  // b
// 实例p直接原型
p.__proto__ = Person.prototype;
// Person原型对象的原型
Person.prototype.__proto__ = Object.prototype;

var arr = new Array(1, 2, 3);
console.log(arr.valueOf());

function Person() {
}

var p = new Person();

p.toString(); // [object Object]

String.__proto__ === Function.prototype; // true
Number.__proto__ === Function.prototype; // true
Array.__proto__ === Function.prototype;  // true
Date.__proto__ === Function.prototype;   // true
Object.__proto__ === Function.prototype; // true
Function.__proto__ === Function.prototype; // true

var str = new String('kingx');
console.log(str);

Object.prototype.hasOwnProperty();

str.substring(1, 3);

function Person(name) {
    this.name = name;
}

Person.prototype.age = 12;

var person = new Person('kingx');

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false

for (var prop in person) {
    if (person.hasOwnProperty(prop)) {
        // do something
    }
}
