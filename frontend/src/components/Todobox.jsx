import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import TodoEdit from './TodoEdit';
import axios from 'axios'

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
               alert(res.data.msg)
               getAllTodos();
            }
         })
         .catch((err) => {
            alert(err.data.msg)
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
            <TodoEdit />
         }

      </div>
   )
}

export default Todobox
