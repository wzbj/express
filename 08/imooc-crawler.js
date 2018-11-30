var http = require('http');
var url = 'http://www.imooc.com/learn/348';
http.get(url,function(res){
	var html = '';
	res.on('data',function(data1){
		html += data1;
	})

	res.on('end',function(){
		console.log(html);
	}).on('error',function(){
		console.log('error');
	})
})