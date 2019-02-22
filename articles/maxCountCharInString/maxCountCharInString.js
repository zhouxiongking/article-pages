// 算法1
function getMaxCount(str) {
    var json = {};
    // 遍历str的每一个字符得到key-value形式的对象
    for (var i = 0; i < str.length; i++) {
        // 判断json中是否有当前str的值
        if (!json[str.charAt(i)]) {
            // 如果不存在  就将当前值添加到json中去
            json[str.charAt(i)] = 1;
        } else {
            // 如果存在,则让value值加1
            json[str.charAt(i)]++;
        }
    }
    // 存储出现次数最多的值和次数
    var maxCountChar = '';
    var maxCount = 0;
    // 遍历json对象,找出最大次数的值
    for (var key in json) {
        // 如果当前项大于下一项
        if (json[key] > maxCount) {
            // 就让当前值更改为出现最多次数的值
            maxCount = json[key];
            maxCountChar = key;
        }
    }
    //最终返回出现最多的值以及出现的次数
    return '出现最多的值是' + maxCountChar + ',出现次数为' + maxCount;
}

var str = 'hello Javascript hello html hello css';
getMaxCount(str);

// 算法2
function getMaxCount2(str) {
    var json = {};
    var maxCount = 0, maxCountChar = '';
    str.split('').forEach(function (item) {
        if (!json.hasOwnProperty(item)) {
            var number = str.split(item).length - 1;
            if (number > maxCount) {
                json[item] = number;
                maxCount = number;
                maxCountChar = item;
            }
        }
    });

    return '出现最多的值是' + maxCountChar + ',出现次数为' + maxCount;
}

var str = 'hello Javascript hello html hello css';
getMaxCount2(str);

// 算法3
function getMaxCount3(str) {
    // 定义两个变量,分别表示出现最大次数和对应的字符
    var maxCount = 0, maxCountChar = '';
    // 先处理成数组,调用sort()方法排序,再处理成字符串
    str = str.split('').sort().join('');
    for (var i = 0, j = str.length; i < j; i++) {
        console.log(i);
        var char = str[i];
        // 计算每个字符串出现的次数
        var charCount = str.lastIndexOf(char) - i + 1;
        // 与次数最大值做比较
        if (charCount > maxCount) {
            // 更新maxCount和maxCountChar
            maxCount = charCount;
            maxCountChar = char;
        }
        // 变更索引为字符出现的最后位置
        i = str.lastIndexOf(char);
    }
    return '出现最多的值是' + maxCountChar + ',出现次数为' + maxCount;
}
var str = 'hello Javascript hello html hello css';
getMaxCount3(str);

// 算法4
function getMaxCount4(str) {
    // 定义两个变量,分别表示出现最大次数和对应的字符
    var maxCount = 0, maxCountChar = '';
    // 先处理成数组,调用sort()方法排序,再处理成字符串
    str = str.split('').sort().join('');
    // 通过正则表达式,将字符串处理成数组(数组每个元素为相同字符构成的字符串)
    var arr = str.match(/(\w)\1+/g);
    for (var i = 0; i < arr.length; i++) {
        // length表示字符串出现的次数
        var length = arr[i].length;
        // 与次数最大值做比较
        if (length > maxCount) {
            // 更新maxCount和maxCountChaaaaaar
            maxCount = length;
            maxCountChar = arr[i][0];
        }
    }
    return '出现最多的值是' + maxCountChar + ',出现次数为' + maxCount;
}

var str = 'helloJavascripthellohtmlhellocss';
getMaxCount4(str);


// 算法5
function getMaxCount5(str) {
    // 定义两个变量,分别表示出现最大次数和对应的字符
    var maxCount = 0, maxCountChar = '';
    while (str) {
        // 记录原始字符串的长度
        var originCount = str.length;
        // 当前处理的字符
        var char = str[0];
        var reg = new RegExp(char, 'g');
        // 使用replace方法替换处理的字符为空字符串
        str = str.replace(reg, '');
        var remainCount = str.length;
        // 当前字符出现的次数
        var charCount = originCount - remainCount;
        // 与次数最大值做比较
        if (charCount > maxCount) {
            // 更新maxCount和maxCountChar
            maxCount = charCount;
            maxCountChar = char;
        }
    }
    return '出现最多的值是' + maxCountChar + ',出现次数为' + maxCount;
}

var str = 'helloJavascripthellohtmlhellocss';
getMaxCount5(str);


