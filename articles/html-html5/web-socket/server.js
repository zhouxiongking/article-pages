var http = require('http');
var fs = require('fs');
var ws = require('nodejs-websocket');

// 创建一个node server,用于返回页面信息
http.createServer(function (req, res) {
    fs.readFile(__dirname + '/websocket.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('error');
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8000);

// 创建一个websocket server
var wsServer = ws.createServer(function (connection) {
    // 监听客户端发送的内容
    connection.on('text', function (data) {
        sendInfo(data);
    });
    // 监听失败事件
    connection.on('error', function (evt) {
        console.log('服务器端异常');
    });

    connection.on('close', function (evt) {
        console.log('服务端连接关闭,关闭原因是:' + evt);
    });
}).listen(9000);


function sendInfo(data) {
    wsServer.connections.forEach(function (connection) {
        var obj = JSON.parse(data);
        var date = new Date();
        obj.datetime = date.format('yyyy-MM-dd HH:mm:ss');
        connection.sendText(JSON.stringify(obj));
    });
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};







