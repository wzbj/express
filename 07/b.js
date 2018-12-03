var app = {
    name: 'app',
    version: '1.0.0',
    sayName: function(name){
    	console.log(this);
        console.log(name);
    }
}
module.exports = app;