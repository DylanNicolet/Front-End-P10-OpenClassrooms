import React from "react";
import logo from "../images/logo.jpg";
import {NavLink} from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="kasa logo" className="Header__image"/>
            <nav className="Header__nav">
                <ul>
                    <NavLink 
                        to="/" 
                        className="header__link" 
                        style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "none",
                            };
                        }}
                    >
                        HOME
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="header__link" 
                        style={({ isActive }) => {
                            return {
                                textDecoration: isActive ? "underline" : "none",
                            };
                        }}
                    >
                        ABOUT
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}