// "use client";
// import { useState, useEffect} from "react";
import fs from 'fs/promises';
import Navbar from '@/components/Navbar';

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("Home page rendered");
  let a =  fs.readFile(".gitignore")
   a.then(e => {
    console.log(e.toString());
   })
  return (
   <div>
    <Navbar />
    <h1>Welcome to the Home Page </h1>
    {/* {count}
    <button onClick={() => setCount(count + 1)}>Click me</button> */}
   </div>
  );
}
