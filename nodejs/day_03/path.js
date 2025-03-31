const path = require("path")

console.log("FILENAME:",__filename)
console.log("DIRNAME:",__dirname)


// 1 : joins 

const filePath = path.join("folder","student","details.txt");
console.log(filePath)

const parsedDataPath=path.parse(filePath)
const resolved = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirName = path.dirname(filePath)

console.log({
    parsedDataPath,
    resolved,
    extname,
    basename,
    dirName

})