import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchdata = async () => {
     let a = await fetch("https://jsonplaceholder.typicode.com/posts")
     let data = await a.json()
     setCards(data) 
     console.log(data)   
  }

  useEffect(() => {
   fetchdata()
  }, []);
  

  return (
    <>
    <nav> 
      <ul>
        <li>Home </li>
        <li>About</li>
        <li>Contacts </li>
      </ul>
    </nav>
      <div className="container">
          {cards.map((card)=> {
            return <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By: Userid: {card.userId}</span>
            </div>
          })
          }

        </div>
    </>
  )
}

export default App
