import express from 'express';
import userRouter from './routes/user_routes.js';
const app = express();
const PORT = 8888;

// middleware
app.use("/api/v1",userRouter)

app.get("/",(req,res)=>{      
    res.send("hello guys")
})






app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})