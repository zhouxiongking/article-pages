var obj = {
    name: 'kingx',
    age: 15,
    address: String('北京市'),
    interest: ['basketball', 'football'],
    email: 'zhouxiongking@163.com'
};

var replacer = function (key, value) {
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
};

// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(obj, replacer));
// console.log(JSON.stringify(obj, ['name', 'age']));

var p = Object.create(null, {
    name: {
        value: 'xiaoming',
        enumerable: false
    },
    age: {
        value: 15,
        enumerable: true
    }
});

// console.log(JSON.stringify(p));
//
// console.log(JSON.stringify({ uno: 1, dos : 2 }, null, 4));

// JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'


var a = {"name": "zzz"};
var b = {"name": "vvv"};
a.child = b;
b.parent = a;

// console.log(JSON.stringify(a));
var obj2 = {
    name: 'kingx',
    age: 15,
    address: String('北京市'),
    interest: ['basketball', 'football'],
    email: 'zhouxiongking@163.com',
    toJSON: function () {
        return {
            Name: this.name,
            Age: this.age
        };
    }
};

console.log(JSON.stringify(obj2));
console.log(JSON.stringify({name: obj2}, ['name']));


