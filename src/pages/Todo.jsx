import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'



const Todo = () => {

  return (
    <div className="w-full flex mb-4 items-center justify-between">
      <div class="todocontainer">
          <div id="newtask">
              <input type="text" placeholder="Task to be done.." />
              <button id="push">Add</button>
          </div>
          <div id="tasks"></div>
      </div>
    </div>
  )
}

export default Todo