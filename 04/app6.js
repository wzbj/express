'use strict';

const express = require('express');
const app = express();
const serveStatic = require('serve-static');

app.use(serveStatic('public'));


var version = 100;

function freshHandle(req,res,next){
	res.set('etag',version);
	if(req.fresh){
		res.send();
	}else{
		next();
	}
}


app.get('/test',freshHandle,function(req,res){
	res.send('version'+version);
})

app.get('/update',function(req,res){
	++version;
	res.send();
})


app.get('/ajaxTest',function(req,res)}{
	console.log('is xhr'+req.xhr);
	res.send();
})


app.listen(4000);