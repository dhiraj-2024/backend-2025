import express from 'express'
import cookieParser from 'cookie-parser'


const app = express();
const PORT = 8080;


app.get("/",(req,res)=>{
    res.status(200).send("Hello this is home page ")
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on http://localhost:${PORT}`)
})