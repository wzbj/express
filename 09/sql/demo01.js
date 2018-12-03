var mysql = require('mysql');
var pool=mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: 'admin',
 port: '3306',
 database: 'login',
 // 最大连接数，默认为10
 connectionLimit: 10,
})
pool.getConnection(function(err,connection){
 if(err){
 console.log(err);
 return;
 }
 connection.query('SELECT 1 + 1 AS solution',function(err,result){
 connection.release();
 if(err){
 console.log(err);
 return;
 }
 console.log('The solution is: ', result[0].solution);
 })
})