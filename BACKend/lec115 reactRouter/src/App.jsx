import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router-dom"; 
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { RouterProvider } from 'react-router-dom'
import About from './components/About'

function App() {
 const router = createBrowserRouter ( [
     {
      path: "/",
      element:<><Navbar/><Home/></> 
        },
     {
      path: "/login",
      element:<><Navbar/> <Login/></>
     },
     {
      path: "/about",
      element:<><Navbar/> <About/></>
     },
 ])
  return (
    <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
