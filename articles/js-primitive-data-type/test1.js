/**
 * 原生数据类型
 */

var a;
console.log(a);  // undefined

var obj = {
    name: 'kingx'
};
console.log(obj.address);

function foo() {
}
console.log(foo());

function foo(param1, param2, param3) {
    console.log(param3);
}
foo(1, 2);

var returnObj = null;

function foo() {
    return {
        name: 'kingx'
    };
}

returnObj = foo();

// document.querySelector('#id'); // null

'test'.match(/a/)

var a;
var b = null;

// console.log(a.name);  // Cannot read property 'name' of undefined
// console.log(b.name);  // Cannot read property 'name' of null

null == undefined;  // true

console.log(typeof undefined);
console.log(typeof null);

console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));

console.log(undefined + ' string');
console.log(null + ' string');

console.log(undefined + 0);
console.log(null + 0);

var a = function () {
    return '';
};
if (a) {
    console.log('invoke');
}

// var num1 = 024; // 20
//
// var num2 = 079; // 79

// console.log(num1);
// console.log(num2);

var num3 = 0x3f;
// var num4 = 0x2g;

console.log(num3);
// console.log(num4);

console.log(NaN == NaN);

var a = [1, 2, 3];
console.log(typeof a);

var a = [1, 2, 3];
console.log(a instanceof Array);  // true
console.log(a instanceof Object); // true

var b = {name: 'kingx'};
console.log(b instanceof Array);  // false
console.log(b instanceof Object); // true


var o = {'name': 'lee'};
var a = ['reg', 'blue'];

function getDataType(o) {
    if (o instanceof Array) {
        return 'Array'
    } else if (o instanceof Object) {
        return 'Object';
    } else {
        return 'param is no object type';
    }
}


var a = [1, 2, 3];
console.log(a.constructor === Array);  // true
console.log(a.constructor === Object); // false

var b = {name: 'kingx'};
console.log(b.constructor === Array);  // false
console.log(b.constructor === Object); // true

var a = [1, 2, 3];
console.log(a.__proto__.constructor === Array);  // true
console.log(a.__proto__.constructor === Object); // false

function getDataType(o) {
    // 获取构造方法
    var constructor = o.__proto__.constructor || o.constructor;
    if (constructor === Array) {
        return 'Array';
    } else if (constructor === Object) {
        return 'Object';
    } else {
        return 'param is no object type';
    }
}

console.log(getDataType(a));
console.log(getDataType(b));

var a = [1, 2, 3];
var b = {name: 'kingx'};

console.log(Object.prototype.toString.call(a)); // [object Array]
console.log(Object.prototype.toString.call(b)); // [object Object]

Object.prototype.toString.call(1);  // [object Number]
Object.prototype.toString.call('kingx'); // [object String]

var c;
Object.prototype.toString.call(c);  // [object Undefined]

// 判断变量是数组还是对象
function getDataType(o) {
    var result = Object.prototype.toString.call(o);
    if (result === '[object Array]') {
        return 'Array';
    } else if (result === '[object Object]') {
        return 'Object';
    } else {
        return 'param is no object type';
    }
}

console.log(getDataType(a));
console.log(getDataType(b));
console.log(getDataType(c));

console.log(123 + '');    // '123'
console.log([1, 2, 3] + '');  // '1,2,3'
console.log(true + '');   // 'true'

console.log(1 === '1');
console.log(true === 'true');

console.log(23 === 23);   // true
console.log(34 === NaN);  // false
console.log(NaN === NaN); // false

console.log('kingx' === 'kingx');
console.log('kingx' === 'kingx2');

console.log(false === false);
console.log(true === false);

console.log(null === null);
console.log(undefined === undefined);
console.log(null === undefined);

console.log(1 === Number(1));  // true
console.log(1 === new Number(1));  // false
console.log('hello' === String('hello'));  // true
console.log('hello' === new String('hello')); // false

var a = [];
var b = a;
var c = [];
console.log(a === b); // true
console.log(a === c); // false

console.log({} === {}); // false

// [] === [];  // false
// {} === {};  // false

console.log('hello' === new String('hello'));
console.log(new String('hello') === new String('hello'));

function Person(name) {
    this.name = name;
}

Person.prototype.toString = function () {
    return this.name;
};


var p1 = new Person('zhangsan');
var p2 = new Person('zhangsan');

console.log(p1 === p2);  // false

console.log(123 === 123);    // true
console.log(false == false); // true
console.log([] == []);       // false
console.log({} == {});       // false

console.log(null == undefined);  // true
console.log(null == 1);          // false
console.log(null == false);      // false
console.log(undefined == 0);     // false
console.log(undefined == false); // false

console.log(1 == '1');     // true
console.log(123 == '123'); // true
console.log('020' == 16);  // false
console.log('020' == 20);  // true
console.log('0x15' == 21); // true

console.log('1' == true);    // true
console.log('0' == false);   // true
console.log('0.0' == false); // true
console.log('true' == true); // false

function a() {
    this.toString = function () {
        return true;
    };
    return this;
}

console.log(a == true);

// typeof operand
// typeof (operand)

// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {a: 1} === 'object';

// 使用Array.isArray 或者 Object.prototype.toString.call
// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';

// 函数

var foo = function () {
};
function foo2() {
}

typeof foo === 'function';
typeof foo2 === 'function';
typeof class C {
} === 'function'
typeof Math.sin === 'function';
typeof new Function() === 'function';

// Objects
typeof {a: 1} === 'object';

// 使用Array.isArray 或者 Object.prototype.toString.call
// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';

var number = 123;

typeof (number + ' hello');
typeof number + ' hello';

// typeof newLetVariable;    // ReferenceError
// let newLetVariable;
//
// typeof newConstVariable;  // ReferenceError
// const newConstVariable = 'hello';

var stringObject = new String('hello world');
stringObject instanceof String;

var stringObject2 = 'hello world';
stringObject2 instanceof String;

// 定义构造函数
function C() {
}
function D() {
}

var o = new C();


o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


o instanceof D; // false，因为 D.prototype不在o的原型链上

o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为C.prototype现在在o3的原型链上

function Foo() {
}

var foo = new Foo();

foo instanceof Foo;

D.prototype = {};
var o4 = new D();
console.log(o4 instanceof D);
console.log(o4 instanceof C);

o4.__proto__ = {};

console.log(o4 instanceof D);

console.log(o4.__proto__ instanceof Object);

console.log(Object instanceof Object);  //true
console.log(Function instanceof Function);  //true
console.log(Number instanceof Number);  //false
console.log(String instanceof String);  //false
console.log(Function instanceof Object);  //true
console.log(Foo instanceof Function);  //true
console.log(Foo instanceof Foo);  //false

/**
 * instanceof实现原理
 * @param L 表示左表达式
 * @param R 表示右表达式
 * @returns {boolean}
 */
function instance_of(L, R) {
    var O = R.prototype; // 取 R 的显示原型
    L = L.__proto__; // 取 L 的隐式原型
    while (true) {
        if (L === null)
            return false;
        if (O === L) // 这里重点：当 O 严格等于 L 时，返回 true
            return true;
        L = L.__proto__;
    }
}

for (var i = 0, j = 10; i < 10, j < 20; i++, j++) {
    console.log(i, j);
}

var z = (i = 0, j = 10);
console.log(z);

var a = 'a';
var b = 'b';
var c;

c = a;
a = b;
b = c;

console.log(a, b);

var a = 'a';
var b = 'b';

var c = [b, b = a];

a = [b, b = a][0];
a = [b][b = a, 0];

console.log(a, b);

console.log(c);

// if (x) {
//     foo();
//     return bar();
// } else {
//     return 1;
// }

// x ? (foo(), bar()) : 1;

var a = 20;
// var b = ++a, 10;
console.log(b);  // Uncaught SyntaxError: Unexpected number

a = b = c;

b = c;
a = c;

a > b > c;

6 > 4; // true
// true > 3 // false;

(3 + 4) * 5;

console.log('-------------');

// var obj = {
//     i: 10,
//     toString: function () {
//         console.log('toString');
//         return this.i;
//     },
//     valueOf: function () {
//         console.log('valueOf');
//         return this.i;
//     }
// };
//
// console.log('1-------------');
// console.log(obj);  // valueOf
// console.log('2-------------');
// console.log(+obj); // valueOf
// console.log('3-------------');
// console.log('' + obj);    // valueOf
// console.log('4-------------');
// console.log(String(obj)); // toString
// console.log('5-------------');
// console.log(Number(obj)); // valueOf
// console.log('6-------------');
// console.log(obj == '10'); // valueOf
// console.log('7-------------');
// console.log(obj === '10');// false

function fn() {
    return 20;
}
console.log(fn + 10);
console.log(fn + ' hello');

fn.toString = function () {
    return 10;
};
console.log(fn + 10);
console.log(fn + ' hello');

fn.valueOf = function () {
    return 5;
};

console.log(fn + 10);
console.log(fn + ' hello');

var obj = {
    i: 10,
    toString: function () {
        console.log('toString');
        return this.i;
    },
    valueOf: function () {
        console.log('valueOf');
        return this.i;
    }
};

console.log(obj);
console.log(+obj);
console.log('' + obj);
console.log(String(obj));
console.log(Number(obj));
console.log(obj == '10');
console.log(obj === '10');

var arr = [];

arr.toString = function () {
    console.log('执行了toString()方法');
    return [];
};

arr.valueOf = function () {
    console.log('执行了valueOf()方法');
    return [];
};

// console.log(+arr);

var a = [];
if(a) {
    console.log(1);
}else {
    console.log(2);
}

var obj;

if(obj == null) {}

if(obj == undefined) {}

function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
var o = {};

function Person() {}
Person.prototype.name = 'kingx';
var p = new Person();

console.log(isEmpty(o));
console.log(isEmpty(p));

str == '' || str.trim().length == 0;

Number(num) && num;

