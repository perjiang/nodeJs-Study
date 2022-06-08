// 把index.html按照模块进行拆分
const fs = require('fs')
const path = require('path')
const cssPath = path.join(__dirname,"./clock/index.css")
const jsPath = path.join(__dirname,"./clock/index.js")
const htmlPath = path.join(__dirname,"./clock/index.html")

// 使用正则表达式  匹配内容
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
// 读取文件进行处理
fs.readFile(path.join(__dirname,"index.html"),"utf-8",function(err,data){
    if(err){
        return console.log("文件读取有误")
    }
    resolveCss(data)
    resolveJS(data)
    resloveHtml(data)
})

function resolveCss(htmlStr){
    const r1 = regStyle.exec(htmlStr);
    // 对匹配出来的字符串进行处理
    const newCss = r1[0].replace("<style>","").replace("</style>","");
    fs.writeFile(cssPath,newCss,"utf-8",function(err){
        if(err){
            return console.log("css 写入失败",err.message)
        }
    })
}

function resolveJS(htmlStr){
    const r1 = regScript.exec(htmlStr)
    const newJs = r1[0].replace("<script>","").replace("</script>","")
    fs.writeFile(jsPath,newJs,"utf-8",function(err){
        if(err){
            return console.log("js 写入失败",err.message)
        }
    })
}

function resloveHtml(htmlStr){
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">')
                        .replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(htmlPath,newHtml,"utf-8",function(err){
        if(err){
            return console.log("html 写入失败",err.message)
        }
    })
}