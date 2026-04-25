import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("") // inputs data
  const [todos, setTodos] = useState([]) //array that holds data
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
    }
    setTodos(todos)
      
    }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
    
  }
  const handleEdit = (id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
     const newtodos = todos.filter(item => item.id !== id);
  setTodos(newtodos);
  saveToLS()
  }
  const handleDelete = (id) => {
  const newtodos = todos.filter(item => item.id !== id);
  setTodos(newtodos);
  saveToLS()
}
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todo)
    saveToLS()

  }
  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handlecheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id; 
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted =  !newtodos[index].isCompleted;
    setTodos(newtodos)
    saveToLS()

  }

  return ( 
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-300 min-h-[80vh]">
        <h1 className='font-bold text-center mb-6 text-xl'>Do-Task manager <h1 className='font-thin text-lg'> Your all tasks at one place </h1></h1>
        <div className="addToDO">
          <h1 className='font-bold '>Add a TODO </h1>
          <input onChange={handleChange} value={todo} type="text"  className='bg-gray-200 mr-2 w-1/2 my-2' />
          <button onClick={handleAdd} disabled={todo.length<1}  className='cursor-pointer disabled:bg-gray-500 bg-blue-950 text-white text-sm w-10 h-8 mt-2 px-3 rounded-2xl  '><IoIosSave /></button>
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished} className='' /> Show Finished
        <h2 className="text-lg font-bold">Your ToDos</h2>
        <div className="todos">
        {todos.length === 0 && <div className='m-1 font-thin text-sm'>No Todos to display...</div> }
          {todos.map(item=> {

            return ( (showFinished || !item.isCompleted) &&
              <div key={item.id} className="todo flex w-1/3 my-3 justify-between ">
                <div className='flex gap-5 max-w-[70%]'>
                <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>

                <div className="buttons flex h-full ">
                  <button onClick={(e) => {handleEdit(item.id)}} className=' cursor-pointer bg-blue-950 text-white text-sm w-10 h-7  px-3 rounded-2xl mx-1 '><CiEdit /></button>
                  <button onClick={(e) => {handleDelete(item.id)}} className=' cursor-pointer bg-blue-950 text-white text-sm w-10 h-7 px-3 rounded-2xl mx-1 '><MdDeleteOutline /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
