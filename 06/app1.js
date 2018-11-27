'use strict';

const express = require('express');

const app = express();

app.get('/download',function(req,res){
	res.download('readme.txt');
})

// 返回文本信息
app.get('/test',function(req,res){
	res.send('testttttttttttt');
})

app.get('/json',function(req,res){
	res.send({name:'jjjjjjjjjj'});
})

app.get('/redirect',function(){
	res.redirect('http://www.baidu.com');
})

app.get('/send',function(req,res){
	// res.send({name:'leo'});
	res.send(new Buffer('jjjjj'));
})

app.listen(4000);