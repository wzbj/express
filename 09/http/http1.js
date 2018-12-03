var http = require('http');
var server = http.createServer();

server.on('request',function(req,res){
	console.log('收到客户端的响应');
})

server.listen(3000,function(){
	console.log('服务已经启动了');
})