var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var connection = require('./connc');

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.connect();
		connection.query('SELECT 1 + 2 AS solution', function(err, rows, fields) {
	 if (err) throw err;
	 console.log(rows);
	 console.log('The solution is: ', rows[0].solution);
	});
		connection.end();
  res.send('user api');
});


router.get('/getUserInfo',function(req,res,next){
	var user = new User();
	var params = URL.parse(req.url,true).query;

	if(params.id == '1'){
		user.name = "lign";
		user.age = "1";
		user.city = "北京市";
	}else{
		user.name = "spting";
		user.age = "1";
		user.city = "杭州市";
	}

	var response = {status:200,data:user};
	res.send(JSON.stringify(response));



})

router.post('/getTest',urlencodedParser,function(req,res,next){
	var user = new User();
	console.log(req.body);
	if(!req.body){
		return res.sendStatus(400);
	}else if(req.body.id == '1'){
		user.name = "lign";
		user.age = "1";
		user.city = "北京市";
	}
	var response = {status:200,data:user};
	// res.send(JSON.stringify(response));
	res.send(response);
	// res.json(response);

})

router.post('/getInter',urlencodedParser,function(req,res,next){
	// connection.connect();
	connection.query('SELECT * from message',function(err,result){
		var response = {status:200,msg:'success',data:result};
		res.send(response);
	})
	// connection.end();
})



module.exports = router;
