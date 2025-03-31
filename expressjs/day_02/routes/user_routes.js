import { Router } from "express";

const userRouter= Router();


userRouter.get("/users",(req,res)=>{
    res.send(" user page")
})
userRouter.get("/post",(req,res)=>{
    res.send("post page")
})

userRouter.get("/profile",(req,res)=>{
    res.send("profile page")
})

export default userRouter;