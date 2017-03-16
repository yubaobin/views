const path = require('path');
const pages = [
	{name: 'index', title: 'index',path: path.resolve(__dirname,'../src/views/index.html')},
	{name: 'page', title: 'page',path: path.resolve(__dirname,'../src/views/page.html')},
	{name: 'page2', title: 'page2',path: path.resolve(__dirname,'../src/views/page2.html')},
	{name: 'page3', title: 'page3',path: path.resolve(__dirname,'../src/views/page3.html')},
	{name: '3Dpage', title: '3Dpage',path: path.resolve(__dirname,'../src/views/3Dpage.html')},
	{name: 'flex', title: 'flex',path: path.resolve(__dirname,'../src/views/flex.html')},
]
const pagejs = [
	path.resolve(__dirname,'../src/js/index'),
	path.resolve(__dirname,'../src/js/page'),
	path.resolve(__dirname,'../src/js/page2'),
	path.resolve(__dirname,'../src/js/page3'),
	path.resolve(__dirname,'../src/js/3Dpage'),
	path.resolve(__dirname,'../src/js/flex'),
]
module.exports = {
	pages: pages,
	pagejs: pagejs
}


