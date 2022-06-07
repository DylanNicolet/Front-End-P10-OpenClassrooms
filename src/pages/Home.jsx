import React from "react";
import ReactDOM from "react-dom";
import database from "../database.json";

import Header from "../components/Header";
import Banner from "../components/Banner";
import AccommodationContainer from "../components/AccommodationContainer";

//const data = database.data

export default function Home(){
    return(
        <section>
            <Header />
            <Banner />
            <AccommodationContainer />
        </section>
       
    )
}