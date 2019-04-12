/**
 * 获取localStorage最大容量
 */
(function () {
    if (!window.localStorage) {
        console.log('当前浏览器不支持localStorage!')
    }
    var test = '0123456789';
    // 将数据处理成10KB大小
    var add = function (num) {
        num += num;
        if (num.length == 10240) {
            test = num;
            return;
        }
        add(num);
    };
    add(test);

    var sum = test;
    // 利用定时器不停的增加localStorage的大小,直到抛出异常
    var show = setInterval(function () {
        sum += test;
        try {
            window.localStorage.removeItem('test');
            window.localStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        } catch (e) {
            console.log(sum.length / 1024 + 'KB超出最大限制');
            // 抛出异常后,清除定时器
            clearInterval(show);
        }
    }, 0.1);
})();

/**
 * 获取localStorage剩余容量
 */
(function () {

    // 通过上面的方法获取
    var maxCapacity;

    if (!window.localStorage) {
        console.log('浏览器不支持localStorage');
    }
    var size = 0;
    for (item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length;
        }
    }

    // 剩余容量
    var residueCapacity = (maxCapacity - (size / 1024).toFixed(2) + 'KB')
    console.log('当前localStorage剩余容量为' + residueCapacity);
})();