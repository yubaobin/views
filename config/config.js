const path = require('path');
const pages = [
	{name: 'index', title: 'index',path: path.resolve(__dirname,'../src/views/index.html')},
	{name: 'page', title: 'page',path: path.resolve(__dirname,'../src/views/page.html')},
]
const pagejs = [
	path.resolve(__dirname,'../src/js/mobile'),
	path.resolve(__dirname,'../src/js/index'),
	path.resolve(__dirname,'../src/js/page'),
]
module.exports = {
	pages: pages,
	pagejs: pagejs
}