import React from "react";
//import database from "../database.json";

import Header from "../layouts/Header";
import Banner from "../components/Banner";
import AccommodationContainer from "../components/AccommodationContainer";
import Footer from "../layouts/Footer";

//const data = database.data

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