import React, { useState } from 'react'
import axios from "axios";
const Signup = () => {

    const [user, setuser] = useState({
        emailorphonenumber:"",
        password:"",
        address:"",
    })


    const{emailorphonenumber,password,address} = user;


const onInputChange = (e) => {

    setuser({...user, [e.target.name]: e.target.value})
}
const onSubmit = async e => {
    e.preventDefault();
    console.log(user);
   await axios.post(`https://api.oopacks.com/api/test/register/${emailorphonenumber}`, user)
  
}
    return (
        <div>
<form class="row g-3" onSubmit={e=> onSubmit(e)}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>

    <input 
    type="emailorphonenumber" 
    class="form-control" 
    name="emailorphonenumber"
    value={emailorphonenumber}
    onChange={e=> onInputChange(e)}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password"
     class="form-control" 
     name="password"
     value={password}
     onChange={e=> onInputChange(e)}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" 
    class="form-control" 
    name="address" 
    value={address}
    placeholder="Full Address"
    onChange={e=> onInputChange(e)}/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>
        </div>
    )
}

export default Signup
