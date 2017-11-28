require('styles/page2');
require('./swiper-3.3.1.min.js');

$(function(){
	var swiper = new Swiper('.swiper-container', { pagination: '.pagetion',autoplay:2000,loop:true });
})