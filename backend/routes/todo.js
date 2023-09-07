const express = require('express');
const router = express.Router();
const {createTodo, getAllTodos, deleteTodo, updateTodo} = require('../controllers/todoController')

//POST a new todos
router.post('/', createTodo);

//GET all todos
router.get('/', getAllTodos);

//DELETE a todo
router.delete('/:id', deleteTodo)

//PUT a todo
router.put('/:id', updateTodo)

module.exports = router;