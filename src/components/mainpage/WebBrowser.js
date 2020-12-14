import React from 'react';

export default function (props) {
    return (
        <article>
            <h2>{props.name}</h2>
            <img src={props.imgSrc} alt={props.name} width="200px"/>
            <p>{props.description}</p>
        </article>
    )
}