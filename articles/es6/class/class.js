/**
 * Class
 */

function Person1(name, age) {
    this.name = name;
    this.age = age;
}
Person1.prototype.getName = function () {
    return this.name;
};
var p1 = new Person1('kingx', 12);
console.log(p1.getName()); // kingx

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}
var p2 = new Person2('kingx', 12);
console.log(p2.getName()); // kingx

console.log(typeof Person2);  // function

console.log(p2.getName === Person2.prototype.getName); // true


class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}
var p = new Person3('kingx', 12);
console.log(p);
console.log(p.getName()); // TypeError: p.getName is not a function

// var p = new Person(); // ReferenceError: Person is not defined
class Person {
}

var p1 = new Person();
// var p2 = Person(); // TypeError: Class constructor Person cannot be invoked without 'new'


class Person4 {
    constructor(name) {
        this.name = name;
        this.getName = this.getName.bind(this);
    }

    getName() {
        return this.name;
    }
}
var p = new Person4('kingx');
let {getName} = p;
getName(); // TypeError: Cannot read property 'name' of undefined


class MyClassroom {
    constructor(number) {
        this.number = number;
    }

    static get1() {
        return this.number; // 静态方法包含的this关键字，这个this指的是类，而不是实例
    }

    get1() {
        return this.number;
    }
}

console.log(MyClassroom.get1()); // undefined
MyClassroom.number = 60;
console.log(MyClassroom.get1()); // 60

var classroom = new MyClassroom(20);
console.log(classroom.get1()); // 20

class Animal {
    constructor(type) {
        this.type = type;
    }
}

class Cat extends Animal {
    constructor(name, type) {
        super(type);
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

var cat = new Cat('tom', 'cat');
console.log(cat.type); // cat
console.log(cat.getName()); // tom

console.log('----------------------');

class VersionedArray {
    constructor() {
        // 一次提交的
        this.arr = [];
        // 初始状态空的二维数组
        this.history = [[]];
    }

    commit() {
        // 每次commit,先执行slice()方法,获取push进数组的值,然后添加到history二维数组中
        this.history.push(this.arr.slice());
    }

    revert() {
        // 执行revert方法时,调用splice方法,先将数组
        this.arr.splice(0, this.arr.length, ...this.history[this.history.length - 1]);
    }
}

var x = new VersionedArray();

x.arr.push(1);
x.arr.push(2);
console.log(x.arr); // [1, 2]
console.log(x.history); // [[]]

x.commit();

console.log(x.history); // [[], [1, 2]]

x.arr.push(3);
console.log(x.arr); // [1, 2, 3]
x.commit();
console.log(x.history); // [ [], [ 1, 2 ], [ 1, 2, 3 ] ]

x.arr.push(4);
x.revert();
console.log(x.arr); // [1, 2, 3]

class MyArr extends Array {
    constructor() {
        super();
    }
    pushItem(item) {
        this.push(item);
    }
}

let arr = new MyArr();
arr.pushItem({name: 'kingx'});

class Parent {
    static staticMethod() {
        return 'hello';
    }
}

class Child extends Parent {}

console.log(Child.staticMethod()); // 'hello'