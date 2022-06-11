import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Gallery(props){
    const [backgroundIndex, setBackgroundIndex] = React.useState(0)
    const numberOfPictures = props.pictures.length

    function handleNextButton(){
        backgroundIndex+2> numberOfPictures? setBackgroundIndex(0) : setBackgroundIndex(previousIndex => previousIndex+1)
    }

    function handlePreviousButton(){
        backgroundIndex === 0? setBackgroundIndex(numberOfPictures-1) : setBackgroundIndex(previousIndex => previousIndex-1)
    }

    return(
        <section className="gallery" style={{
            backgroundImage: "url(" + props.pictures[backgroundIndex] + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            {numberOfPictures>1 && <button className="gallery__button" onClick={handlePreviousButton}><FontAwesomeIcon icon={faChevronLeft} /></button>}
            {numberOfPictures>1 && <button className="gallery__button" onClick={handleNextButton}><FontAwesomeIcon icon={faChevronRight} /></button>}
        </section>
    )
}