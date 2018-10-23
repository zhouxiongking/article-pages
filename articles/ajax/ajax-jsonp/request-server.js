var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/cross-domain-server.html');
});

var server = app.listen(4000, function () {});