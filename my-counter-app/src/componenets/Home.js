import React from 'react';
import Product from './Product';

const Home = () =>{
    const products = [
        {
        Name:'Computer',
        image: 'https:via.placeholder.com/150',
        description: 'this is a sample product description for computer.',
        price: 29.99,
        quanitiy: 10,
        },
        {
            Name: 'LGTV',
            image: 'https://via.placeholder.cm/150',
            description: 'this is a sample product description for LGTV',
            price:49.99,
            quantity:5,
        },
        {
            Name: 'printer',
            image: 'https://via.placeholder.com/150',
            description:'this is a sample product description for printer',
            price: '19.99',
            quantity: '20',
        },

        {
            Name: 'desktop',
            image: 'https://via.placeholder.com/150',
            description:'this is a sample product description for desktop',
            price: '39.99',
            quantity: '50',
        },
        {
            Name: 'VGA cables',
            image: 'https://via.placeholder.com/150',
            description:'this is a sample product description for VGA cables',
            price: '9.99',
            quantity: '100',
        },
        {
            Name: 'keyboards',
            image: 'https://via.placeholder.com/150',
            description:'this is a sample product description for keyboards',
            price: '15.99',
            quantity: '70',
        },
        {
            Name: 'power cables',
            image: 'https://via.placeholder.com/150',
            description:'this is a sample product description for power cables ',
            price: '18.99',
            quantity: '50',
        }
    ];

        return(
            <div>
                <h1>Home Component</h1>
                {products.map((products, index) => (
                    <Product
                    key={index}
                    name={products.Name}
                    image={products.image}
                    description={products.description}
                    price={Product.price}
                    quantity={products.quantity}
                    />
                ))}
            </div>
        );
                };    




        export default Home;

        















    

















