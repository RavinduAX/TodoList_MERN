import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import TodoEdit from './TodoEdit';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todobox = ({todo, getAllTodos}) => {
   const [completed, setCompleted] = useState(false);
   const [edit, setEdit] = useState(false);

   const toggleComplete = () => {
      setCompleted(!completed);
   }

   const toggleEdit = () => {
      setEdit(!edit)
   }

   //delete todo
   const handleDeleteClick = (e, id) => {
      e.preventDefault();
      axios.delete(`http://localhost:5000/api/v1/todo/${id}`)
         .then((res) => {
            if (res.data.success) {
               sNotify(res.data.msg)
               getAllTodos();
            }
         })
         .catch((err) => {
            eNotify(err.data.msg)
         })
   }

   const sNotify = (msg) => {
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
   }

   const eNotify = (msg) => {
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
   }

   return (
      <div>
         {!edit ?
            <div className='bg-gray-600 flex justify-between items-center my-3 ps-2'>
               <p className={`p-2 pointerDefault text-white ${completed ? 'taskDone' : ''}`} onClick={toggleComplete}>{todo.todo}</p>
               <div className='me-2 space-x-1'>
                  <button className='p-1 text-white text-xl' onClick={toggleEdit}><MdEdit /></button>
                  <button className='p-1 text-white text-xl' onClick={(e)=>{handleDeleteClick(e, todo._id)}}><MdDelete /></button>
               </div>
            </div>
            :
            <TodoEdit todo={todo} getAllTodos={getAllTodos} setEdit={setEdit} />
         }
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

export default Todobox
