import React from "react";

import Header from "../layouts/Header";
import Banner from "../components/Banner";
import AccommodationContainer from "../components/AccommodationContainer";
import Footer from "../layouts/Footer";

export default function Home(){
    return(
        <main className="main">
            <section>
                <Header />
                <Banner />
                <AccommodationContainer />
            </section>
            
            {/*seperate the footer from the rest of the page*/}
            <Footer />
        </main>
    )
}