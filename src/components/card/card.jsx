import React from 'react';
import "./card.scss"

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="Monster"/>
        <h1>{props.monster.name}</h1>
    </div>
)
