import React1, { useEffect } from 'react'

const Navbar = ({color}) => {
// Case 1 : run on every render
  useEffect(() => {
    alert("will run on every render")
  })
  
  // Case 2 : run on only first render
  useEffect(() => {
    alert("this is the first render")
  }, [])
  
  // Case 3 : Run only when certain value change
   
  useEffect(() => {
    alert("running due to color change")
  }, [color])
  
  // Example of clean up function 
  useEffect(() => {
    alert("welcome to the page")
  
    return () => {
      alert("the component was unmounted")
    }
  }, [])
  
    
  return (
    <div>
        i am navbar of {color} color...
      
    </div>
  )
}

export default Navbar
