import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'


const app = express();
const PORT = 8080;

//? middlewares
app.use(express.json())
app.use(cookieParser())

//? creating a session 
app.use(session({
    secret:"somthing-secreat",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24, // max age is 24 hours
        secure:false,
        httpOnly:true
    }
}))

//? home routes
app.get("/",(req,res)=>{
    res.status(200).send("Hello this is home page ")
})

//? auth routes 
app.use("/auth", authRoutes)
//? task routes
app.use("/task", taskRoutes)
app.listen(PORT,(req,res)=>{
    console.log(`server is running on http://localhost:${PORT}`)
})