import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
            <li className="nav-item">
                <NavLink  className={({ isActive }) =>(isActive ? "nav-link active" : "nav-link")} to="/">Home</NavLink >
            </li>
            <li className="nav-item">
                <NavLink  to="/shop" className={({ isActive }) =>(isActive ? "nav-link active" : "nav-link")}>Shop</NavLink >
            </li>
            <li className="nav-item">
                <NavLink  to="/blog" className={({ isActive }) =>(isActive ? "nav-link active" : "nav-link")}>Blog</NavLink >
            </li>
            <li className="nav-item">
                <NavLink  to="/" className={({ isActive }) =>(isActive ? "nav-link active" : "nav-link")}>Pages</NavLink >
                <ul className="dropdown-menu">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Tracking</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Nav;