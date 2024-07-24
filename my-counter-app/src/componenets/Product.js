import React from 'react';

const Product =({Name, image, description, price, quantity}) => {
    return (
        <div>
            <h2>{Name}</h2>
            <img src={image}alt={Name}/>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>


        </div>

    );

};

export default Product 