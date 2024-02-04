import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
}from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { AiOutlineAudio } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";



import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/todo",
            name:"Todo",
            icon:<LuListTodo/>
        },
        {
            path:"/audio",
            name:"Audio",
            icon:<AiOutlineAudio/>
        },
        {
            path:"/calendar",
            name:"Calendar",
            icon:<MdOutlineCalendarMonth/>
        },
        {
            path:"/location",
            name:"Location",
            icon:<MdLocationOn/>
        },
        {
            path:"/mindgames",
            name:"MindGames",
            icon:<CgGames />
        },
        {
            path:"/ourteam",
            name:"OurTeam",
            icon:<RiTeamFill />
            
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Brainies</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;