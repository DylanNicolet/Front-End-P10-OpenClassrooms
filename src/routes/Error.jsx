import React from "react";
import { Link } from "react-router-dom";

//Component to render the 404 error page
export default function Error(){
    return(
        <section className="error-page__content">
            <h1>404</h1>
            <h2>Oops! It looks like this page doesn't exist.</h2>
            <Link to="/" className="error__link">Go back to home page</Link>
        </section>
    )
}