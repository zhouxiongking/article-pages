// 1.进入全局执行上下文环境
var a = 10;
var fn = function (x) {
    var c = 10;
    return c + x;
};
var bar = function (y) {
    var b = 5;
    fn(y + b);  // 3.进入fn函数执行上下文环境
};

bar(20);  // 2.进入bar函数执行上下文环境

/*
 执行上下文栈
 |                |
 |                |
 |                |
 | 全局执行上下文环境 |
 ________________
 */


// function fn() {
//     var max = 10;
//     return function bar(x) {
//         if (x > max) {
//             console.log(x);
//         }
//     };
// }
// var f1 = fn();
// f1(11);

var cachedBox = (function () {
    // 缓存的容器
    var cache = {};
    return {
        searchBox: function (id) {
            // 如果在缓存中,则直接返回
            if(id in cache) {
                return '查找的结果为:' + cache[id];
            }
            // 经过一段很耗时的dealFn处理
            var result = dealFn(id);
            // 更新缓存的结果
            cache[id] = result;
            // 返回计算的结果
            return '查找的结果为:' + result;
        }
    };
})();

function dealFn(id) {
    console.log('这是一段很耗时的操作');
    return id;
}

console.log(cachedBox.searchBox(1));
console.log(cachedBox.searchBox(1));

var person = function () {
    var _name = 'default';

    return {
        getName: function () {
            return _name;
        },
        setName: function (name) {
            _name = name;
        },
        sleep: function () {
            return _name + '正在睡觉';
        }
    }
}();

console.log(person._name);    // undefined
console.log(person.getName());// default

person.setName('kingx');
console.log(person.sleep());  // kingx正在睡觉


var stack = (function () {
    // 使用数组模仿栈的实现
    let arr = [];
    // 栈
    return {
        push: function (value) {
            arr.push(value);
        },
        pop: function () {
            return arr.pop();
        },
        length: function () {
            return arr.length;
        }
    };
})();

stack.push('abc');
stack.push('def');
console.log(stack.length());
stack.pop();
console.log(stack.length());




