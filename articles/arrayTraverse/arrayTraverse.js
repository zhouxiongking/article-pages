var arr = [1, 2, 3];

arr.forEach(function (element, index, array) {
    console.log(element, index, array)
});

var arr = [1, 2, 3];
var obj = {name: 'zhang'};

arr.forEach(function (element, index, array) {

    console.log(element, index, array, this);

}, obj);

// forEach兼容性处理
Array.prototype.forEach = Array.prototype.forEach ||
    function (fn, context) {
        for (var k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" &&
                Object.prototype.hasOwnProperty.call(this, k)) {
                fn.call(context, this[k], k, this);
            }
        }
    };

/*----------------------------------------------------------*/

var data = [1, 2, 3];

var arrayOfSquares = data.map(function (element) {
    return element * element;
});

console.log(arrayOfSquares); //[1, 4, 9]


var data = [1, 2, 3];

var arrayOfSquares = data.map(function (element) {
    element * element;
});

// 没有返回值，则都返回undefined
console.log(arrayOfSquares); // [undefined, undefined, undefined]

// map兼容性处理
Array.prototype.map = Array.prototype.map ||
    function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                arr.push(fn.call(context, this[k], k, this));
            }
        }
        return arr;
    };

/*----------------------------------------------------------*/

var arr = [0, 1, 2, 3];

var newArr = arr.filter(function (element, index, array) {
    return element;
});

var newArr2 = arr.filter(function (element, index, array) {
    return element >= 2;
});

console.log(newArr);  // [1, 2, 3]
console.log(newArr2); // [2, 3]

// filter兼容性处理
Array.prototype.filter = Array.prototype.filter ||
    function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }
        return arr;
    };

/*----------------------------------------------------------*/

function isBigEnough(element, index, array) {
    return element >= 4;
}

// 测试some方法
var passed1 = [1, 2, 3].some(isBigEnough);
var passed2 = [1, 2, 3, 4].some(isBigEnough);

console.log(passed1); // false
console.log(passed2); // true


// 测试every方法
var passed3 = [2, 3, 4].every(isBigEnough);
var passed4 = [4, 5].every(isBigEnough);

console.log(passed3); // false
console.log(passed4); // true

// some兼容性处理
Array.prototype.some = Array.prototype.some ||
    function (fn, context) {
        var passed = false;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };

// every兼容性处理
Array.prototype.every = Array.prototype.every ||
    function (fn, context) {
        var passed = true;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === false) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };

/*----------------------------------------------------------*/

var sum = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue, currentIndex, array)
    return accumulator + currentValue;
});

console.log(sum);

var sum = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue, currentIndex, array)
    return accumulator + currentValue;
}, 10);

console.log(sum);

// reduce兼容性处理
Array.prototype.reduce = Array.prototype.reduce ||
    function (callback, initialValue) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };

/*----------------------------------------------------------*/

var value = [1, 5, 10, 15].find(function (element, index, array) {
    return element > 9;
});

var value2 = [1, 5, 10, 15].find(function (element, index, array) {
    return element > 20;
});

console.log(value); // 10
console.log(value2); // undefined

// find兼容性处理
Array.prototype.find = Array.prototype.find ||
    function (fn, context) {
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (fn.call(context, this[k], k, this)) {
                    return this[k];
                }
            }
        }
        return undefined;
    };


