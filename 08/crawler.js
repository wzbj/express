var http = require('http');
var cheerio = require('cheerio')//类似jq的库;
var url = 'http://www.imooc.com/learn/348';

function filterChapter(html){
	var $ = cheerio.load(html);
	var chapters = $('.course-chapters .course-wrap');

	// [{
	// 	chapterTitle:'',
	// 	videos:[
	// 		title:'',
	// 		id:''
	// 	]
	// }]
	console.log(chapters.length);
	var courseData = [];
	chapters.each(function(item){

		var chapter = $(this);
		var chapterTitle = chapter.find('h3').text();
		var videos = chapter.find('.video');

		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		};
		// console.log(chapterData);
		videos.each(function(item){
			var video = $(this).find('li');
			var videoTitle = video.find('a').text();
			var id = video.find('a').attr('href').split('video/')[1];
			
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})
		courseData.push(chapterData);
		// console.log(courseData);
	})
	// console.log(courseData);
	return courseData;

}

function printCourseInfo(courseData){
	console.log(courseData);
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle  + '\n');

		item.videos.forEach(function(video){
			console.log('【'+video.id+'】'+video.title + '\n');
		})
	})
}

http.get(url,function(res){
	var html = '';
	res.on('data',function(data1){
		html += data1;
	})

	res.on('end',function(){
		// 信息过滤
		var courseData = filterChapter(html);
		// console.log(courseData);
		printCourseInfo(courseData);
	}).on('error',function(){
		console.log('error');
	})
})