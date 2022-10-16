import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">ChatNChat</span>
        <span className="title">Login</span>
        <form action="">


    <input type="text" placeholder='Email' />
    <input type="text" placeholder='Password' />
   
    <button>Login</button>

        </form>

        <p>Don't have an account? Register</p>
    </div>
</div>
  )
}

export default Login