import React from "react";

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
            <h1>{backgroundIndex}</h1>
            <button onClick={handlePreviousButton}>previous</button>
            <button onClick={handleNextButton}>next</button>
        </section>
    )
}