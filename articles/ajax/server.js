var express = require('express');
var bodyParser = require('body-parser');
// var multipart = require('connect-multiparty');
// var formidable = require('formidable');

var app = express();
// var multipleMiddleware = multipart();

app.use(bodyParser());

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/form-get-post.html');
});

app.get('/getUser', function (req, res) {
     console.log(req.query);
});



app.post('/saveUser', function (req, res) {
    // 请求体中的参数
    console.log(req.body);
    // 请求url中的参数
    console.log(req.query);

    res.writeHead(200, {'Content-type' : 'application/json'});

    var responseObj = {
        code: 200,
        message: '执行成功'
    };
    // throw new Error('服务端异常');

    res.write(JSON.stringify(responseObj));

    // res.write('500ms');
    //
    // res.write('1000ms');
    //
    // res.write('1500ms');
    //
    // res.write('2000ms');
    //
    // setTimeout(function () {
    //     res.write('500ms');
    // }, 500);
    //
    // setTimeout(function () {
    //     res.write('1000ms');
    // }, 1000);
    //
    // setTimeout(function () {
    //     res.write('1500ms');
    // }, 1500);
    //
    // setTimeout(function () {
    //     res.write('2000ms');
    // }, 2000);
    //
    // setTimeout(function () {
    //     res.end('end');
    // }, 2500);
    res.end('end');
});

var server = app.listen(3000, function () {});