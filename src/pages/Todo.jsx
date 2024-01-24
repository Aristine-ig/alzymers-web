import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'



const Todo = () => {

  return (
    <div class="todocontainer">
        <div id="newtask">
            <input type="text" placeholder="Task to be done.." />
            <button id="push">Add</button>
        </div>
        <div id="tasks"></div>
    </div>
    
      

  )
}

export default Todo