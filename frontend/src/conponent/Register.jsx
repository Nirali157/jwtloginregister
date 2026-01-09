import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Register() {

const [form,setForm]=useState({})
const navigate=useNavigate()

const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async () =>{
    await axios.post("http://localhost:6789/signup",form)

    alert("SignUp Succesfully")
    navigate('/')
}

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" name="name"  placeholder='Enter Name' onChange={handleChange}/>
      <input type="email" name="email"  placeholder='Enter Email'  onChange={handleChange}/>
      <input type="password" name="password" placeholder='Enter Password'  onChange={handleChange}/>
    <button onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}
