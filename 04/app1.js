'use strict';
const express = require('express');
const app = express();
const router = express.Router();


var userRepo = {
	'001':{name:'user001'},
	'002':{name:'user002'}
}

router.param('id',function(req,res,next,id){//在里面写数据库相关的逻辑
	let user = res.locals.user = userRepo[id];
	if(user){
		next();
	}else{
		res.send(404);
	}
})



router.get('/user/:id/',function(req,res){
	// res.send('helloword,user\'s id='+req.params.id);
	res.send(res.locals.user.name);//只返回结果
	

})

app.use('/',router);

app.listen(3000);