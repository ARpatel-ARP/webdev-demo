"use client"
import Image from "next/image";

export default function Home() {
  const handleclick=async()=>{
    let data={name:"neharika",role:"student"};
    let a = await fetch('/API/add', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data) 
    });
    let res = await a.json();
    console.log(res); 
  }
  return (
  <div>
    <h1 className="text-xl font-bold">Welcome to the Home Page</h1>
    <button onClick={handleclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  </div>
  );
}
