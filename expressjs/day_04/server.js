import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express();
const PORT = 5252;

app.use(session(
    {
        secret:"mysecrate",
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge : 1000*60*60*24   //! max age is 1 day
        }
    }
))
app.use(cookieParser("dhiraj"))



app.get("/",(req,res)=>{
    console.log(req.session);
    console.log(req.session.id);
    res.send("this is home page")
})

app.get("/login",(req,res)=>{

    req.session.user ={
        name:"pandu",
        age: 22,
        branch: "csd"
    }
    res.status(200).send(`${req.session.user.name} has logedin with system`)
})

app.listen(PORT,(req,res)=>{
    console.log(`server is runnig on http://localhost:${PORT}`);
})