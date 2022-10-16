import React from 'react'
import Add from '../pages/images/upload.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" name="" placeholder='Type message..' id="" />
      <div className="send">
      <label htmlFor="file">
         <img src={Add} style={{cursor:"pointer"}} alt="" height="30px" />
         </label>
        <input type="file" style={{display:"none"}} id="file" />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input