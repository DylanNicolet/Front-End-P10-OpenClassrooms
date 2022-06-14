import React from "react";
import logoWhite from "../images/logo-white.png";

export default function Footer(){
    return(
        <footer>
            <section className="footer__content">
                <img src={logoWhite} alt="kasa logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    )
    
}