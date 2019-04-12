/**
 * Created by zhouxiong on 2019/3/28.
 */

for (var i = 0; i < 100000; i++) {
    console.log(i);
}


function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

/**
 * 动态脚本
 * @param url 脚本url
 * @param callback 执行的回调函数,可以用于加载后续有依赖的文件
 */
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javaScript";
    // IE支持onreadystatechange
    if (script.readyState) {
        // 监听脚本状态的变化
        script.onreadystatechange = function () {
            if (script.readyState == "loaded"
                || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        // safari、chrome、opera支持onload
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.body.appendChild(script);
}
