import React from "react";

import Header from "../layouts/Header";
import Banner from "../components/Banner";
import AccommodationContainer from "../components/AccommodationContainer";
import Footer from "../layouts/Footer";

export default function Home(){
    return(
        <main className="main">
            <Header />
            <Banner />
            <AccommodationContainer />
            <Footer />
        </main>
       
    )
}