import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar-dark bg-dark">
            <div className="container  ">
             
               <ul className="navbar-nav mr-auto">

                   <li className="nav-item active"> <Link exact to="/" className="nav-link">Machine Test</Link></li>
                   <li className="nav-item active"> <NavLink exact to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item active"> <NavLink to="/signup" className="nav-link"> Signup</NavLink></li>
                    <li className="nav-item active"> <NavLink to="/signin" className="nav-link">Signin</NavLink></li>                    
                    {/* <li className="nav-item active"> <NavLink to="/user/add" className="nav-link">Add User</NavLink></li>                     */}



               </ul>
            </div>
        </nav>
    )
}
