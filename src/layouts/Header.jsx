import React from "react";
import logo from "../images/logo.jpg"

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="kasa logo" className="Header__image"/>
            <nav className="Header__nav">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                </ul>
            </nav>
        </header>
    )
}