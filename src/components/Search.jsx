import React from 'react'
import { useState } from 'react'
import {collection,getDocs,query,where} from 'firebase/firestore'
import { db } from '../firebase'

const Search = () => {
  const [userName,setUserName] = useState("")
  const [user,setUser] = useState(null)
  const [err,setErr] = useState(false)

const handleSearch= async()=>{
  const q = query(
    collection(db,"users"),where("displayName","==",userName)
  );

  try {
    const querySnaptshot = await getDocs(q);
    querySnaptshot.forEach((doc)=>{
      setUser(doc.data())
    })
  } catch (error) {
    setErr(true)
  }
}

  const handleKey=(e)=>{
    e.code ==="Enter" && handleSearch()
  }

  const handleSelect=()=>{
    
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search user' onKeyDown={handleKey} onClick={e=>setUserName(e.target.value)} />
      </div>

    {user && <div className="userChat" onClick={handleSelect}>
      <img src={user.photoURL} alt="userImg" />
      <div className="userChatInfo">
        <span>{user.displayName}</span>
      </div>
    </div>}
    {err && <span style={{color:"red",fontWeight:"bold"}}>User Not Found</span> }
    </div>
  )
}

export default Search