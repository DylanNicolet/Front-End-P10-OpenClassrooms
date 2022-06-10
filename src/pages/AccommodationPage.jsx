import React from "react";
import Header from "../layouts/Header.jsx";
import Tag from "../components/Tag.jsx";
import Footer from "../layouts/Footer";
import AccommodationDescription from "../components/AccommodationDescription.jsx";
import AccommodationEquipement from "../components/AccommodationEquipement.jsx";

export default function AccommodationPage(){

    return(
        <main>
            <Header />
            <img src="cover" alt="Accomodation image" className="cover-image"/>
            <section className="information">
                <section className="information__title-location-tag">
                    <h1>title</h1>
                    <p>Location</p>
                    <Tag />{/*<-- map tags here*/}
                </section>
                <section className="information__rating-host">
                    rating
                    <section className="information__host">
                        <p>Host name</p>
                        <img src="host" alt="Host picture" />
                    </section>
                </section>
            </section>
            <AccommodationDescription />
            <AccommodationEquipement />
            <Footer />
        </main>
    )
}