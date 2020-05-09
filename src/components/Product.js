import React from 'react';

const Product = ({ product }) => {

    const { name, price, id } = product;

    const selectProduct = ( id ) => {
        console.log('Comprando... ' + id);   
    }

    return (
        <div>
            <h3>{ name }</h3>
            <p>${ price }</p>
            <button 
                type="button"
                onClick={ () => selectProduct( id ) }
            >Comprar</button>
        </div>
    );
};

export default Product;
