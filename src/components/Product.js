import React, { useState } from 'react';

const Product = ({ product, shoppingCart, addProduct, isShoppingCart }) => {

    const { name, price, id } = product;

    // Agregar producto al carrito
    const selectProduct = ( product ) => {
        console.log( 'Comprando... ' + JSON.stringify( product ) );
        // Encontrar si el producto ya ha sido agregado al carrito
        const existProduct = shoppingCart.find( data => data.id === product.id );
        if( existProduct ) {
            const newShoppingCart = shoppingCart.filter( data => data.id !== product.id );
            newShoppingCart.push( { ...existProduct, amount: existProduct.amount + 1 } );
            addProduct( newShoppingCart );
        } else {
            addProduct( [ ...shoppingCart, { ...product, amount: 1 } ] );
        }
    }
    
    // Eliminar un producto del carrito
    const deleteProduct = ( id ) => {
        const shoppingCartWithoutProduct = shoppingCart.filter( product => product.id !== id );
        addProduct( shoppingCartWithoutProduct );
    }

    return (
        <div>
            <h3>{ name }</h3>
            <p>${ price }</p>
            
            {isShoppingCart ?
                <>
                <p>cantidad: { product.amount }</p>
                <button 
                    type="button"
                    onClick={ () => deleteProduct( product.id ) }
                >Eliminar</button>
                </>
                :
                <button 
                    type="button"
                    onClick={ () => selectProduct( product ) }
                >Comprar</button>
            }
        </div>
    );
};

export default Product;
