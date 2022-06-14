import React from "react";

export default function Tag(props){
    const tags = props.tags
    const allTags = tags.map(tag =>(
        <section className="tag" key={tag}>{tag}</section>
    ))

    return(
        <section className="information__tags">
           {allTags} 
        </section>
    )
}