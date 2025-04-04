import {Router} from 'express'
const router=Router();
import { getAllTasks,createTasks,updateTasks,deleteTasks } from '../controller/task.controller.js';


router.get("/",authMiddleware,getAllTasks);
router.post("/",authMiddleware,createTasks);
router.put("/:id",authMiddleware,updateTasks);
router.delete("/",authMiddleware,deleteTasks);

export default router;