import React from "react";
import Tag from "../components/Tag.jsx";
import Rating from "../components/Rating.jsx";
import Gallery from "../components/Gallery.jsx";
import Collapse from "../components/Collapse.jsx";
import { useParams } from "react-router-dom";
import database from "../database.json";


export default function AccommodationPage(){
    let params = useParams()
    let currentId = params.accommodationId

    const data = database.data
    //match the url-id to an accommodation in the database
    let currentData = data.find((accommodation) => accommodation.id === currentId)

    return(
        <section>
            <Gallery pictures = {currentData.pictures} />
            <section className="information">
                <section className="information__title-location-tag">
                    <h1>{currentData.title}</h1>
                    <p>{currentData.location}</p>
                    <Tag tags={currentData.tags} />
                </section>
                <section className="information__rating-host">
                    <Rating rating={currentData.rating} />
                    <section className="information__host">
                        <p>{currentData.host.name}</p>
                        <img src={currentData.host.picture} alt="of the host" />
                    </section>
                </section>
            </section>
            <section className="description-equipements">
                <Collapse tabName="Description" data={currentData.description} page="accommodation"/>
                <Collapse tabName="Equipements" data={currentData.Amenities} page="accommodation"/>
            </section>
        </section>
    )
}