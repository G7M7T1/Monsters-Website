import React, {useEffect} from 'react';
import { gsap } from "gsap";
import "./card.scss"

export const Card = (props) => {
    useEffect(() => {
        gsap.fromTo(".card-container",
            {scale:1.2, autoAlpha: 0},
            {scale:1, stagger: 0.2, autoAlpha: 1})
    });

    function mouseIn(event) {
        gsap.to(event.target, {scale: 1.05, duration: 0.1})
    }

    function mouseOut(event) {
        gsap.to(event.target, {scale: 1, duration: 0.1})
    }

    return(
        <div className="card-container" onMouseEnter={mouseIn} onMouseLeave={mouseOut} >
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="Monster"/>
            <h1>{props.monster.name}</h1>
        </div>
    )
}
