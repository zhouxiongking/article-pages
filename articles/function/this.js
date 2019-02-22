/**
 * Javascript中的this
 */
var value = 10;
var obj = {
    value: 100,
    method: function () {
        var foo = function () {
            console.log(this);
            console.log(this.value);
        };
        foo();
        return this.value;
    }
};
console.log(obj.method());

// var obj = {
//     value: 100,
//     method: function () {
//         var foo = function () {
//             console.log(this.value);
//         }();
//         // foo();
//         return this.value;
//     }
// };
// console.log(obj.method());

var number = 10;
function Person() {
    number = 20;
    this.number = 30;
}

Person.prototype.getNumber = function () {
    return this.number;
};

var p = new Person();
console.log(p.getNumber());

var value = 10;
var obj = {
    value: 20
};

var method = function () {
    console.log(this.value);
};

method();
method.call(obj);
method.apply(obj);

var newMethod = method.bind(obj);
newMethod();

//创建一个包含clickHandler()方法的简单对象，当页面上的按钮被点击时可以使用
var user = {
    data: [
        {name: "kingx1", age: 37},
        {name: "kingx2", age: 43}
    ],
    clickHandler: function (event) {
        // 0到1之间的随机整数
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
        // 从data数组里随机获取name和age属性,并输出
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
};

var button = document.getElementById('btn');
button.onclick = user.clickHandler;


var user = {
    sport: 'basketball',
    data: [
        {name: "kingx1", age: 11},
        {name: "kingx2", age: 12}
    ],
    clickHandler: function () {
        // 此时的this指向的是user对象
        this.data.forEach(function (person) {
            console.log(this);  // [object Window]
            console.log(person.name + ' is playing ' + this.sport);
        })
    }
};
user.clickHandler();

var user = {
    sport: 'basketball',
    data: [
        {name: "kingx1", age: 11},
        {name: "kingx2", age: 12}
    ],
    clickHandler: function () {
        // 使用临时变量_this保存this
        var _this = this;
        this.data.forEach(function (person) {
            // 通过_this访问sport属性
            console.log(person.name + ' is playing ' + _this.sport);
        })
    }
};
user.clickHandler();

function f(k) {
    this.m = k;
    return this;
}

var m = f(1);
var n = f(2);

console.log(m.m);
console.log(n.m);