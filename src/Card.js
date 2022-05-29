import React from 'react';
import './Card.css'

const Card = ({ data, cardIndex }) => {
    return (
        <div>
        {data[cardIndex].map(item => {
            return(
                <div className="card">
                    <p>{item.title}</p>
                    <p>{item.name}</p>
                </div>
            )
        })}
        </div>
        
    );
};

export default Card;