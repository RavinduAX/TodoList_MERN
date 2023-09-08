import React, { useEffect, useState } from 'react'
import Todobox from './Todobox'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const newTodo = { 'todo': text }
      axios.post('http://localhost:5000/api/v1/todo/', newTodo)
         .then((res) => {
            if (res.data.success) {
               toastS(res.data.msg)
               getAllTodos();
               setText('')
            }
         })
         .catch((err) => {
            toastE(err.data.msg)
            console.log(err)
         })
   }

   const toastS = (msg) => {
      toast.success(msg, {
         position: "top-right",
         autoClose: 1500,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: "dark",
      })
   };

   const toastE = (msg) => {
      toast.error(msg, {
         position: "top-right",
         autoClose: 1500,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: "dark",
      })
   };

   return (
      <div>
         <div className='border-2 border-gray-600 flex justify-between mb-12'>
            <input onChange={(e) => { setText(e.target.value) }} value={text} type="text" placeholder='Add your task' className='w-full focus:outline-none p-2' />
            <button onClick={handleAddClick} className='py-1 px-6 bg-gray-600 text-white'>Add</button>
         </div>
         <div className='overflow-y-scroll max-h-[20rem]'>
            {todos.map((todo) => (
               <Todobox key={todo._id} todo={todo} getAllTodos={getAllTodos} />
            ))}
         </div>
         <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
         />
      </div>
   )
}

export default Todobody
