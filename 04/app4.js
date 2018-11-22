// 路由的路径模式

'use strict';
const app = require('express')();

app.get('/abcd',function(req,res){
	res.send('hello word');
})

app.get('/1/abc?d',function(req,res){
	res.send('hello word one');
})


app.get('/2/abc+d',function(req,res){
	res.send('hello word two');
})

app.get(/\/6\/ab[1,3]cd/,function(req,res){
	res.send('hello word six');
	console.log(111111);
})

app.get(['/8/abc+d','/7/abc?d'],function(req,res){
	res.send('hello word seven');
	console.log(222222222);
})



app.listen(4000);
