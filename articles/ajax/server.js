var express = require('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
// var formidable = require('formidable');

var app = express();
var multipleMiddleware = multipart();

app.use(bodyParser());

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/jQuery-formData.html');
});

app.post('/saveUser', multipleMiddleware, function (req, res) {
    console.log(req.body);

    var responseObj = {
        code: 200,
        message: '执行成功'
    };
    res.send(responseObj);
});

var server = app.listen(3000, function () {});