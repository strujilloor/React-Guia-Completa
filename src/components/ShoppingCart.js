import React from 'react';
import './ShoppingCart.css';
import Product from './Product';

const ShoppingCart = ({ shoppingCart, addProduct }) => {
    return (
        <div className="shoppingCart">
            <h2>Tu carrito de compras</h2>
            {shoppingCart.length === 0 
                ? <p>No hay elementos en el carrito</p>
                : shoppingCart.map( product => (
                    <Product
                        key={ product.id }
                        product={ product }
                        shoppingCart={ shoppingCart }
                        isShoppingCart={ true }
                        addProduct={ addProduct }
                    />
                ))
            }
        </div>
    );
};

export default ShoppingCart;
