import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/Navbar.jsx'

function App() {
   const count = useSelector((state) => state.counter.value)

  return (
    <>
     <div>
      <button>+</button>
      Currently count is {count}
      <button onClick={}>-</button>
     </div>
    </>
  )
}

export default App
