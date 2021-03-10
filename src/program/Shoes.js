import React from 'react';
import "./style.css";

function FunctionalShoes(props) {
    let current = props.currentCount;
    let ideal = props.idealCount;
    let diff = ideal - current;
    let desc = props.description;
    return (
        <div className="container">
            <div className="description">
                <h1>SHOES: {desc}</h1>
                <h1>Current Count: {current}</h1>
                <h1>Ideal Inventory: {ideal}</h1>
            </div>
            <div className="difference">
                <h1>Difference: {diff}</h1>
            </div>
        </div>
    )
}

export default FunctionalShoes;