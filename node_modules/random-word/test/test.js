var R = require("..")
	,should = require("should");

describe("random-word",function(){
	it("#new",function(){
		var r = R();
		var r2 = new R();
		var r3 = new R('hello');
	});

	it("#add",function(){
		var r = R("abcd");	
		var self = r.add("efg");
		self._chars.should.equal("abcdefg");
		self.should.equal(r);
	  var word = self.random(3);
		word.should.have.length(3);
	})
})
