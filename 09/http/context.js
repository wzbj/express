// var pet = {
// 	words:'...',
// 	speak:function(){
// 		console.log(this.words);
// 		console.log(this===pet);
// 	}
// }

// pet.speak();

// function pet(words){
// 	this.words = words;
// 	console.log(this.words);
// 	console.log(this);
// }

var pet = {
	words:'...',
	speak:function(say){
		console.log(say + ' ' + this.words);
	}
}

var dog = {
	words:'wang'
}

pet.speak.call(dog,'Speak');