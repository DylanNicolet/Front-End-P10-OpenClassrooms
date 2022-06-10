import React from "react";

export default function AccommodationCard(props){
    return(
        <section 
        className="accommodation-card" style={{
            backgroundImage: "url(" + props.cover + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <section className="gradient-haze"></section>
            <section className="card__text">
                <p className="card__accommodation">Accommodation</p>
                <p className="card__title">{props.title}</p>
            </section>
        </section>
    )
}