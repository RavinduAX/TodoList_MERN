const express = require('express');
const router = express.Router();
const {createTodo, getAllTodos} = require('../controllers/todoController')

//POST a new todos
router.post('/', createTodo);

//GET all todos
router.get('/', getAllTodos);

module.exports = router;