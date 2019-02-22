/**
 * Reflect
 */

// 查找一个数字数组里面的最大元素
const arr = [1, 3, 5, 7];
let max;
// ES6
max = Reflect.apply(Math.max, undefined, arr);
console.log(max);  // 7
// ES5
max = Math.max.apply(undefined, arr);
console.log(max); // 7
max = Function.prototype.apply.call(Math.max, undefined, arr);
console.log(max); // 7

// 截取字符串的一部分
let str = 'hello, world';
let newStr;
// ES6
newStr = Reflect.apply(String.prototype.slice, str, [2, 8]);
console.log(newStr); // llo, w
// ES5
newStr = str.slice(2, 8);
console.log(newStr); // llo, w
newStr = String.prototype.slice.apply(str, [2, 8]);
console.log(newStr); // llo, w

// ES5
function A(name, age) {
    console.log('Function A is invoked!');
    this.name = name || 'dreamapple';
    this.age = age;
}
A.prototype.getName = function () {
    console.log(this.name);
    return this.name;
};

function B(age) {
    console.log('Function B is invoked!');
    this.age = age || 22;
}
B.prototype.getAge = function () {
    console.log(this.age);
    return this.age;
};
// 使用函数A作为构造函数
let a = Reflect.construct(A, ['happy']);
// 使用函数B作为构造函数
let b = Reflect.construct(A, ['happy', 12], B);
console.log(a);
console.log(b);
a.getName();
b.getAge();

// let obj = {};
// // 对象的属性定义失败
// try {
//     Object.defineProperty(null, 'a', {
//         value: 22
//     })
// } catch (e) {
//     console.log('define property failed!');
// }  // define property failed!
//
// // 使用Object.defineProperty成功的定义
// let obj1 = Object.defineProperty(obj, 'name', {
//     enumerable: true,
//     value: 'dreamapple'
// });
// console.log(obj); // { name: 'dreamapple' }
// console.log(obj1); // { name: 'dreamapple' }
//
// // 这里会返回false 因为我们上面定义name这个属性是不可修改的,
// // 然后我们又在这里修改了name属性,所以修改失败返回值为false
// let result1 = Reflect.defineProperty(obj, 'name', {
//     configurable: true,
//     enumerable: true,
//     value: 'happy'
// });
// console.log(result1); // false
// let result2 = Reflect.defineProperty(obj, 'age', {
//     configurable: true,
//     enumerable: true,
//     value: 22
// });
// console.log(result2); // true
// console.log(obj); // { name: 'dreamapple', age: 22 }
// console.log(obj1); // { name: 'dreamapple', age: 22 }

// let obj = {
//     name: 'kingx',
//     age: 22
// };
//
// let r1 = Reflect.deleteProperty(obj, 'name');
// console.log(obj);
// console.log(r1); // true
// let r2 = Reflect.deleteProperty(obj, 'name');
// console.log(obj);
// console.log(r2); // true
// let r3 = Reflect.deleteProperty(Object.freeze(obj), 'age');
// console.log(obj);
// console.log(r3); // false
//
// let obj2 = {
//     name: 'kingx',
//     age: 22
// };
//
// delete obj2.name;
// delete obj2.name;
// Object.freeze(obj2);
// delete obj2.age;
// console.log(obj2); // { age: 22 }
//
// let obj3 = {
//     name: 'kingx'
// };
//
// let result4 = Reflect.deleteProperty(obj3, 'age');
// console.log(result4);
// console.log(Reflect.deleteProperty(obj3, 'dsdsdsds'));
//
// Object.freeze(obj3);
//
// obj3.age = '123';
// console.log(obj3.age);

let obj = {
    _name: '',
    set name(name) {
        console.log('this:', this);
        this._name = name;
    },
    get name() {
        return this._name;
    },
    age: 22
};

let r1 = Reflect.set(obj, 'age', 24);
let r2 = Reflect.set(obj, 'name', 'kingx'); // this: { _name: '', name: [Getter/Setter], age: 24 }
console.log(r1); // true
console.log(obj); // { _name: 'kingx', name: [Getter/Setter], age: 24 }

let receiver = {test: 'test'};
let r3 = Reflect.set(obj, 'name', 'kingx2', receiver); // this: { test: 'test' }
console.log(r3); // true
console.log(obj); // { _name: 'kingx', name: [Getter/Setter], age: 24 }
console.log(receiver); // { test: 'test', _name: 'kingx2' }

// var target = {
//     name: 'kingx'
// };
// var proxy = new Proxy(target, {
//     get(target, prop) {
//         console.log(`读取属性${prop}的值为${target[prop]}`);
//         return Reflect.get(target, prop);
//     },
//     set(target, prop, value) {
//         console.log(`设置属性${prop}的值为${value}`);
//         return Reflect.set(target, prop, value);
//     },
//     deleteProperty(target, prop) {
//         console.log('删除属性: ' + prop);
//         return Reflect.deleteProperty(target, prop);
//     }
// });
//
// proxy.name; // 读取属性name的值为kingx
// proxy.name = 'kingx2'; // 设置属性name的值为kingx2
// delete proxy.name; // 删除属性: name

console.log('------------------------');

const target = {
    name: 'kingx'
};

const queueObservers = new Set();

function observer1(prop, value) {
    console.log(`目标对象的${prop}属性值变为${value},观察者1开心的笑了`);
}

function observer2(prop, value) {
    console.log(`目标对象的${prop}属性值变为${value},观察者2伤心的哭了`);
}

function set(target, prop, value) {
    const result = Reflect.set(target, prop, value);
    result ? queueObservers.forEach(fn => fn(prop, value)) : '';
    return result;
}

const observer = (fn) => queueObservers.add(fn);

const observable = (target) => new Proxy(target, {set});

const proxy = observable(target);

observer(observer1);
observer(observer2);

proxy.name = 'kingx2';

// 目标对象的name属性值变为kingx2,观察者1开心的笑了
// 目标对象的name属性值变为kingx2,观察者2伤心的哭了