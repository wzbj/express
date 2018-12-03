var mysql = require('mysql');
// 连接数据库的配置
var connection = mysql.createConnection({
 // 主机名称，一般是本机
 host: 'localhost',
 // 数据库的端口号，如果不设置，默认是3306
 port: 3306,
 // 创建数据库时设置用户名
 user: 'root',
 // 创建数据库时设置的密码
 password: 'admin',
 // 创建的数据库
 database: 'login'
});

module.exports = connection;