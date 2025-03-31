const http = require("http")
const PORT = 8080;

const myServer = http.createServer((request,response)=>{
    response.end("hello from server")
    console.log(request)
})

myServer.listen(PORT,()=>{
    console.log(`server is connected at port ${PORT}`)
})