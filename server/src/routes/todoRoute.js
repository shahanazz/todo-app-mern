import express from 'express';
const router = express.Router();

import {
    createTodo,
    getTodoList,
    updateTodo,
    removeTodo,
    viewTodoItem,
} from '../controllers/todoController.js';

router.get('/', getTodoList);          
router.get('/:id', viewTodoItem);         
router.post('/create-todos', createTodo);         
router.put('/:id', updateTodo);      
router.delete('/:id', removeTodo);    

export default router;