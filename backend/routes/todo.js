const express = require('express');
const router = express.Router();
const {createTodo} = require('../controllers/todoController')

//POST a new todos
router.post('/', createTodo);

module.exports = router;