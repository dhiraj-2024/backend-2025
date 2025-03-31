import express from 'express';
import data from './data/data.js ';
const app = express();
app.use(express.json());
const PORT = 8181;

//! 1. GET request (it is for fetching data from server)
app.get("/",(req,res)=>{
    res.status(200).send("hello world")
})
 
//? INDUSTRY STANDARDS 
app.get("/api/v1/users", (req, res) => {
    const { name } = req.query; 
    if (name) {
        const userData = data.filter((user) => {
            return user.name === name;
        });

        return res.status(200).send(userData); 
    }
    res.status(200).send(data); 
});

//? params
app.get("/api/v1/users/:id", (req, res) => {
    const id = parseInt(req.params.id); // Correctly extract and parse the ID
    const user = data.find(user => user.id === id); // Use .find() instead of .filter()
    if (!user) {
                 return res.status(404).json({ message: "User not found" }); // Handle case where user is not found
               }
    res.status(200).json(user); // Send the found user
});


//! 2. POST request (sending data to the server)

app.post("/api/v1/users",(req,res)=>{
    const{name, displayname}=req.body;
    const newUser={
        id: data.length + 1,
        name,
        displayname
    }
    data.push(newUser);
    res.status(201).send({
        message:"user created",
        data:newUser
    })
})

//! 3. PUT request (update all fields)
app.put("/api/v1/users/:id",(req,res)=>{
   const{body,params:{id}} = req;
   const parsedID = parseInt(id);
   const userIndex = data.findIndex((user)=>user.id === parsedID);
   if(userIndex === -1){
    res.status(404).send("user not found")
   }
   data[userIndex]={
    id:parsedID,
     ...body
   }
       res.status(201).send({
        message:"user updated",
        data:data[userIndex]
       })
})
//! 4. PATCH request (update specific fields)
app.patch("/api/v1/users/:id",(req,res)=>{
    const{body,params:{id}} = req;
    const parsedID = parseInt(id);
    const userIndex = data.findIndex((user)=>user.id === parsedID);
    if(userIndex === -1){
     res.status(404).send("user not found")
    }
    data[userIndex]={
        ...data[userIndex],
     ...body,
     
    }
        res.status(201).send({
         message:"user updated",
         data:data[userIndex]
        })
 })

app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`)
})