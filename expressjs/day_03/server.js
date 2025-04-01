import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 5050;

app.use(cookieParser())
app.get("/", (req,res)=>{

    res.cookie('name',"express",{
        maxAge:1000 * 60 * 60
    });
    res.status(200).send("hello this is home page ");
})

app.get("/product", (req,res)=>{
    console.log('Cookies: ', req.cookies)

    if(req.cookies.name && req.cookies.name === "express")
    
       { res.status(200).send({
            id:"1",
            name:"fan",
            category:"smart fan"
        })
    }
     
        res.status(403).send("you are not authorized to view this page")
    
   
})

app.listen(port,(req,res)=>{
    console.log(`server is running on http://localhost:${port} 🔥`)
})