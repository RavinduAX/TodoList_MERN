import React, { useState } from 'react'
import axios from 'axios'

const TodoEdit = ({ todo, getAllTodos, setEdit }) => {
   const [text, setText] = useState('')
   
   //edit todo
   const handleEditClick = (e, id) => {
      e.preventDefault();
      const updateTodo = {'todo': text}
      axios.put(`http://localhost:5000/api/v1/todo/${id}`, updateTodo)
         .then((res) => {
            if (res.data.success) {
               alert(res.data.msg)
               setEdit(false)
               getAllTodos();
            }
         })
         .catch((err) => {
            alert(err.data.msg)
         })
   }

  return (
     <div className='border-2 border-gray-600 flex justify-between mb-3'>
        <input type="text" onChange={(e)=>{setText(e.target.value)}} value={text} placeholder={todo.todo} className='w-full focus:outline-none p-2' />
        <button onClick={(e)=>{handleEditClick(e, todo._id)}} className='py-1 px-6 bg-gray-600 text-white'>Edit</button>
     </div>
  )
}

export default TodoEdit
