import React from 'react';
import './Navbar.scss';
import logo from '../../../src/logo.png';
const Navbar = () => {
    return (
        <div>
           <nav className= "navbar">
            <img src ={logo} alt ="city tours logo " />
            <ul className = "nav-links">
                <li>
                    <a href ="/" className ="nav-link" >Home</a>
                </li>
                <li>
                    <a href ="/" className ="nav-link" >About</a>
                </li>
                <li>
                    <a href ="/" className ="nav-link active" >Tours</a>
                </li>
            </ul>


           </nav>
        </div>
    );
};

export default Navbar;