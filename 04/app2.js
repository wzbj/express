'use strict';
const app = require('express')();

const dbs = require('./db');

// app.get('/',function(req,res,next){
// 	console.log('001');
// 	next();
// })

// app.get('/',function(req,res,next){
// 	console.log('002');
// 	next();
// })


// app.get('/',function(req,res){
// 	res.send('hello');
// 	console.log('003');
// })

/*等同于*/
// app.get('/',
// 	function(req,res,next){
// 		console.log('001');
// 		next();
// 	},
// 	function(req,res,next){
// 		console.log('003');
// 		next();
// 	},function(req,res,next){
// 		console.log('004');
// 		res.send('hello word');
// 	})

//*数据库路由相分离*/

// app.get('/',dbs.indexPageInfo(''),function(req,res){
// 	res.render('');
// })

app.get('/user/:id',dbs.getUserById(),function(req,res){
	res.send(req.user);
})



app.listen(4000);