const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const myConfig = require('./config/config');
const appPath = path.resolve(__dirname,'./src/');
const jsPath = path.resolve(__dirname,'./src/js/');

const port = 8085;
let config = {
	entry: {
		mobile: jsPath + "/mobile",
		app: myConfig.pagejs
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'
	},
	plugins: [
		//重复的代码打包
		new webpack.optimize.CommonsChunkPlugin({
	      name: "commons",
	      filename: "commons.js",
	      minChunks: 2,
	  }),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({ //全局配置加载
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery"
    }),
	],
	module: {
		rules:[{
			test: /\.js$/,
			include: appPath,
	        use: [{
	          loader: "babel-loader",
	          options: { presets: ["es2015"] }
	        }],
		},{
	        test: /\.scss$/,
	        loader: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          loader: ["css-loader","sass-loader"]
	        })
	    },{
	        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	        use: [{
	        	loader:'url-loader',
	        	options: {limit: 10000}
	        }]
	     }]
	},
	resolve: {
		//自动扩展文件后缀，在使用require时省略后缀名
        extensions: ['.js', '.json', '.jsx', '.vue','.scss'],
        alias: {
        	'styles': path.resolve(__dirname,'./src/styles/'),
        	'view': path.resolve(__dirname,'./src/views'),
        	'image': path.resolve(__dirname,'./src/images'),
        }
	},
	// 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port:port
    }
}

//生成HTML模板
myConfig.pages.forEach(function(pathname) {
    var conf = {
    	title: pathname.name,
        filename: pathname.name + '.html', //生成的html存放路径,相对于path
        template: pathname.path, //html模板路径
        inject: 'body', //允许插件修改哪些内容,包括head与body
        hash: false, //是否添加hash值
        minify: { //压缩HTML文件
            removeComments: true,//移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    };
    config.plugins.push(new HtmlWebpackPlugin(conf));
});
module.exports = config