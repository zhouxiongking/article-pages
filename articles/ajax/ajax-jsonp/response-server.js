var express = require('express');

var app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    // 是否可以携带cookie
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/getUserByStudentNo', function (req, res) {
    console.log('jsonp请求触发');
    var studentNo = req.query.studentNo;
    var callbackFn = req.query.callback;
    var result;
    if (+studentNo === 1001) {
        result = {
            studentNo: 1001,
            name: 'kingx1',
            age: 18
        };
    } else {
        result = {
            studentNo: 1002,
            name: 'kingx2',
            age: 20
        };
    }
    console.log(studentNo);
    var data = JSON.stringify(result);
    res.writeHead(200, {'Content-type': 'application/json'});

    // JSONP的返回数据格式
    // res.write(callbackFn + '(' + data + ')');
    res.write(data);
    res.end();
});


var server = app.listen(3000, function () {});