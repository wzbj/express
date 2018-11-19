

// 创建数组
const repos = require('./data');
const fs = require('fs');
// const data = require('./data');

// console.log(repos);


module.exports={
	store(){//持久化的方法
		fs.writeFileSync(__dirname+'/data.json',JSON.stringify(repos));
	},
	get(index){
		return repos[index];
	},
	get list(){
		return repos;
	},
	add(article){
		repos.push(article);
		this.store();
	},
	del(index){
		repos.splice(index,1);
		this.store();
	},
	update(index,newArticle){
		console.log(newArticle);
		repos.splice(index,1,newArticle);
		console.log(repos);
		repos[index] = newArticle;
		console.log(repos);
		this.store();
	}
}