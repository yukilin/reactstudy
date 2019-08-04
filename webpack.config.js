const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入在内存中自动生成index页面的插件
//创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src/index.html'),//源文件
    filename: 'index.html' //生成内存中首页的名字
})

module.exports={
    mode:'development',
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[{
            test:/\.js|jsx$/,
            use:'babel-loader',
            exclude:/node_modules/
        },{
            test:/\.css$/,
            use:['style-loader','css-loader?modules&localIdentName=[path][name] - [local] - [hash:5]'] //可以在css-loader之后通过追加参数，叫modules, 表示为普通的css应用模块化, localIdentName:自定义样式生成的类名格式
        }]
    },
    resolve:{
        extensions: ['.js','.jsx','jsons'],//表示这几个文件的后缀名，可以省略不写，顺序也是重要的
        alias:{
            '@':path.join(__dirname,'./src')//@表示项目根目录src的这一层路径
        }
    }
}