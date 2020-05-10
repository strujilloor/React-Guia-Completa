import React from 'react';

const Product = ({ product, shoppingCart, addProduct, isShoppingCart }) => {

    const { name, price, id } = product;

    // Agregar producto al carrito
    const selectProduct = ( product ) => {
        console.log( 'Comprando... ' + JSON.stringify( product ) );
        addProduct( [ ...shoppingCart, product ] );
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
