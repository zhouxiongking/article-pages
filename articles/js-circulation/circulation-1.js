/**
 * Javascript中的循环
 */

var arr = ['one', 'two', 'three'];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 'one', 'two', 'three
}

var arr = [];
for (var i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
for (var i = 0; i < arr.length; i++) {
    if (i <= 20) {
        continue;
    }
    if (i >= 50) {
        break;
    }
    if (i % 5 === 0) {
        console.log(i);
    }
}

var arr = ['one', 'two', 'three'];
var obj = {};
arr.forEach(function (item, index, arr) {
    console.log(this);
}, obj);

// 计时器
function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
    array.forEach(function (item, index) {
        this.sum += item;
        ++this.count;
    }, this); // 这里的this指向
};

var obj = new Counter();
obj.add([1, 3, 5, 7]);
obj.count; // 4 === (1 + 1 + 1 + 1)
obj.sum;  // 16 === (1 + 3 + 5 + 7)

var i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

var j = 1;
do {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
} while (j <= 10);

var obj = {
    name: 'kingx',
    age: 12,
    interest: ['basketball', 'football'],
    getName: function () {
        return this.name;
    }
};

for (var prop in obj) {
    console.log(prop);
}

console.log('---------------------');

function Parent(name, age) {
    this.name = name;
    this.age = age;
}

function Child(interest) {
    this.interest = interest;
}

Child.prototype = new Parent();
// Child.prototype.constructor = Child;

var child = new Child('football');

for (var prop in child) {
    if (child.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

