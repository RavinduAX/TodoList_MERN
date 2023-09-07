const express = require('express');
const router = express.Router();
const {createTodo, getAllTodos, deleteTodo} = require('../controllers/todoController')

//POST a new todos
router.post('/', createTodo);

//GET all todos
router.get('/', getAllTodos);

//DELETE a todo
router.delete('/:id', deleteTodo)

module.exports = router;