const path = require('path')

const dir = __dirname + '/file/hello.txt'
const fileName = path.basename(dir)
console.log(fileName)
console.log("===============")
const baseDir = __dirname;
const dirs = [baseDir,'file',fileName]
console.log(dirs)
const fullPath = path.join(baseDir,'file',fileName)
console.log("===============")
console.log(fullPath)