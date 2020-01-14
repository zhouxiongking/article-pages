const fn = () => arguments;
// console.log(fn(1,2));

function fn2() {
    // console.log(arguments);
}

fn2(1,23,3);

var obj = {
    prop () {

    }
}

function Parent() {
    this[Symbol('one')] = 'one';
    this.name = 'hha';
}

function Child() {
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var c = new Child();
console.log(Object.getOwnPropertySymbols(c));

class A {
    constructor(name) {
        this.name = name;
    }
    method() {
        let fn = function() {
            console.log(this.name);
        }
        fn = fn.bind(this);
        return fn;
    }
}

let a = new A('kingx');
a.method()();

function cloneObj(source) {
    return Object.assign({}, source);
}
let source = {
    name: 'kingx',
    age: 18
};
let result = cloneObj(source);
console.log(result); // { name: 'kingx', age: 18 }



var target = {};

var proxy = new Proxy(target, {
    defineProperty: function (target, propKey, propDesc) {
        target
    }
});

Object.defineProperty(proxy, 'name');
console.log(target);

let obj = {};
let obj1 = Object.defineProperty(obj, 'name', {
    enumerable: true,
    value: 'kingx'
});
let result1 = Reflect.defineProperty(obj, 'name', {
    configurable: true,
    enumerable: true,
    value: 'happy'
});
console.log(result1); // false

const arr = ['one', 'two', 'three', 'four'];

for(let i of arr) {
    console.log(i);
}

class A {
    f () {

    }
    obj = {
        name: 'kingx'
    };
}
var a1 = new A();
var a2 = new A();

console.log(a1.obj.name);
console.log(a1.obj.name);

a1.obj.name = 'kingx2';

console.log(a1.obj.name);
console.log(a1.obj.name);

const name = 'kingx';

export {_name as name};
export {name}; // 抛出异常，name作为对外输出的变量，只能export一次

console.log('-------------------------------')


console.log('1');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('2');

