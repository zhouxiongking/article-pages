/**
 * Generator函数学习
 */

function* helloworldGenerator() {
    console.log('Generator执行');
    yield 'hello';
    yield 'world';
}

const hw = helloworldGenerator();
hw.next();
hw.next();
hw.next();

// function* testGenerator() {
//     yield 'test';
// }
//
// const tg = new testGenerator(); // TypeError: testGenerator is not a constructor

function* testGenerator() {
    yield 1 + 2;
}

const tg = testGenerator();
tg.next();

// function foo() {
//     yield 'foo';
// }

// function* demo() {
//     console.log('Hello' + yield 123); // SyntaxError
//     console.log('Hello' + (yield 123)); // 正确
// }

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
function* foo(x) {
    var y = 3 * (yield (x + 2));
    var z = yield (y / 4);
    return (x + y + z);
}

var a = foo(5);
a.next(); // Object{value:7, done:false}
a.next(); // Object{value:NaN, done:false}
a.next(); // Object{value:NaN, done:true}

var b = foo(5);
b.next(); // { value:7, done:false }
b.next(8); // { value:6, done:false }
b.next(9); // { value:38, done:true }

function* testGenerator() {
    yield 'hello';
    yield 'world';
}

var t = testGenerator();
for (var key of t) {
    console.log(key);
}

function* propGenerator() {
    let propArr = Object.keys(this);
    for (let prop of propArr) {
        yield [prop, this[prop]];
    }
}

let obj = {
    name: 'kingx',
    age: 12
};
obj[Symbol.iterator] = propGenerator;

for (let [key, value] of obj) {
    console.log(key, ':', value);
}

function* testGenerator() {
    this.name = 'kingx';
    yield 'hello';
    yield 'world';
}

var t = testGenerator();
t.next();
console.log(t.name);  // undefined

function* testGenerator() {
    this.name = 'kingx';
    yield 'hello';
    yield 'world';
}

var t = testGenerator.call(testGenerator.prototype);
t.next();
console.log(t.name);  // kingx

function* fn1() {
    yield 'test1';
}

function* fn2() {
    yield 'test2';
    yield* fn1();
    yield 'test3';
}

let f = fn2();
for (let key of f) {
    console.log(key);
}





