import React from 'react';
import ShoppingCart from './ShoppingCart';

const Product = ({ product, shoppingCart, addProduct, isShoppingCart }) => {

    const { name, price, id } = product;

    // Agregar producto al carrito
    const selectProduct = ( product ) => {
        console.log( 'Comprando... ' + JSON.stringify( product ) );
        // Encontrar si el producto ya ha sido agregado al carrito
        const existProduct = shoppingCart.find( data => data.id === product.id );
        if( existProduct ) {
            console.log( "ERROR: producto ya ha sido agregado al carrito" );
        } else {
            addProduct( [ ...shoppingCart, product ] );
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
                <button 
                    type="button"
                    onClick={ () => deleteProduct( product.id ) }
                >Eliminar</button>
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
