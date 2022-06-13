import React from "react";
import Tag from "../components/Tag.jsx";
import Rating from "../components/Rating.jsx";
import Gallery from "../components/Gallery.jsx";
import Collapse from "../components/Collapse.jsx";
import { useLocation } from "react-router-dom";

export default function AccommodationPage(){
    const location = useLocation()
    const accommodation = location.state
    return(
        <section>
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
            <section className="description-equipements">
                <Collapse tabName="Description" data={accommodation.description} page="accommodation"/>
                <Collapse tabName="Equipements" data={accommodation.Amenities} page="accommodation"/>
            </section>
        </section>
    )
}