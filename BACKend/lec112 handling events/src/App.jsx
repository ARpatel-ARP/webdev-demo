import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
  email: "",
  phone: ""
})



  const handleClick = () => {
    alert("hey i am clicked")
  }

  // const handlemouseover = () => {
  //   alert("hey i am mouseover")
  // }
  
  const handlechange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
    
  

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red">
        I am a red div
      </div> */}

      <input type="text" name="email" value={form.email} onChange={handlechange} />
      <input type="text" name="phone" value={form.phone} onChange={handlechange} />
    </>
  )
}

export default App
