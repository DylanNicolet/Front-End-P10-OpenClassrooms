import React from "react";
import AccommodationCard from "./AccommodationCard";
import database from "../database.json";

export default function AccommodationContainer() {
    const data = database.data;

    const accommodations = data.map(square =>(
        <AccommodationCard 
        title={square.title}
        cover={square.cover}
        id={square.id}
        totalData={square}
        />
    ))
    

    return(
        <section className="accommodation-container">
            {accommodations}
        </section>
    )
}