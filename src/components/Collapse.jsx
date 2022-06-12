import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Collapse(props){
    //Return true if props.data is a string
    let isDataAString = typeof(props.data) === 'string' ? true : false

    //Map the data if props.data is not a string
    let dataIsAnObject = !isDataAString && props.data.map(element =>(<p className="collapse__content-text">{element}</p>))

    //useState for click handler and icon rendering
    const [isOpened, setIsOpened] = React.useState(false)

    function handleCollapseClick(){
        setIsOpened(previousState => !previousState)
    }

    return(
        <section className="collapse">
            <section className="collapse__tab" onClick={handleCollapseClick}>
                <h2>{props.tabName}</h2>
                <FontAwesomeIcon icon={isOpened === true? faChevronUp : faChevronDown} className="collapse__icon" />
            </section>
            {isOpened && 
                <section className="collapse__content-container">
                    {isDataAString ? <p className="collapse__content-text">{props.data}</p> : dataIsAnObject}
                </section>
            }
        </section>   
    )
}