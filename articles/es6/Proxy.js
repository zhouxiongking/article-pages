/**
 * Proxy
 */

var person = {
    name: 'kingx',
    age: 23
};

var handler = {
    get: function (target, prop, receiver) {
        console.log("你访问了person的属性");
        return target[prop];
    }
};

var p = new Proxy(person, handler);

console.log(p.name);
// 你访问了person的属性
// kingx

console.log(person.name); // kingx

var p2 = new Proxy(person, {});
console.log(p2.name); // kingx

console.log('---------------');

var person = {
    name: 'kingx'
};

var proxy = new Proxy(person, {
    get: function (target, propKey) {
        if (propKey in target) {
            return target[propKey];
        } else {
            throw new ReferenceError(`访问的属性${propKey}不存在`);
        }
    }
});

// console.log(proxy.name);
// console.log(proxy.age);

console.log('--------------------');

var arr = [1, 4, 9, 16, 25];

var proxy = new Proxy(arr, {
    get: function (target, index) {
        index = Number(index);
        if (index > 0) {
            return target[index];
        } else {
            // 索引为负值,则从尾部元素开始计算索引
            return target[target.length + index];
        }
    }
});

console.log(proxy[2]);  // 9
console.log(proxy[-2]); // 16

console.log('--------------------');

var person = {
    name: 'kingx',
    _pwd: '123456'
};

var proxy = new Proxy(person, {
    get: function (target, prop) {
        if (prop.indexOf('_') === 0) {
            throw new ReferenceError('不可直接访问私有属性');
        } else {
            return target[prop];
        }
    }
});

console.log(proxy.name); // kingx
// console.log(proxy._pwd); // ReferenceError: 不可直接访问私有属性

console.log('--------------------');

var target = Object.defineProperties({}, {
    name: {
        value: 'kingx',
        configurable: true,
        writable: false
    },
    age: {
        value: 12,
        configurable: false,
        writable: false
    }
});

var proxy = new Proxy(target, {
    get: function (targetObj, prop) {
        return 'abc';
    }
});

console.log(proxy.name);
// console.log(proxy.age);

console.log('--------------------');

var proxy = new Proxy({}, {
    set: function (target, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age is invalid');
            }
        } else {
            target[prop] = value;
        }
    }
});

proxy.name = 'kingx';
proxy.age = 10;
proxy.age = 200; // RangeError: The age is invalid

console.log('--------------------');

var obj = {
    _name: 'kingx',
    age: 13
};

var proxy = new Proxy(obj, {
    has: function (target, prop) {
        if (prop[0] === '_') {
            return false;
        }
        return prop in target;
    }
});

console.log('age' in proxy);   // true
console.log('_name' in proxy); // false

for (let key in proxy) {
    console.log(proxy[key]);
}

console.log('--------------------');

var obj = {
    _name: 'kingx',
    age: 12
};

var proxy = new Proxy(obj, {
    deleteProperty: function (target, prop) {
        if (prop[0] === '_') {
            throw new Error(`Invalid attempt to delete private "${prop}" property`);
        }
        return true;
    }
});

delete proxy.age;  // 删除成功
// delete proxy._name; // Error: Invalid attempt to delete private "_name" property

console.log('--------------------');

function sum(num1, num2) {
    return num1 + num2;
}

var proxy = new Proxy(sum, {
    apply: function (target, obj, args) {
        return target.apply(obj, args) * 2;
    }
});

console.log(proxy(1, 3));  // 8
console.log(proxy.call(null, 3, 4));  // 14
console.log(proxy.apply(null, [5, 6]));  // 22

console.log('--------------------');

var person = {
    getName: function () {
        console.log(this === proxy);
    }
};

var proxy = new Proxy(person, {});

proxy.getName();  // true
person.getName(); // false

// var target = {
//     m: function () {
//         console.log(this === proxy);
//     }
// };
// var handler = {};
//
// var proxy = new Proxy(target, handler);
//
// target.m(); // false
// proxy.m();  // true

console.log('--------------------');

var apis = {
    _apiKey: '12ab34cd56ef',
    getAllUsers: function () {
        console.log('这是查询全部用户的方法');
    },
    getUserById: function (userId) {
        console.log('这是根据用户id查询用户的方法');
    },
    saveUser: function (user) {
        console.log('这是保存用户的方法');
    }
};

var proxy = new Proxy(apis, {
    get: function (target, prop) {
        if (prop[0] === '_') {
            return undefined;
        }
        return target[prop];
    },
    set: function (target, prop, value) {
        if (prop[0] !== '_') {
            target[prop] = value;
        }
    },
    has: function (target, prop) {
        if (prop[0] === '_') {
            return false;
        }
        return prop in target;
    }
});

console.log(proxy._name); // undefined
console.log(proxy.getAllUsers()); // 这是查询全部用户的方法
proxy._apiKey = '123456789'; // 设置无效

console.log('getUserById' in proxy);  // true
console.log('_apiKey' in proxy); // false

console.log('--------------------');

var apis = {
    _apiKey: '12ab34cd56ef',
    getAllUsers: function () {
        console.log('这是查询全部用户的方法');
    },
    getUserById: function (userId) {
        console.log('这是根据用户id查询用户的方法');
    },
    saveUser: function (user) {
        console.log('这是保存用户的方法');
    }
};

function recordLog() {
    console.log('这是记录日志的方法');
}

var proxy = new Proxy(apis, {
    get: function (target, prop) {
        var value = target[prop];
        return function (...args) {
            // 此处调用记录日志的方法
            recordLog();
            return value.apply(null, args);
        }
    }
});

proxy.getAllUsers();
// 这是记录日志的方法
// 这是查询全部用户的方法

console.log('--------------------');

var dataStore = {
    noDelete: 1234,
    oldMethod: function () {/*...*/},
    doNotChange: "tried and true"
};
var NO_DELETE = ['noDelete'];
var DEPRECATED = ['oldMethod'];
var NO_CHANGE = ['doNotChange'];
var proxy = new Proxy(dataStore, {
    set(target, key, value, proxy) {
        if (NO_CHANGE.includes(key)) {
            throw Error(`Error! ${key} is immutable.`);
        }
        return true;
    },
    deleteProperty(target, key) {
        if (NO_DELETE.includes(key)) {
            throw Error(`Error! ${key} cannot be deleted.`);
        }
        return true;
    },
    get(target, key, proxy) {
        if (DEPRECATED.includes(key)) {
            console.warn(`Warning! ${key} is deprecated.`);
        }
        var val = target[key];
        return typeof val === 'function' ?
            function (...args) {
                val.apply(null, args);
            } : val;
    }
});

proxy.doNotChange = "foo"; // Error! ${key} is immutable.
delete proxy.noDelete; // Error! noDelete cannot be deleted.
proxy.oldMethod(); // Warning! oldMethod is deprecated.