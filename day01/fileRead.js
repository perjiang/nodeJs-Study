// 1. 导入fs模块，用来操作文件
const fs = require('fs')
// fs.readFile()读取文件
// 参数1:文件路径;  参数2:读取文件的字符编码;  参数3:读取之后的回调函数 
fs.readFile('./file/hello.txt','utf-8',function(err,dataStr){
    if(err == null){
        console.log("文件读取成功")
        console.log("文件内容是:"+dataStr)
    }else{
        console.log("文件读取失败")
        console.log("失败原因是:"+err)
    }
})