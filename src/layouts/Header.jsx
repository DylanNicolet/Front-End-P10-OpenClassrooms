import React from "react";
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="kasa logo" className="Header__image"/>
            <nav className="Header__nav">
                <ul>
                    <Link to="/" className="header__link">HOME</Link>
                    <Link to="/about" className="header__link">ABOUT</Link>
                </ul>
            </nav>
        </header>
    )
}