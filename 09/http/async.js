
var c = 0;
function print(){
	console.log(c);
}

function puls(callback){
	setTimeout(function(){
		c+=1;
		callback();
	},1000)

}

puls(print);
