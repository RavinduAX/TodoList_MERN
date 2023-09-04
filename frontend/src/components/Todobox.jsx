import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import TodoEdit from './TodoEdit';

const Todobox = () => {
   const [completed, setCompleted] = useState(false);
   const [edit, setEdit] = useState(false);

   const toggleComplete = () => {
      setCompleted(!completed);
   }

   const toggleEdit = () => {
      setEdit(!edit)
   }

   return (
      <div>
         {!edit ?
            <div className='bg-gray-600 flex justify-between items-center my-3 ps-2'>
               <p className={`p-2 pointerDefault text-white ${completed ? 'taskDone' : ''}`} onClick={toggleComplete}>Go to Home</p>
               <div className='me-2 space-x-1'>
                  <button className='p-1 text-white text-xl' onClick={toggleEdit}><MdEdit /></button>
                  <button className='p-1 text-white text-xl'><MdDelete /></button>
               </div>
            </div>
            :
            <TodoEdit />
         }

      </div>
   )
}

export default Todobox
