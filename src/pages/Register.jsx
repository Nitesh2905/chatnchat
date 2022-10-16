import React from 'react'
import  Add from './images/upload.png'
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">ChatNChat</span>
            <span className="title">Register</span>
            <form action="">

        <input type="text" placeholder='User name' id="" />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <input type="file" style={{display:"none"}} name="" id="file" />
        <label htmlFor="file" style={{cursor:"pointer"}}>
            <img src={Add} height="30px" alt="uploadpic" />
            <p>Upload Pic</p>
        </label>
        <button>Sign up</button>

            </form>

            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register