'use strict';
// https://github.com/expressjs/multer
const express = require('express');
const multer = require('multer');

const app = express();

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'myfiles2')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

var storage = multer.memoryStorage();
var fileFilter = function(req,file,cb){
	if(file.mimetype !== 'image/jpeg'){
		cb(new Error('错乱'),false);
	}else{
		cb(null,true);
	}
};


var upload = multer({ storage: storage ,fileFilter})

// const upload = multer({ dest: 'myfiles' });

app.use(express.static('public'));
// app.use(upload.single('myfile'));
// app.use(upload.array('myfile',1));
app.use(upload.fields([{name:'myfile',maxCount:2},{name:'myfile2',maxCount:1}]));

function myMiddle(req,res,next){
	next(new Error("我真的错乱"));
}
app.get('/testone',myMiddle,function(req,res){

})


app.get('/test',function(req,res){
	myMiddle(req,res,function(err){
		if(err){
			res.send('wo cuo le');
		}
	})
})

app.post('/upload', function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(1111111111);
  console.log(req.body);
  // console.log(req.file);//单个文件
  console.log(req.files);//多个文件
  res.redirect('/');
})


// 做一个公用错误处理器
// app.use(function(err,req,res,next){
// 	console.log(err);
// 	res.send('errrrrrr');
// })






app.listen(4000);