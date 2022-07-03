import React from "react";
import database from "../database.json";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

//Component to render the Homepage
export default function Home(){
    const data = database.data

    //Maps every accommodation from the database to create cards
    const accommodations = data.map(element =>(
        <Link className="accommodation-card" to={`/accommodation/${element.id}`} key={element.id}
        style={{
            backgroundImage: "url(" + element.cover + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <section className="gradient-haze"></section>
            <section className="card__text">
                <p className="card__accommodation">Accommodation</p>
                <p className="card__title">{element.title}</p>
            </section>
        </Link>
    ))

    return(
        <section>
            <Banner />
            <section className="accommodation-container">
                {accommodations}
            </section>
        </section>
    )
}