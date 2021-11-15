import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar-dark bg-dark">
            <div className="container  ">
             
               <ul className="navbar-nav mr-auto">

                   <li className="nav-item active"> <Link exact to="/" className="nav-link">Crud App</Link></li>
                   <li className="nav-item active"> <NavLink exact to="/" className="nav-link">Home</NavLink></li>
                    <li className="nav-item active"> <NavLink to="/about" className="nav-link"> About</NavLink></li>
                    <li className="nav-item active"> <NavLink to="/contact" className="nav-link">Contact</NavLink></li>                    
                    <li className="nav-item active"> <NavLink to="/user/add" className="nav-link">Add User</NavLink></li>                    



               </ul>
            </div>
        </nav>
    )
}
