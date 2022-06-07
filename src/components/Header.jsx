import React from "react";
import ReactDOM from "react-dom";
import "../css/Header.css";

import logo from "../images/logo.jpg"

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="kasa-logo" className="Header-image"/>
            <nav className="Header-nav">
                <ul>
                    <li className="underlined capitalized">Home</li>
                    <li className="capitalized">About</li>
                </ul>
            </nav>
        </header>
    )
}