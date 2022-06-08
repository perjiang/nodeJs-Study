// 导入fs文件系统模块
const fs = require('fs')
// 调用fs.wirteFile() 写入文件
// 参数1: 文件路径;  参数2:要写入的内容;  参数3:编码<可选>  参数4: 回调
fs.writeFile('./file/write.txt','this is a file33333 \n','utf-8',function(err){
   if(err){
       return console.log("文件写入失败")
   }
       console.log("文件写入成功")
})


