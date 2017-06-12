// 方法1-使用toString方法
function isAnArray(param) {
    if (Object.prototype.toString.call(param) === '[object Array]') {
        // 是一个数组
        return true;
    }
    // 不是数组
    return false;
}

var arr = [];
var obj = {};

console.log(isAnArray(arr)); // true
console.log(isAnArray(obj)); // false


// 方法2-使用Array.isArray方法
function isAnArray2(param) {
    if (Array.isArray(param)) {
        return true;
    }
    return false;
}

var arr2 = [];
var obj2 = {};

console.log(isAnArray2(arr2));  // true
console.log(isAnArray2(obj2));  // false


// 方法3
function isAnArray3(param) {
    if (typeof param === 'object' &&
        param instanceof Array) {
        return true;
    }
    return false;
}

var arr3 = [];
var obj3 = {};

console.log(isAnArray3(arr3));  // true
console.log(isAnArray3(obj3));  // false


// 浅度克隆
var oPerson = {
    oName: "rookiebob",
    oAge: "18",
    oAddress: {
        province: "beijing"
    },
    ofavorite: [
        "swimming",
        {reading: "history book"}
    ],
    skill: function () {
        console.log("bob is coding");
    }
};
function clone(obj) {
    var result = {};
    for (key in obj) {
        result[key] = obj[key];
    }
    return result;
}
var oNew = clone(oPerson);
console.log(oPerson.oAddress.province);//beijing
oNew.oAddress.province = "shanghai";
console.log(oPerson.oAddress.province);//shanghai


//深度克隆
function deepClone(obj) {
    var result, oClass = isClass(obj);
    //确定result的类型
    if (oClass === "Object") {
        result = {};
    } else if (oClass === "Array") {
        result = [];
    } else {
        return obj;
    }
    for (key in obj) {
        var copy = obj[key];
        if (isClass(copy) == "Object") {
            result[key] = arguments.callee(copy);//递归调用
        } else if (isClass(copy) == "Array") {
            result[key] = arguments.callee(copy);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

//返回传递给他的任意对象的类
function isClass(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}

var oPerson = {
    oName: "rookiebob",
    oAge: "18",
    oAddress: {
        province: "beijing"
    },
    ofavorite: [
        "swimming",
        {reading: "history book"}
    ],
    skill: function () {
        console.log("bob is coding");
    }
};
//深度克隆一个对象
var oNew = deepClone(oPerson);

oNew.ofavorite[1].reading = "picture";
console.log(oNew.ofavorite[1].reading);//picture
console.log(oPerson.ofavorite[1].reading);//history book

oNew.oAddress.province = "shanghai";
console.log(oPerson.oAddress.province);//beijing
console.log(oNew.oAddress.province);//shanghai

