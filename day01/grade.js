const fs = require("fs")
fs.readFile('./file/成绩.txt','utf-8',function(err,data){
    if(err){  // 如果err为真 说明发生了错误
        return console.log("读取文件失败")
    }
    // 使用空格分隔字符串为字符串数组
    const old = data.split(" ")
    const news = []
    old.forEach(item =>{
        news.push(item.replace("=",":"))
    })
    // 把格式化的数据放入文件
    const grade = news.join("\r\n")
    fs.writeFile('./file/成绩ok.txt',grade,"utf-8",function(err){
        if(err){
            return console.log("文件整理失败")
        }
    })
    console.log("文件整理完成")
})