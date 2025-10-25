import express from 'express' 
import { createTask, deleteTask, getTasks, updateTask } from '../Controller/Task.controller.js';


const router = express.Router();

router.post('/',createTask);  
router.get('/',getTasks);
router.put('/:id',updateTask);
router.put('/:id',deleteTask);


export default router 