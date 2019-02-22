/**
 * 对象创建
 */

var obj = {
    name: 'kingx',
    age: 11,
    getName: function () {
        return this.name;
    },
    address: {
        name: '北京市',
        code: '100000'
    }
};

var obj = new Object();
obj.name = 'kingx';
obj.age = 11;
obj.getName = function () {
    return this.name;
};
obj.address = {
    name: '北京市',
    code: '100000'
};

function createObj(name, age, address) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.address = address;
    o.getName = function () {
        return this.name;
    };
    return o;
}
var obj = createObj('kingx', 11, {
    name: '北京市',
    code: '100000'
});

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.getName = function () {
        return this.name;
    };
}

Person.prototype.getAge = function () {
    return this.age;
};

var obj = new Person('kingx', 11, {
    name: '北京市',
    code: '100000'
});
var obj2 = new Person('kingx', 11, {
    name: '北京市',
    code: '100000'
});

console.log(obj instanceof Person);

console.log(obj.getName === obj2.getName);
console.log(obj.getAge === obj2.getAge);

function Person() {

}
Person.prototype.name = 'kingx';
Person.prototype.age = 11;
Person.prototype.address = {
    name: '北京市',
    code: '100000'
};
Person.prototype.getName = function () {
    return this.name;
};

var person = new Person();
var person2 = new Person();
console.log(person.name === person2.name);  // true
console.log(person.getName === person2.getName); // true

var person = new Person();
var person2 = new Person();

console.log(person.name);  // kingx
person2.name = 'kingx2';
console.log(person2.name); // kingx2

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

Person.prototype.getName = function () {
    return this.name;
};

var person = new Person('kingx', 11, {
    name: '北京市',
    code: '100000'
});

var person2 = new Person('kingx2', 12, {
    name: '上海市',
    code: '200000'
});

console.log(person.name);  // kingx
console.log(person2.name); // kingx2

person.address.name = '广州市';
person.address.code = '510000';

console.log(person2.address.name);  // 上海市

console.log(person.getName === person2.getName); // true

person2.name = 'kingx3';

console.log(person.getName());  // kingx
console.log(person2.getName()); // kingx3

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    //如果Person对象中_initialized 为undefined，表明还没有为Person的原型添加方法
    if (typeof Person._initialized === "undefined") {
        Person.prototype.getName = function () {
            return this.name;
        };
        Person._initialized = true;
    }
}

var person = new Person('kingx', 11, {
    name: '北京市',
    code: '100000'
});

var person2 = new Person('kingx2', 12, {
    name: '上海市',
    code: '200000'
});

person.address.name = '广州市';
person.address.code = '510000';

console.log(person2.address.name);  // 上海市

person2.name = 'kingx3';

console.log(person.getName());  // kingx
console.log(person2.getName()); // kingx3
