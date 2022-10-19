import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">ChatNChat</span>
        <div className="user">
            <img src="" alt="" />
            <span>John</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar