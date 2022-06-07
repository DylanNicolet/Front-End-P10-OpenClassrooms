import React from "react";
import ReactDOM from "react-dom";
import "../css/AccommodationContainer.css";
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