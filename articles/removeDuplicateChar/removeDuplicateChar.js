/**
 * 去除字符串中重复的字符
 */
// 算法1
function removeDuplicateChar1(str) {
    // 结果数组
    var result = [];
    // key-value形式的对象
    var json = {};
    for (var i = 0; i < str.length; i++) {
        // 当前处理的字符
        var char = str[i];
        // 判断是否在对象中
        if(!json[char]) {
            // value值设置为false
            json[char] = true;
            // 添加至结果数组中
            result.push(char);
        }
    }
    return result.join('');
}

var str = 'helloJavascripthellohtmlhellocss';
removeDuplicateChar1(str);

// 算法2
function removeDuplicateChar2(str) {
    // 使用call改变filter方法的执行主体
    let result = Array.prototype.filter.call(str, function (char, index, arr) {
        // 通过indexOf()方法与index的比较,判断是否是第一次出现的字符
        return arr.indexOf(char) === index;
    });
    return result.join('');
}

function removeDuplicateChar2(str) {
    // 使用call改变filter方法的执行主体
    return Array.prototype.filter.call(str, (char, index, arr) => arr.indexOf(char) === index).join('');
}

var str = 'helloJavascripthellohtmlhellocss';
removeDuplicateChar2(str);


// 算法3
function removeDuplicateChar3(str) {
    // 字符串转换的数组作为参数,生成Set的实例
    let set = new Set(str.split(''));
    // 将set重新处理为数组,然后转换成字符串
    return [...set].join('');
}

var str = 'helloJavascripthellohtmlhellocss';
removeDuplicateChar3(str);


