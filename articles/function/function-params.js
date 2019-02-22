function sum(num1, num2) {
    console.log(arguments[0]);  // 3
    console.log(arguments[1]);  // 4
    console.log(arguments[2]);  // undefined
}

sum(3, 4);

// console.log(typeof arguments); // undefined

function foo() {
    console.log(arguments.length); // 3

    function foo2() {
        console.log(arguments.length); // 0
    }

    foo2();
}

foo(1, 2, 3);

function foo(a, b, c) {
    console.log(arguments.length);  // 2

    arguments[0] = 11;
    console.log(a);   // 11

    b = 12;
    console.log(arguments[1]);  // 12

    arguments[2] = 3;
    console.log(c);  // undefined

    c = 13;
    console.log(arguments[2]);  // 3

    console.log(arguments.length);  // 2
}

foo(1, 2);

function foo() {
    console.log(arguments.callee === foo);
}

foo();

function create() {
    return function (n) {
        if (n <= 1)
            return 1;
        return n * arguments.callee(n - 1);
    };
}

var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)

var sillyFunction = function (recursed) {
    if (!recursed) {
        console.log(this);
        return arguments.callee(true);
    }
    console.log(this);
};

sillyFunction();

function f(x, y, z) {
    //首先检查传递的参数数量是否正确
    if (arguments.length != 3) {
        throw new Error("期望传递的参数个数为3, 实际传递个数为" + arguments.length);
    }
    // ...do something
}

// f(1, 2); // Uncaught Error: 期望传递的参数个数为3, 实际传递个数为2

function joinStr(seperator) {
var strArr = Array.prototype.slice.call(arguments, 1);
return strArr.join(seperator);
}

joinStr('-', 'orange', 'apple', 'banana'); // orange-apple-banana
joinStr(',', 'orange', 'apple', 'banana'); // orange,apple,banana

function sum(num1, num2) {
    return num1 + num2;
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

sum(1, 2);
sum(1, 2, 3);

function sum() {
    var arr = Array.prototype.slice.call(arguments);
    return arr.reduce(function (pre, cur) {
        return pre + cur;
    }, 0)
}

sum(1, 2);       // 3
sum(1, 2, 3);    // 6
sum(1, 2, 3, 4); // 10

