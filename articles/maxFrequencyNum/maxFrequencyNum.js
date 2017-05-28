var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 10, 10, 10, 10, 10];

/*-------------方式1--------------*/
function findMost(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    // 遍历 res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为:' + maxEle + ', 出现次数为:' + maxNum;
}

console.log(findMost(arr));


/*--------------方法2-------------*/
function findMost2(arr) {

    var h = {};
    var maxNum = 0;
    var maxEle = null;
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        h[a] === undefined ? h[a] = 1 : (h[a]++);
        if (h[a] > maxNum) {
            maxEle = a;
            maxNum = h[a];
        }
    }
    return '出现次数最多的元素为:' + maxEle + ', 出现次数为:' + maxNum;
}

console.log(findMost2(arr));

/*--------------方法3-------------*/
function findMost3(arr) {
    var maxEle;
    var maxNum = 1;
    var obj = arr.reduce(function (p, k) {
        p[k] ? p[k]++ : p[k] = 1;

        if (p[k] > maxNum) {
            maxEle = k;
            maxNum++;
        }

        return p;

    }, {});

    return '次数最多的元素为:' + maxEle + ', 次数为:' + obj[maxEle];
}

console.log(findMost3(arr));

/*--------------方法4-------------*/
function findMost4(arr) {
    var obj = {};
    var maxEle;
    var maxNum = 1;
    arr.join('').replace(/(\w)/g, function(word, p){
        obj[p[0]] ? obj[p[0]] += 1 : obj[p[0]] = 1;
        if (obj[p[0]] > maxNum) {
            maxEle = p[0];
            maxNum++;
        }
    });
    return '次数最多的元素为:' + maxEle + ', 次数为:' + obj[maxEle];
}

var arr2 = ['b', 'c', 'e', 'c', 'd', 'g', 'a', 'c', 'a'];
console.log(findMost4(arr2));







