import React, { useState } from 'react'
import './Login.css'
import pic from'./images/linkedin2.png'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function Login() { 
    const  [name, setName]= useState("");
    const[profilePic, setProfilePic] = useState("");
    const  [email, setEmail]= useState("");
    const  [password, setPassword]= useState("");
    const dispatch = useDispatch();
    
    const loginToApp= (e) =>{
        e.preventDefault();
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                   dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                   })
                   ) 
            })
        }).catch(error=>alert(error.message));
    
    };

    return (
    <div className='login'>
     <img src={pic}  />
    <form>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name (required if regestering)" 
        type="text"/>
       
        <input
        value={profilePic} 
        onChange={(e)=>setProfilePic (e.target .value)}
        placeholder="Profile pic URL(optional) "
         type="text"/>
       
        <input 
        value={email}
         onChange={(e)=> setEmail(e.target.value)}
         placeholder="Email"
         type="email"/>
       
        <input 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
         placeholder="Password"
          type="password"/>
       
        <button type="submit" onClick={loginToApp}>Sign In</button>
    </form>

    <p>
    Not a member?{" "}
    <a className="login_register" onClick={register}>Register Now</a>
    </p>
    
    </div>
  )
} 

export default Login
