import express from 'express';
const app = express();
const PORT = 8888;

function sayHiMiddelware(req,res,next){
    console.log("hi i am middelware 🙋🏽‍♂️")
    next();

}
// app.use(sayHiMiddelware);   //?global middleware

app.get("/",sayHiMiddelware,(req,res)=>{       //? specific middele ware
    res.send("hello guys")
})

app.get("/users",(req,res)=>{
    res.send("hello this is user page")
})





app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})