import React from 'react'

const TodoEdit = () => {
  return (
     <div className='border-2 border-gray-600 flex justify-between mb-3'>
        <input type="text" placeholder='Edit the task' className='w-full focus:outline-none p-2' />
        <button className='py-1 px-6 bg-gray-600 text-white'>Edit</button>
     </div>
  )
}

export default TodoEdit
