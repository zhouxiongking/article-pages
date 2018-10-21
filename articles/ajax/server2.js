var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getUser', function (req, res) {
    console.log(req.query);
});

app.post('/saveUser', function (req, res) {
    var responseObj = {
        code: 200,
        message: '执行成功'
    };
    res.write(JSON.stringify(responseObj));
    res.end('end');
});

var server = app.listen(3000, function () {});