// 函数声明式
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 3)); // 4

// 函数表达式
var sum = function (num1, num2) {
    return num1 + num2;
};

// 具有函数名的函数表达式
var sum = function foo(num1, num2) {
    return num1 + num2;
};

// console.log(foo(1, 3)); // ReferenceError: foo is not defined

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

var factorial = function fa(num) {
    if (num <= 1) {
        return 1;
    } else {
        // fa指向函数本身,进行递归调用,传递新一轮循环的参数
        return num * fa(num - 1);
    }
};

console.log(factorial(5));


var person = (function () {
    var _name = "";
    return {
        getName: function () {
            return _name;
        },
        setName: function (newName) {
            _name = newName;
        }
    };
}());
person.setName('kingx');
person.getName();   // 'kingx'

console.log(add(1, 2));   // "3"
console.log(sub(5, 3));   // Uncaught TypeError: sub is not a function
function add(a1, a2) {
    return a1 + a2;
}
var sub = function (a1, a2) {
    return a1 - a2;
};

add(1, 3);
sub(4, 1);

var sub = function f(a1, a2) {
    console.log(typeof f);  //"function"
    console.log(typeof sub());
    return a1 - a2;
};

var obj = {
    name: 'kingx',
    getName: function () {
        return this.name;
    }
};
obj.getName();
obj['getName']();

var obj2 = {
    name: 'kingx',
    getName: function () {
        console.log(this.name);
    },
    setName: function (name) {
        this.name = name;
        return this;
    }
};
obj2.setName('kingx2').getName();

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var p = new Person('kingx');
p.getName();

function sum(num1, num2) {
    return num1 + num2;
}

function person() {
}

sum.call(person, 1, 2);
sum.apply(person, [1, 2]);

var sum = function (num1, num2) {
    return num1 + num2;
};

sum(1, 2);

(function (num1, num2) {
    return num1 + num2;
})(1, 2);

function sum(num1, num2) {
    console.log(num1 + num2);
}
(1, 2);

// 函数声明
function sum(num1, num2) {
    console.log(num1 + num2);
}
// 表达式
(1, 2);

var sum = function (num1, num2) {
    console.log(num1 + num2);
}(1, 2);

// function (x) {
//     alert(x);
// }(5); //报错，function name expected

var aa = function (x) {
    alert(x);
}(1);//1

true && function (x) {
    alert(x);
}(2);//2

0, function (x) {
    alert(x);
}(3);//3

!function (x) {
    alert(x);
}(4);//4

~function (x) {
    alert(x);
}(5);//5

-function (x) {
    alert(x);
}(6);//6

+function (x) {
    alert(x);
}(7);//7

new function (){
    alert(8);//8
};

new function (x) {
    alert(x);
}(9);//9

(function sum(num1, num2) {
    console.log(num1 + num2);
}(1, 2));
