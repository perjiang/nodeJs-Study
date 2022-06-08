const path = require('path')
// path.basename  能在一个路径中获取到文件名
const dir = __dirname + '/file/hello.txt'
const fileName = path.basename(dir)
console.log(fileName)
// path.join 对多个路径进行拼接
const fullPath = path.join(__dirname,'file',fileName)
console.log("===============")
console.log(fullPath)
console.log("===============")
// 获取文件的扩展名
const extName = path.extname(fullPath);
console.log(extName)