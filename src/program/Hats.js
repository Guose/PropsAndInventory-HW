import React, { Component } from 'react';
import "./style.css";

class Hats extends Component {
    render() {
        let current = this.props.currentCount;
        let ideal = this.props.idealCount;
        let diff = ideal - current;
        let desc = this.props.description;
        return (
            <div className="container">
                <div className="description">
                    <h1>HATS: {desc}</h1>
                    <h1>Current Count: {current}</h1>
                    <h1>Ideal Inventory: {ideal}</h1>
                </div>
                <div className="difference">
                    <h1>Difference: {diff}</h1>
                </div>
            </div>
        )
    }
}
export default Hats;