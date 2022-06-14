import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating(props){
    const rating = props.rating

    return(
        <section className="information__rating">
            <FontAwesomeIcon icon={faStar} className={rating >= 1? "rating__star--active" : "rating__star--innactive"} />
            <FontAwesomeIcon icon={faStar} className={rating >= 2? "rating__star--active" : "rating__star--innactive"} />
            <FontAwesomeIcon icon={faStar} className={rating >= 3? "rating__star--active" : "rating__star--innactive"} />
            <FontAwesomeIcon icon={faStar} className={rating >= 4? "rating__star--active" : "rating__star--innactive"} />
            <FontAwesomeIcon icon={faStar} className={rating >= 5? "rating__star--active" : "rating__star--innactive"} />
        </section>
    )
}