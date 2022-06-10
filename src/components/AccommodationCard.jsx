import React from "react";
import {Link} from 'react-router-dom';

export default function AccommodationCard(props){
    return(
        <Link 
        to={`/accommodation`}
        className="accommodation-card" 
        style={{
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
        </Link>
    )
}