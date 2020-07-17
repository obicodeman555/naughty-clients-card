import React from 'react';

import "./card.styles.css";



export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.client.id}?set=set5&size=180x180`} alt="Client"/>
        <h2>{props.client.name}</h2>
        <p>{props.client.email}</p>
    </div>
)