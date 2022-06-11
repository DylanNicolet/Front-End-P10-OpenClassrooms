import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccommodationCard(props){
    const navigate = useNavigate()

    return(
        <section onClick={() => {navigate("/accommodation", {state:props.totalData})}}
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