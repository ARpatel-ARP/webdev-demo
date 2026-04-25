import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
   const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
  })

}

  const onSubmit = async (data) => {
    await delay(2); // simlutaing a network delay
    let r = fetch('http://localhost:3000/', {method: "POST", body: JSON.stringify(data)});
    let res = await r.text();

    console.log(data);
  //     if (data.username === "rohan") {
  //   setError("blocked", {
  //     message: "User is blocked",
  //   });
  // } 
  // else if (data.username !== "shubham") {
  //   setError("myform", {
  //     message: "Username is incorrect",
  //   });
  // }

}

  return (
    <>
    { isSubmitting && <div className='loading'>Submitting...</div> }
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input  type="text" {...register("username", { required: {value:true, message:"Username is required"}, minLength: {value:3, message:"Username must be at least 3 characters"}, maxLength: {value:8, message:"Username must be at most 8 characters" }})} id='' placeholder='username'/>
          {errors.username && <p className='error'>{errors.username.message}</p>}
          <br />
          <input type="password" {...register("password", { required: {value:true, message:"Password is required"}, minLength: {value:6, message:"Password must be at least 6 characters"}})} id='' placeholder='password'/>
          {errors.password && <p className='error'>{errors.password.message}</p>}
          <br />
          <button disabled={isSubmitting} type="submit">Login</button>
          {errors.myform && <p className='error'>{errors.myform.message}</p>}
          {errors.blocked && <p className='error'>{errors.blocked.message}</p>}
        </form>
      </div>

    </>
  )
}

export default App