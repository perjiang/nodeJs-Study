const fs = require('fs')
const path = require('path')
const regDiv = /<span>[\s\S]*<\/span>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname,"index.html"),"utf-8",function(err,data){
   resolveCss(data)
})

function resolveCss(htmlStr){
    const r1 = regDiv.exec(htmlStr);
    // 对匹配出来的字符串进行处理
    console.log(r1)
}