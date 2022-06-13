import React from "react";
import Header from "../layouts/Header.jsx";
import Footer from "../layouts/Footer.jsx";

export default function Error(){
    return(
        <main className="error-page">
            <Header />
            <section className="error-page__content">
                <h1>404</h1>
                <h2>Oops! It looks like this page doesn't exist.</h2>
            </section>
            <a href="/home">Go back to home page</a>
            <Footer />
        </main>
    )
}