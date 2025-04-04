
//? controller for login 
export const Login =(req,res)=>{
     const {username} = req.body;
     if(!username){
        return res.status(400).json({error:"username is required"})
     }
     req.session.user={username};
     res.cookie("username",username,{httpOnly:true,maxAge:1000*60*60*24})
     res.json({message:"login successful",username})
}

//? controller for logout
 export const Logout = (req,res)=>{
     res.clearCookie("username");
     req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({error:" error login out"})
        }
        res.json({message:"Logout successful"})
     })
}


