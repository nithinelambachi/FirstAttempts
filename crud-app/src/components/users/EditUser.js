import React, {useState} from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

export const EditUser = () => {


// let history = useHistory()
const [user, setUser] = useState(
    {name:"",
email:"",
phone:""}
);

const {name, email, phone}=user;

const onInputChange= e =>{
    setUser({...user,[e.target.name]: e.target.value});
    };

const onSubmit=async  e =>{
    e.preventDefault();
await axios.post("http://localhost:3000/users",user)
//history.push("/")
}

const loadUser=async ()=>{
    const result= await axios.get ("http://localhost:3000/users")
}
    return (
        <form onSubmit={e => onSubmit(e)}>
        <h1>Sign up</h1>
        <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={name}
        onChange={e => onInputChange(e)}
        />
        <input 
        type="text" 
        name="email" 
        placeholder="Email" 
        value={email}
        onChange={e => onInputChange(e)}/>
        <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={phone}
        onChange={e => onInputChange(e)}/>
       
        <button 
        type="submit" 
        value="Sign Up" 
        onSubmit><span>Sign up</span></button>
      </form>
    )
}
