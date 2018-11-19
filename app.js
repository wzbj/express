'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var PW = require("png-word");
var pw = PW(PW.GRAY);
var r = require("random-word")("abcdefghigklmnopqrst0123456789");

var db = require('./db');//如果有db.js和db.json优先导入db.js文件


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
	secret:'keyboard cat'
}))

// refresh png number
app.get('/refresh',function(req,res){
	try{

		var numtxt = req.session.validat_num = r.random(4);
		pw.createPNG(numtxt,function(pngnum){
			res.send(pngnum);
		})
	}catch(e){
		console.log(r.random(4));
		console.log(e);
	}
})



// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.get('/',function(req,res){
	// res.send({test:133233});
	res.render('index',{list:db.list,logined:req.session.logined,validat_num:req.session.validat_num});
})

app.post('/add',function(req,res){
	db.add({title:req.body.title});
	res.redirect('/');
})

app.get('/del',function(req,res){
	let index = req.query.index;
	db.del(index);
	res.redirect('/');//重定向页面地址
})

app.get('/get/:index',function(req,res){
	var index = req.params.index;
	var article=db.get(index);
	res.send(article);
	// console.log(index);
})

app.post('/update/',function(req,res){
	var index = req.body.index;
	var title = req.body.title;
	console.log('title:'+title);
	db.update(index,{title});
	// res.send();
	res.redirect('/');
	// console.log(index);
})

app.post('/login',function(req,res){
	let loginname = req.body.loginname;
	let password = req.body.password;
	if(loginname === 'leo' && password ==='123'){
		req.session.logined = true;
		res.send("success");
	}else{
		res.send("error");
	}
})

app.get('/logout',function(req,res){
	res.session.logined = false;
	res.send();
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
