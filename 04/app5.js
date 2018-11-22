'use strict';

const express = require('express');
const app = express();

var version = 100;

app.get('/test',function(req,res){
	// console.log(req.headers);
	// req.fresh;//true
	// req.stale;//false

	res.set('etag',version);
	if(req.fresh){
		res.send();
	}else{
		res.send('version'+version);
	}

	// res.send()
});

app.get('/update',function(req,res){
	++version;
	res.send();
})


app.listen(4000);