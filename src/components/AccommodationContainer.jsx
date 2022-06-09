import React from "react";
import AccommodationCard from "./AccommodationCard";

export default function AccommodationContainer() {
    return(
        <section className="accommodation-container">
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
            <AccommodationCard />
        </section>
    )
}