import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TodoWrapper } from '../components/TodoWrapper'



const Todo = () => {

  
  return (
    <div className="w-full flex mb-4 items-center justify-between">
      <TodoWrapper />
    </div>
  )
}

export default Todo

{/* <div className="w-full flex mb-4 items-center justify-between">
      <div class="todocontainer">
          <div id="newtask">
              <input type="text" placeholder="Task to be done.." />
              <button id="push">Add</button>
              
          </div>
          <div id="tasks"></div>
      </div>
    </div> */}