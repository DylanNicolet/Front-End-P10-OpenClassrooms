import React from "react";
import Collapse from "../components/Collapse";
import about from "../images/about.jpg";

const reliabilityText = "The ads posted on Kasa guarantee total reliabitly of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams."
const respectText = "Caring is one the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the nighborhood will result in exclusion from our platform."
const serviceText = "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions."
const safetyText = "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is complaint with the safety criteria establishes by our service. By leaving a not for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."



export default function About(){
    return(
        <section>
            <img src={about} alt="distant mountain range" className="about__cover-image" />
            <section className="about__all-collapses">
                <Collapse tabName="Reliability" data={reliabilityText} page="about"/>
                <Collapse tabName="Respect" data={respectText} page="about"/>
                <Collapse tabName="Service" data={serviceText} page="about"/>
                <Collapse tabName="Safety" data={safetyText} page="about"/>
            </section>
        </section>
    )
}