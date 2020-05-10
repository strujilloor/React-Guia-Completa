import React from 'react';
import './ShoppingCart.css';
import Product from './Product';

const ShoppingCart = ({ shoppingCart }) => {
    return (
        <div className="shoppingCart">
            <h2>Tu carrito de compras</h2>
            {shoppingCart.length === 0 
                ? <p>No hay elementos en el carrito</p>
                : shoppingCart.map( product => (
                    <Product
                        product={ product }
                    />
                ))
            }
        </div>
    );
};

export default ShoppingCart;
