import React,{useState} from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,storage,db} from '../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Add from "./images/upload.png";
import {useNavigate} from 'react-router-dom'
import { setDoc,doc } from "firebase/firestore";


const Register = () => {

  const navigate = useNavigate();

    const [err,setErr] = useState(false);

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const displayName=e.target[0].value
  
    const email=e.target[1].value
    const password=e.target[2].value
    const file=e.target[3].files[0]

   try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

const storageRef = ref(storage, displayName);
const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(
  (err) => {
    setErr(true)
    console.log(err);
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      })
      // for creating data base
      await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL
      })

      await setDoc(doc(db,"userChats",res.user.uid),{})
      navigate('/')
    });
  }
);

    
   }catch(err){
    setErr(true)
    console.log(err);
   }
   
  }



  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatNChat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User name" id="" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" style={{ display: "none" }} name="" id="file" />
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img src={Add} height="30px" alt="uploadpic" />
            <p>Upload Pic</p>
          </label>
          <button>Sign up</button>
        </form>

        <p>Already have an account? Login</p>
       {err && <span style={{color:"red",fontWeight:"bold"}}>Something went wrong</span> }
      </div>
    </div>
  );
};

export default Register;
