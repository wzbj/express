'use strict';

const express = require('express');
const app = express();
const router = express.Router();

router.get('/test',function(req,res){
	res.send('sub router test');
})

app.use('/myrouter',router);//子路由是相对于父路径而言的

app.use(function(req,res,next){
	req.myname = 'leo'; 
	next();
})

app.get('/',function(req,res){
	res.send('hello word'+req.myname);
})

app.get('/test',function(req,res){
	res.send('hello word1'+req.myname);
})

// 匹配所有的动词方法,get,post
app.all('/allpath',function(req,res){
	res.send('all handle');

})


app.listen(4000);