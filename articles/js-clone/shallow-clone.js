/**
 * Javascript 浅克隆
 */

var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2[1] = 4;
console.log(arr1);  // [1, 4, 3];
console.log(arr2);  // [1, 4, 3];

/**
 * Javascript实现浅克隆-方法1
 */
function shallowClone(origin) {
    var result = {};
    for (var key in origin) {
        if (origin.hasOwnProperty(key)) {
            result[key] = origin[key];
        }
    }
    return result;
}

var origin = {
    a: 1,
    b: [2, 3, 4],
    c: {
        d: 'name'
    }
};

var result = shallowClone(origin);
console.log(origin);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
console.log(result);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }


var origin = {
    a: 1,
    b: [2, 3, 4],
    c: {
        d: 'name'
    }
};

var result = Object.assign({}, origin);
console.log(origin);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
console.log(result);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }

result.c.d = 'city';
console.log(origin);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }
console.log(result);  // { a: 1, b: [ 2, 3, 4 ], c: { d: 'name' } }

