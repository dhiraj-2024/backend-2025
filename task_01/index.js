require ('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const server = express()


//MIDDELEWARE
// server.use(express.static("public"))
server.use(express.static(process.env.STATIC_FOLDER ));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(session({
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false  }
}))

server.get("/person",(req,res)=>{
    req.session.person ? req.session.person++  : req.session.person = 1
    res.send(req.session.person.toString())
})

server.get("/home", (request,response)=>{
    response.json({name:"dhiraj"})
})
// FRONTEND FORM DATA 
// localhost:8080/user  (hidden format)
server.post("/user",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
   })

// QUERRY METHOD DATA IS SENDING IN URL     
server.get("/user",(req,res)=>{
 let username = req.query.name;
 let age = req.query.age
 res.json({name:username,age})
})
// PARAMS METHOD  localhost:8080/user/
server.get("/users/:name/:age/:email",(req,res)=>{
console.log(req.params)
 res.send(req.params)
})


server.listen(process.env.PORT,()=>{
    console.log(`server is runnign on ${process.env.PORT}`)
})