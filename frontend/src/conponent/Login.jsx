import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const [form, setForm] = useState({})


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:6789/login", form)

        localStorage.setItem("token", res.data.token)
        alert('login succesfully')
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="email" name="email" placeholder='Enter Email' onChange={handleChange} />
            <input type="password" name="password" placeholder='Enter Password' onChange={handleChange} />
            <button onClick={handleSubmit}>Log In</button>
        </div>
    )
}
