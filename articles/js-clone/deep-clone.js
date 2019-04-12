/**
 * Javascript深克隆
 */

// (function ($) {
//     'use strict';
//
//     var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');
//
//     function type() {
//         return Object.prototype.toString.call(this).slice(8, -1);
//     }
//
//     for (var i = types.length; i--;) {
//         $['is' + types[i]] = (function (self) {
//             return function (elem) {
//                 return type.call(elem) === self;
//             };
//         })(types[i]);
//     }
//
//     return $;
// })($ = {});//类型判断
//
// function deepClone(obj, deep) {
//     if ($.isFunction(obj)) {
//         return new Function("return " + obj.toString())();
//     } else if (obj === null || (typeof obj !== "object")) {
//         return obj;
//     } else {
//         var name, target = $.isArray(obj) ? [] : {}, value;
//         for (name in obj) {
//             if (obj.hasOwnProperty(name)) {
//                 value = obj[name];
//
//                 if (value === obj) {
//                     continue;
//                 }
//
//                 if (deep) {
//                     if ($.isArray(value) || $.isObject(value)) {
//                         target[name] = deepClone(value, deep);
//                     } else if ($.isFunction(value)) {
//                         target[name] = new Function("return " + value.toString())();
//                     } else {
//                         target[name] = value;
//                     }
//                 } else {
//                     target[name] = value;
//                 }
//             }
//         }
//         return target;
//     }
// }
//
//
// // var origin = {
// //     a: 1,
// //     b: [2, 3, 4],
// //     c: {
// //         d: 'name'
// //     }
// // };
//
// function Animal(name) {
//     this.name = name;
// }
// var animal = new Animal('tom');
//
// var origin = {
//     a: function () {
//         return 'a';
//     },
//     b: new RegExp('\d', 'g'),
//     c: animal
// };
//
// var result = deepClone(origin, true);
//
// console.log(origin); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
// console.log(result); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }

// var origin = {
//     a: 1,
//     b: [2, 3, 4],
//     c: {
//         d: 'name'
//     }
// };
//
// var result = JSON.parse(JSON.stringify(origin));
//
// console.log(origin); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
// console.log(result); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
//
// console.log('------------------------------------');
//
function Animal(name) {
    this.name = name;
}
var animal = new Animal('tom');

var origin = {
    a: function () {
        return 'a';
    },
    b: new RegExp('\d', 'g'),
    c: animal
};
//
// var result = JSON.parse(JSON.stringify(origin));
//
// console.log(origin); // { a: [Function: a], b: /d/g, c: Animal { name: 'tom' } }
// console.log(result); // { b: {}, c: { name: 'tom' } }
// console.log(origin.c.constructor); // [Function: Animal]
// console.log(result.c.constructor); // [Function: Object]
//
// console.log('------------------------------------');
//
// var origin = {
//     a: 'name'
// };
//
// origin.b = origin;

// TypeError: Converting circular structure to JSON
// var result = JSON.parse(JSON.stringify(origin));

/**
 * 类型判断
 */
(function (_) {
    'use strict';

    var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

    function type() {
        return Object.prototype.toString.call(this).slice(8, -1);
    }

    for (var i = types.length; i--;) {
        _['is' + types[i]] = (function (self) {
            return function (elem) {
                return type.call(elem) === self;
            };
        })(types[i]);
    }
    return _;
})(_ = {});

/**
 * 深克隆实现方案
 * @param source 待克隆的对象
 * @returns {*} 返回克隆后的对象
 */
function deepClone(source) {
    // 维护两个储存循环引用的数组
    var parents = [];
    var children = [];

    function getRegExp(reg) {
        var result = '';
        if (reg.ignoreCase) {
            result += 'i';
        }
        if (reg.global) {
            result += 'g';
        }
        if (reg.multiline) {
            result += 'm';
        }
        return result;
    }

    function _clone(parent) {
        if (parent === null) return null;
        if (typeof parent !== 'object') return parent;

        var child, proto;

        if (_.isArray(parent)) {
            // 对数组做特殊处理
            child = [];
        } else if (_.isRegExp(parent)) {
            // 对正则对象做特殊处理
            child = new RegExp(parent.source, getRegExp(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (_.isDate(parent)) {
            // 对Date对象做特殊处理
            child = new Date(parent.getTime());
        } else {
            // 处理对象原型
            proto = Object.getPrototypeOf(parent);
            // 利用Object.create切断原型链
            child = Object.create(proto);
        }

        // 处理循环引用
        var index = parents.indexOf(parent);

        if (index !== -1) {
            // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
            return children[index];
        }
        // 没有引用过,则添加至parents和children数组中
        parents.push(parent);
        children.push(child);
        // 遍历对象属性
        for (var prop in parent) {
            if (parent.hasOwnProperty(prop)) {
                // 递归处理
                child[prop] = _clone(parent[prop]);
            }
        }
        return child;
    }
    return _clone(source);
}


// var origin = {
//     a: 1,
//     b: [2, 3, 4],
//     c: {
//         d: 'name'
//     }
// };

function Animal(name) {
    this.name = name;
}
var animal = new Animal('tom');

var origin = {
    a: function () {
        return 'a';
    },
    b: new RegExp('\d', 'g'),
    c: animal
};

var origin = {
    a: 'name'
};
origin.b = origin;

var result = deepClone(origin);

console.log(origin); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
console.log(result); // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }