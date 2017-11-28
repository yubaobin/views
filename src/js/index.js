require('styles/index');
$(function(){
	// $.ajax({
	// 	type: 'get',
	// 	dataType: 'jsonp',
	// 	url: 'https://cnodejs.org/api/v1/topics',
	// 	data: {
	// 		page: 0,
	// 		limit: 3,
	// 	},
	// 	jsonp: 'jsonpCallback',
	// 	success: function(data){
	// 		console.log(data); //报错，后台没有处理jsonp的请求
	// 	}
	// })

	
	$('.items').on('click',function(e){
		console.log('items');
	})
	$('.items .down').on('click',function(e){
		console.log('down');
	})
})