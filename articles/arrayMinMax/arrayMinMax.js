/* -----------------算法1--------------*/
Array.prototype.min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){
        if (this[i] < min){
            min = this[i];
        }
    }
    return min;
};

//最大值
Array.prototype.max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){
        if (this[i] > max) {
            max = this[i];
        }
    }
    return max;
};

var arr = [2,4,10,7,5,8,6];
console.log(arr.min());
console.log(arr.max());

/* -----------------算法2--------------*/
// 最大值
Array.max = function(array){
    return Math.max.apply(Math, array );
};

// 最小值
Array.min = function( array ){
    return Math.min.apply(Math, array );
};

var arr2 = [2,4,10,7,5,8,6];

console.log(Array.min(arr2));
console.log(Array.max(arr2));

/* -----------------算法3--------------*/
// 最大值
Array.prototype.max = function(){
    return Math.max.apply({}, this);
};

// 最小值
Array.prototype.min = function(){
    return Math.min.apply({}, this);
};

var arr3 = [2,4,10,7,5,8,6];

console.log(arr3.min());  // 2
console.log(arr3.max());  // 10

/* -----------------算法4--------------*/
// 最大值
Array.prototype.max = function() {
    return this.reduce(function(preValue, curValue) {
        return preValue > curValue ? preValue : curValue;
    });
};

// 最小值
Array.prototype.min = function() {
    return this.reduce(function(preValue, curValue) {
        return preValue > curValue ? curValue : preValue;
    });
};

var arr4 = [2,4,10,7,5,8,6];

console.log(arr4.min());  // 2
console.log(arr4.max());  // 10

/* -----------------算法5--------------*/

var sortFn = function (a, b) {
    return a - b;
};

var arr5 = [2, 4, 10, 7, 5, 8, 6];

var sortArr = arr5.sort(sortFn);

// 最小值
console.log(sortArr[0]);
// 最大值
console.log(sortArr[sortArr.length - 1]);


/* -----------------算法6--------------*/
var arr6 = [2, 4, 10, 7, 5, 8, 6];

// 最小值
console.log(Math.min(...arr6)); // 2
// 最大值
console.log(Math.max(...arr6)); // 10


