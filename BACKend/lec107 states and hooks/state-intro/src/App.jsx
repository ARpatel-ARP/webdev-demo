import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1000)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count-1)
        
      }
      }>dabaa</button>
    </>
  )
}

export default App
