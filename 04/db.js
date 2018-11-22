'use strict';
var userRepo = {
	'001':{name:'user001'},
	'002':{name:'user002'}
}

module.exports = {
	getUserById(id){
		return function(req,res,next){
			let id = req.params.id;
			let user = userRepo[id];
			if(user){
				req.user = user;
				next();
			}else{
				res.send(404);
			}
		}
	},
	indexPageInfo(){
		return function(req,res,next){
			
		}
	}
}