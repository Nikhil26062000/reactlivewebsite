import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="Header">

        <div className="logo">
            <h1>React App</h1>
        </div>

        <div className="navbar">
            <NavLink className="tools" to="/">Home</NavLink>
            <NavLink className="tools" to="/service">Services</NavLink>
            <NavLink className="tools" to="/about">About</NavLink>
            <NavLink className="tools" to="/contact">Contact</NavLink>
            <NavLink className="tools" to="/History">History</NavLink>
        </div>
    </div>
      
    </>
  );
};

export default Navbar;
