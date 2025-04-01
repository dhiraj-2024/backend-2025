import express from 'express';
const router = express.Router();

// dashboard (access tocken)

router.get("/dashboard",(req,res)=>{
    res.status(200).send({
        message:"welcome to dashboard"
    })
})
export default router;