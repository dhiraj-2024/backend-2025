import {Router} from 'express'
const router=Router();
import { Logout,Login } from '../controller/auth.controller.js';


//? login route
router.post("/login",Login)

//? logout route
router.get("/logout",Logout)

export default router;