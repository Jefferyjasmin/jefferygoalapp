import React from 'react'
import { FaUser} from 'react-icons/fa'
import { useState, useEffect } from "react";

function Register() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange=(e)=>{
  setFormData((prevState)=>({
    ...prevState,
[e.target.name]: e.target.value
  }))
  }
   const onSubmit=(e)=>{
    e.preventDefualt()
  }
  
  
  return (
    <>
    <secction className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please Create an account</p>
    </secction>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group"> <input type='text' className='form-control' id='name' name='name' value={name} placeholder="Enter your name" onChange={onChange}/></div>
        <div className="form-group"> <input type='text' className='form-control' id='email' email='email' value={email} placeholder="Enter your Email" onChange={onChange}/></div>
        <div className="form-group"> <input type='text' className='form-control' id='password' name='password' value={password} placeholder="Enter your password" onChange={onChange}/></div>
        <div className="form-group"> <input type='text' className='form-control' id='password2' name='password2' value={password2} placeholder="Re-enter your password" onChange={onChange}/></div>
       <div className="form-group">
        <button type="submit" className='btn btn-block'>Submit</button>
       </div>
      </form>
    </section>
    </>
  )
}

export default Register