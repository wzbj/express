'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded());//通过表单提交的可以吧接受的信息转换成json
app.use(bodyParser.json());//通过ajax提交把接受信息转化成json
app.use(bodyParser.text());//不常用
app.use(bodyParser.raw());//不常用


app.post('/submit',function(req,res){
	res.send(req.body)
})

app.listen(3000);