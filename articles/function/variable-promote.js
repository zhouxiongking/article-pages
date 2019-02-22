/**
 *  变量提升和函数提升
 */

var v = 'Hello World';

(function () {
    console.log(v);
})();

var v = 'Hello World';

(function () {
    console.log(v);
    var v = 'Hello Javascript';
})();

(function () {
    console.log(v);

    v = 'Hello Javascript';
})();

var v = 'Hello World';

(function () {
    var v;
    console.log(v);
    v = 'Hello Javascript';
})();

var v = 'Hello World';

if (true) {
    console.log(v);
    var v = 'Hello Javascript';
}

// 全局作用域内的变量a
var a = 'global variable';

function foo() {
    // 函数作用域内的变量b
    var b = 'function variable';

    console.log(a);
    console.log(b);
}

// 块级作用域内的变量c
{
    let c = 1;
}

// console.log(c);
//
// show();
// var a = true;
// if (a) {
//     function show() {
//         console.log(1);
//     }
// } else {
//     function show() {
//         console.log(2);
//     }
// }

function foo() {
    // show();
    var a = true;
    if (a) {
        function show() {
            console.log(1);
        }
    } else {
        function show() {
            console.log(2);
        }
    }
    show();
}

foo();

// show();


// 函数提升
function myTest() {
    foo();
    function foo() {
        console.log("我来自 foo");
    }
}
myTest();

// 函数提升
function myTest() {
    function foo() {
        console.log("我来自 foo");
    }

    foo();
}
myTest();

foo();
var foo = function () {
    console.log('我自来 foo');
};


show(); //你好
var show;
function show() {
    console.log('你好');
}
show = function () {
    console.log('hello');
};

function foo() {
    function bar() {
        return 3;
    }

    return bar();

    function bar() {
        return 8;
    }
}
console.log(foo());

function foo() {
    var a;
    if(a) {
        a = 10;
    }
    console.log(a);
}

var a = true;
foo();

var a;
a = true;
function foo() {
    var a;
    if(a) {
        a = 10;
    }
    console.log(a);
}
foo();

function fn() {
    var a;

    function foo() {
        return 'function';
    }

    console.log(typeof foo);

    foo = 'variable';

    console.log(typeof foo);
}

fn();

function foo() {
    var a = 1;
    function b() {
        a = 10;
        return;
        function a() {}
    }
    b();
    console.log(a);  // 1
}
foo();

function foo() {
    var a;
    function b() {
        a = 10;
        function a() {}
        return;
    }
    a = 1;
    b();
    console.log(a);  // 1
}
foo();





