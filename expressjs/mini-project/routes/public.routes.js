import express from 'express';
import { generateToken } from '../utils/token-utils.js';
const router = express.Router();

//Gnereate token

router.get("/generate-token",(req,res)=>{
    const token = generateToken();

    res.status(200).send({
        message:"save it for fuature",
        tocken: token
    })
})

router.get("/",(req,res)=>{
    res.status(200).send({
        message:"welcome to the home page",
         
    })
})

export default router;