import React from 'react'
import Input from './Input'
import Message from './Message'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span> 
      </div>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Input/>
    </div>
  )
}

export default Chat