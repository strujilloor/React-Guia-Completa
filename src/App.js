import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import Product from './components/Product';

function App() {

    // Crear lista de productos
    const [ products, setProducts ] = useState([
        { id: 1, name: 'Camisa ReactJS', price: 50  },
        { id: 2, name: 'Camisa NodeJs',  price: 40  },
        { id: 3, name: 'Camisa VueJS',   price: 30  },
        { id: 4, name: 'Camisa Angular', price: 20  },
    ]);

    // Carrito de Compras
    const [ shoppingCart, addProduct ] = useState([]);

    // Obtener fecha actual
    const year = new Date().getFullYear();

    console.log( 'Carrito: ', shoppingCart ); // Por qué se ejecuta dos veces?

    return (
        <Fragment>
            <Header
                title="Tienda Virtual"
            />

            <h1>Lista de Productos</h1>

            { products.map( product => (
                <Product 
                    key={ product.id } 
                    product={ product }
                    shoppingCart={ shoppingCart }
                    addProduct={ addProduct }
                />
            ))}

            <Footer
                date={ year }
            />
        </Fragment>
    );
}

export default App;
