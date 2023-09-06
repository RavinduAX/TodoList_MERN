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


module.exports = { createTodo };