import React, { useEffect, useState } from 'react'
import Todobox from './Todobox'
import axios from 'axios'

const Todobody = () => {
   const [todos, setTodos] = useState([])
   const [text, setText] = useState('')

   useEffect(() => {
      getAllTodos();
   }, [])

   const getAllTodos = () => {
      axios.get('http://localhost:5000/api/v1/todo/')
         .then((res) => {
            if (res.data.success) {
               setTodos(res.data.payload)
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }

   //add todos
   const handleAddClick = (e) => {
      e.preventDefault();
      const newTodo = {'todo':text}
      axios.post('http://localhost:5000/api/v1/todo/', newTodo)
         .then((res) => {
            if (res.data.success) {
               alert(res.data.msg)
               getAllTodos();
               setText('')
            }
         })
         .catch((err) => {
            console.log(err)
         })
   }

   return (
      <div>
         <div className='border-2 border-gray-600 flex justify-between mb-12'>
            <input onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Add your task' className='w-full focus:outline-none p-2' />
            <button onClick={handleAddClick} className='py-1 px-6 bg-gray-600 text-white'>Add</button>
         </div>
         <div className='overflow-y-scroll max-h-[20rem]'>
            {todos.map((todo) => (
               <Todobox key={todo._id} todo={todo} getAllTodos={getAllTodos} />
            ))}
         </div>

      </div>
   )
}

export default Todobody
