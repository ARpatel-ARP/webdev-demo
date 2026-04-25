import React from 'react'

const footer = () => {
  return (
       <footer className='flex px-3 justify-between bg-slate-500 text-white py-2'>
    <div className='logo font-thin'>Copyrights @ facebook | all rights reserved </div>
         <ul className='flex gap-2 text-sm'>
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About</li></a>
            <a href='/contact'><li>Contact</li></a>
         </ul>
    </footer>
  )
}

export default footer
