/*
 *  判断一个数组中是否有重复元素的方法
 */


/**
 * 方法1:转化为字符串,然后替换,最后进行比较
 * @param arr
 */
function method1(arr) {
    // 1.转化为逗号分隔字符串
    var s = arr.join(",") + ",";

    for (var i = 0; i < arr.length; i++) {
        // 2.将每个元素转换成空字符串,然后判断元素是否仍在字符串中
        if (s.replace(arr[i] + ",", "").indexOf(arr[i] + ",") > -1) {

            console.log("数组中有重复元素：" + arr[i]);

            return true;
        }
    }

    return false;
}

// 测试
var arr1 = ['kingx', 'cda', 'ed', 'kingx', 'cdo'];
var arr2 = [111, 272, 560, 345, 111];
var arr3 = [111, 222, 333, 444];

method1(arr1);
method1(arr2);
method1(arr3);


/**
 * 方法2: 先sort排序,再比较相邻元素
 * @param arr
 * @returns {boolean}
 */
function method2(arr) {
    // 1.sort方法排序
    var newArr = arr.sort();

    for (var i = 0; i < newArr.length; i++) {
        // 2.比较相邻元素
        if (newArr[i] == newArr[i + 1]) {

            console.log("数组重复内容：" + newArr[i]);

            return true;
        }
    }

    return false;
}

method2(arr1);   // true
method2(arr2);   // true
method2(arr3);   // true


/**
 * 方法3:借助对象,利用键值对的唯一性
 * @param arr
 * @returns {boolean}
 */
function method3(arr) {
    // 创建一个对象
    var obj = {};

    for(var i in arr) {
        // 判断键是否已经存在
        if(obj[arr[i]])

            return true;

        obj[arr[i]] = true;
    }

    return false;
}

// 测试
var arr1 = ['kingx', 'cda', 'ed', 'kingx', 'cdo'];
var arr2 = [111, 272, 560, 345, 111];
var arr3 = [111, 222, 333, 444];
console.log(method3(arr1)); // true
console.log(method3(arr2)); // true
console.log(method3(arr3)); // true

/**
 * 方法4:借助reduce方法生成对象,利用对象键值对的唯一性
 * @param arr
 * @returns {boolean}
 */
function method4(arr) {
    // 利用reduce方法获取对象
    var obj = arr.reduce(function (accumulator, item) {
        accumulator[item] = 1;
        return accumulator;
    }, {});

    // 比较对象的键个数和数组长度
    return Object.keys(obj).length !== arr.length;
}

console.log(method4(arr1));  // true
console.log(method4(arr2));  // true
console.log(method4(arr3));  // true
