import React from 'react';

const Product = ({ product, shoppingCart, addProduct }) => {

    const { name, price, id } = product;

    const selectProduct = ( product ) => {
        console.log( 'Comprando... ' + product );
        addProduct( [ ...shoppingCart, product ] );
    }

    return (
        <div>
            <h3>{ name }</h3>
            <p>${ price }</p>
            <button 
                type="button"
                onClick={ () => selectProduct( product ) }
            >Comprar</button>
        </div>
    );
};

export default Product;
