/**
 * 去除空格的方法
 * @param str
 * @param type
 * all-所有空格,
 * preBehind-前后空格
 * previous-前面空格,
 * behind-后面空格
 */
function trim(str, type) {
    switch (type) {
        case 'all':
            return str.replace(/\s+/g, "");
        case 'preBehind':
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 'previous':
            return str.replace(/(^\s*)/g, "");
        case 'behind':
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

console.log(trim('  this is a string ', 'preBehind'));

/**
 * 字母大小写切换
 * @param str
 * @param type
 * FirstUpper - 首字母大写
 * FirstLower - 首字母小写
 * AllToggle - 全部大小写转换
 * AllUpper - 全部大写
 * AllLower - 全部小写
 */
function changeCase(str, type) {
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 'FirstUpper':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1);
            });
        case 'FirstLower':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1);
            });
        case 'AllToggle':
            return ToggleCase(str);
        case 'AllUpper':
            return str.toUpperCase();
        case 'AllLower':
            return str.toLowerCase();
        default:
            return str;
    }
}

console.log(changeCase('hello World', 'FirstUpper'));

/**
 * 检测字符串类型
 * @param str
 * @param type
 */
function checkType(str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8|9][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]+$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'text':
            return /^\w+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default:
            return true;
    }
}

console.log(checkType('enffd', 'english'));

/**
 * 检测密码强度
 * @param str
 * @returns {number}
 */
function checkPwd(str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv;
    }
    if (/[0-9]/.test(str)) {
        nowLv++;
    }
    if (/[a-z]/.test(str)) {
        nowLv++;
    }
    if (/[A-Z]/.test(str)) {
        nowLv++;
    }
    if (/[\.|-|_]/.test(str)) {
        nowLv++;
    }
    return nowLv;

}

console.log(checkPwd('dsddsdsdasdsA1.'));

/**
 * 随机生成指定长度的字符串
 * @param length
 * @returns {string}
 */
function random(length) {
    var str = Math.random().toString(36).substr(2);
    if (str.length >= length) {
        return str.substr(0, length);
    }
    str += random(length - str.length);
    return str;
}

console.log(random(12));
console.log(random(3));

/**
 * 统计给定字符串中,目标字符串出现的次数
 * @param str
 */
function countStr(str, target) {
    return str.split(target).length - 1;
}

console.log(countStr('thisiskingxkingakingb', 'king'));

/**
 * 格式化处理字符串
 * @param str
 * @param size-位数,默认3位
 * @param delimiter-连接符,默认为','
 */
function formatText(str, size, delimiter) {
    var _size = size || 3, _delimiter = delimiter || ',';
    var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
    var reg = new RegExp(regText, 'g');
    return str.replace(reg, _delimiter);
}

console.log(formatText('1234asda567asd890', 4, '-'));

/**
 * 找出字符串中最长的单词
 * @param str
 * @param splitType
 */
function longestWord(str, splitType) {
    var _splitType = splitType || /\s+/g,
        _max = 0, _item = '';
    var strArr = str.split(_splitType);
    strArr.forEach(function (item) {
        if (_max < item.length) {
            _max = item.length;
            _item = item;
        }
    });
    return {el: _item, max: _max};
}

console.log(longestWord('Find|the|Longest|word|in|a|String','|'));