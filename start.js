var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Testing Baseurl!');
});

app.get('/json', function (req, res) {
    res.send({ msg: 'JSON Response' });
});

app.get('/myDetails', function (req, res) {
    const jsonObject = {
        msg: 'JSON Response',
        name: "Deep",
        currentTime: (new Date().toISOString())
    }
    res.send(jsonObject);
});


app.post('/post', function (req, res) {
    var data = req.body;
    console.log(data);
    res.send({ received: data });
});

var server = app.listen(3000, function () { });

