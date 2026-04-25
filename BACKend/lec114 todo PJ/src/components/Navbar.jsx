import React from 'react'
// import css from "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-slate-800 text-white '>
        <div className="logo cursor-pointer font-bold ">
            Do-Task
        </div>
        <ul className='flex gap-8 mx-5'>
            <li className='cursor-pointer hover:font-bold transition-all duration-50 '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-50 '>Your Tasks</li>
        </ul >
    </nav>
  )
}

export default Navbar
