const fs = require("fs")
const os = require("os")

// sync {blocking the code } \\ async {non blocking code}

// *write 
// fs.writeFileSync("../test.txt","hello this is sync code file testing ")
// fs.writeFile("./test.txt" , "hello this is async code file testing demo", (err)=>{
//     console.log(err)
// })


// *read
// const res = fs.readFileSync("../test.txt","utf-8")
// console.log(res)

// fs.readFile("../test.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// })


// *update // append
// fs.appendFileSync("../test.txt",new Date().toDateString())

// fs.appendFile("../text.txt",`hello world this is dhiraj logged in at ${new Date().toDateString()} \n`,(err,res)=>{
//     if(err){
//         console.log(err)
    
//     }
//     else{
//         console.log(res)
//     }
// })




// fs.cpSync('../test.txt ','./text.txt');
// console.log("file copy successfully ")


// mkdir 
// fs.mkdirSync('newDir');
// console.log("new Dir created Successfully")

// stats 
// const res = fs.statSync('../test.txt')
// console.log(res)

// console.log(os.cpus().length)