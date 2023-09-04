import React from 'react'
import Todobox from './Todobox'

const Todobody = () => {
   return (
      <div>
         <div className='border-2 border-gray-600 flex justify-between mb-12'>
            <input type="text" placeholder='Add your task' className='w-full focus:outline-none p-2' />
            <button className='py-1 px-6 bg-gray-600 text-white'>Add</button>
         </div>
         <div className='overflow-y-scroll max-h-[20rem]'>
            <Todobox />
         </div>

      </div>
   )
}

export default Todobody
