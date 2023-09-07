const Todo = require('../models/todoModel')
const logger = require('../utils/logger')

//create a new todo
const createTodo = async (req, res) => {
   const { todo } = req.body;

   await Todo.create({ todo })
      .then(() => {
         res.status(200).json({ success: true, msg: 'Todo Create Successful!', payload: null })
      })
      .catch((err) => {
         res.status(500).json({ success: false, msg: 'Todo Create Failed!', payload: null })
         logger.error(err.message);
      })
}

//get all todos
const getAllTodos = async (req, res) => {
   await Todo.find().sort({ createdAt: -1 })
      .then((todo) => {
         res.status(200).json({ success: true, msg: 'Todo Get Success', payload: todo })
      })
      .catch((err) => {
         res.status(500).json({ success: false, msg: 'Todo Create Failed!', payload: null })
         logger.error(err.message);
      })
}

//delete todo
const deleteTodo = async (req, res) => {
   const todoId = req.params.id;

   await Todo.findByIdAndDelete(todoId)
      .then(() => {
         res.status(200).json({ success: true, msg: 'Todo Delete Successfully', payload: null })
      })
      .catch((err) => {
         res.status(500).json({ success: false, msg: 'Todo Create Failed!', payload: null })
         logger.error(err.message);
      })
}


module.exports = { createTodo, getAllTodos, deleteTodo };