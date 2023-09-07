import React, { useEffect, useState } from 'react'
import Todobox from './Todobox'
import axios from 'axios'

const Todobody = () => {
   const [todos, setTodos] = useState([])

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

   return (
      <div>
         <div className='border-2 border-gray-600 flex justify-between mb-12'>
            <input type="text" placeholder='Add your task' className='w-full focus:outline-none p-2' />
            <button className='py-1 px-6 bg-gray-600 text-white'>Add</button>
         </div>
         <div className='overflow-y-scroll max-h-[20rem]'>
            {todos.map((todo) => (
               <Todobox todo={todo} />
            ))}
         </div>

      </div>
   )
}

export default Todobody
