const http = require('http')
const fs = require('fs')


const server = http.createServer((req , res)=>{

    //! 1. Downloading files in a bad way ❌
    //     const file = fs.readFileSync('bigfile.txt')
    //    res.end(file)
    
    //* 2.Downloading files in a good  way ✅
    // const readableStream = fs.createReadStream('bigfile.txt')
    // readableStream.pipe(res);
    // res.end()



})

server.listen(8080,()=>{
    console.log("server is running on port 🔥 , 8080")
})