import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {


    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        loadUsers();
    console.log('useEffect');
    }, []);


const loadUsers = async() => {
    const result = await axios.get('http://localhost:3000/users');
   setData(result.data.reverse());
}


    return (
        <div className="py-4">
           <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
     {data.map((user, index) => (
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td> 
                <Link className="btn btn-outline-primary" to={`/edit/${user.id}`}>Edit</Link>
                <Link className="btn btn-outline-danger" to={`/edit/${user.id}`}>Delete</Link>
        </td>
        </tr>
     ))}
  
  </tbody>
</table>
            
        </div>
    );
}



export default Home
