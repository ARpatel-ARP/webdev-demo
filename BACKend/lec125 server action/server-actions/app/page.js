"use client"
import { submitaction } from "@/actions/form";
import { use, useRef } from "react";


export default function Home() {

  let ref = useRef();
  return (
    <div className="w-1/2 mx-auto">
      <form action={submitaction} className="flex flex-col gap-4 mt-10">
        <div>
          <label htmlFor="Name">Name</label>
          <input name="name" id="name" className="text-black bg-gray-800 rounded px-3 py-2 w-full" type="text" />
        </div>
       <div>
          <label htmlFor="Email">Email</label>
          <input name="email" id="email" className="text-black bg-gray-800 rounded px-3 py-2 w-full " type="email" />
        </div>
        <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-thin mt-5 py-2 px-4 rounded" type="submit">
          Submit</button>
        </div>

      </form>
    </div>
  );
}
