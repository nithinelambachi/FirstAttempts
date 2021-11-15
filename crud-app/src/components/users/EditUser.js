import React, {useState, useEffect} from 'react';
import axios from "axios"
import {useParams} from "react-router-dom"

export const EditUser = () => {



const [user, setUser] = useState(
    {name:"",
email:"",
phone:""}
);
const {id} = useParams() //Received from the URL
console.log(id);
const {name, email, phone}=user;

const onInputChange= e =>{
    setUser({...user,[e.target.name]: e.target.value});
    };
useEffect(()=>{
    loadUser();
},[]);
const onSubmit=async  e =>{
    e.preventDefault();
await axios.put(`http://localhost:3000/users/${id}`, user)

}

const loadUser=async ()=>{
    const result= await axios.get (`http://localhost:3000/users/${id}`);
   setUser(result.data);
   console.log(result.data);
}
    return (
        <form onSubmit={e => onSubmit(e)}>
        <h1>Update User</h1>
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
        onSubmit><span>Update</span></button>
      </form>
    )
}
