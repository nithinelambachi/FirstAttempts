import React, {useState} from 'react'
import { useParams } from 'react-router'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'

export const SIgnin = () => {


    const [user, login] = useState({
      authorized:"",
        emailorphonenumber:"",
        password:"",
              })
  
   //let history = useHistory();
const{emailorphonenumber, password} = useParams();

const handleChange = (e) => {

    login({...user, [e.target.name]: e.target.value})
    
          }
const onSubmit=async  e =>{
    e.preventDefault();
const username= e.target.emailorphonenumber.value;;
const password= e.target.password.value;;
console.log(username);
console.log(password);
const fetchUser= await axios.get(`https://api.oopacks.com/api/test/login/${emailorphonenumber}`)
console.log(fetchUser);
if(fetchUser === username ){
  login({authorized:true});
    console.log("login success"); 
}
else{
   console.log("login failed");
 }
}

    return (
        <form onSubmit={ e=> onSubmit(e)}>
        <label>
          <p>Email</p>
          <input type="text" required
          name="emailorphonenumber"
          onChange={e=> handleChange(e)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" required 
          name="password"
          onChange={e=> handleChange(e)} />
        </label>
        <div>
          <button type="submit" onSubmit>Submit</button>
        </div>
      </form>
    )
}
