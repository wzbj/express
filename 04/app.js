'use strict';
const express = require('express');
const app = express();
const router = express.Router();

/*router.param('id',function(req,res,next,value){//验证参数
	// if(id !== '001'){
	// 	res.send(404);
	// }else{
	// 	next();
	// }
	console.log('value',value);
	next();
})*/

router.param(function(param,value){//验证参数
	console.log(param,value);
	switch(param){
		case 'id':
			return function(req,res,next,id){
				console.log('id:'+id);
				next();
			};
			break;
		case 'name':
			return function(req,res,next,name){
				console.log('name:'+name);
				next();
			}
			break;
			
	}
})

router.param('id','100');
router.param('name','leo');


router.get('/user/:id/:name',function(req,res){
	// res.send('helloword,user\'s id='+req.params.id);
	res.send(
		`user's name = ${req.params.name}
		user's id = ${req.params.id}
		`
	)

})

app.use('/',router);

app.listen(3000);