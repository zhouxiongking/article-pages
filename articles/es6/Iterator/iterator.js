/**
 * Created by zhouxiong on 2019/4/4.
 */

// var obj = {
//     name: 'kingx',
//     age: 11
// };
// for (let key of obj) {
//     console.log(key); // TypeError: obj[Symbol.iterator] is not a function
// }
//
// var arr = ['one', 'two'];
// for (let key in arr) {
//     console.log(key); // 0, 1
// }
//
// let obj = {
//     name: 'kingx',
//     age: 11,
//     address: 'beijing',
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//
//             }
//         }
//     }
// };

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype[Symbol.iterator] = function () {
    var count = 0;
    var propArr = Object.keys(this);
    return {
        next: function () {
            if (count < propArr.length) {
                var index = count++;
                return {
                    value: propArr[index],
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
};

var person = new Person('kingx', 12);
for (let key of person) {
    console.log(key, ':', person[key]);
}

var arr = ['one', 'two', 'three'];

for (let key of arr) {
    console.log(key);
}


function makeIterator(array) {
    var index = 0;
    return {
        next: function () {
            if (index < array.length) {
                return {
                    value: array[index++],
                    done: false
                }
            } else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    };
}

console.log('----------------------');

var arr = ['one', 'two', 'three'];
for (let key of arr) {
    console.log(key); // one, two, three
}

console.log('*************************');

let set = new Set(['one', 'two', 'three']);
for (let key of set) {
    console.log(key); // one, two, three
}

let map = new Map();
map.set('name', 'kingx');
map.set('age', 12);
map.set('address', 'beijing');

for (let key of map) {
    console.log(key); // one, two, three
}

function foo() {
    for (var arg of arguments) {
        console.log(arg);
    }
}

foo('name', 'age', 'address');

var obj = {
    name: 'kingx',
    age: 12,
    address: 'beijing'
};

for (let key of Object.keys(obj)) {
    console.log(key);  // name, age, address
}

for (let value of Object.values(obj)) {
    console.log(value); // kingx, 12, beijing
}

for (let [key, value] of Object.entries(obj)) {
    console.log(key, ':', value);
}

// name : 'kingx',
// age : 12,
// address : 'beijing'

var arr = ['one', 'two', 'three'];

arr.forEach(function (item, index) {
    if (index === 1) {
        return item;
    }
    console.log(item);
});

var arr = ['one', 'two', 'three'];
arr.name = 'myArr';
for (var key in arr) {
    console.log(key, typeof key);
}

// 0 string
// 1 string
// 2 string
// name string

var arr = ['one', 'two', 'three'];
for (var key of arr) {
    if (key === 'two') {
        break;
    }
    console.log(key);
}
