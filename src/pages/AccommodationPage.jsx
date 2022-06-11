import React from "react";
import Header from "../layouts/Header.jsx";
import Tag from "../components/Tag.jsx";
import Rating from "../components/Rating.jsx";
import Footer from "../layouts/Footer";
import Gallery from "../components/Gallery.jsx";
import AccommodationDescription from "../components/AccommodationDescription.jsx";
import AccommodationEquipement from "../components/AccommodationEquipement.jsx";
import { useLocation } from "react-router-dom";

export default function AccommodationPage(){
    const location = useLocation()
    const accommodation = location.state
    return(
        <main>
            <Header />
            <Gallery pictures = {accommodation.pictures} />
            <section className="information">
                <section className="information__title-location-tag">
                    <h1>{accommodation.title}</h1>
                    <p>{accommodation.location}</p>
                    <Tag tags={accommodation.tags} />
                </section>
                <section className="information__rating-host">
                    <Rating rating={accommodation.rating} />
                    <section className="information__host">
                        <p>{accommodation.host.name}</p>
                        <img src={accommodation.host.picture} alt="of the host" />
                    </section>
                </section>
            </section>
            <AccommodationDescription />
            <AccommodationEquipement />
            <Footer />
        </main>
    )
}