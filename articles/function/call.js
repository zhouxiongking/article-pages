/**
 * call
 */

//定义一个add 方法
function add(x, y) {
    return x + y;
}

//用call 来调用 add 方法
function myAddCall(x, y) {
    //调用 add 方法 的 call 方法
    return add.call(this, x, y);
}

console.log(myAddCall(10, 20));    //输出结果30

//定义一个add方法
function add(x, y) {
    return x + y;
}

function myAddApply(x, y) {
    // 调用add方法的apply方法
    return add.apply(this, [x, y]);
}
console.log('-------');
console.log(myAddApply(10, 20));    //输出结果30

var arr = [3, 5, 7, 2, 9, 11];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

function Animal(age) {
    // 属性
    this.age = age;
    // 实例方法
    this.sleep = function () {
        return this.name + '正在睡觉！';
    }
}

function Cat(name, age) {
    Animal.call(this, age);
    this.name = name || 'tom';
}

function Cat(name, age) {
    this.age = age;
    this.sleep = function () {
        return this.name + '正在睡觉！';
    };
    this.name = name || 'tom';
}

var cat = new Cat('tony', 11);
console.log(cat.sleep());  // tony正在睡觉！
console.log(cat.age);  // 11

var animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        };
        this.print();
    }).call(animals[i], i);
}

//定义一个add方法
function add(x, y) {
    return x + y;
}
// 通过bind进行add方法的调用
function myAddBind(x, y) {
    // 通过bind方法得到一个新的函数
    var bindAddFn = add.bind(this, x, y);
    // 执行新的函数
    return bindAddFn();
}

console.log(myAddBind(10, 20));    //输出结果30

function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
    setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
    console.log('I am a beautiful flower with ' +
        this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  // 一秒钟后, 调用'declare'方法

