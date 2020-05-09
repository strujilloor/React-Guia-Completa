# Introducción y Básicos de React

## Creando Nuestro Primer Componente

src/components/Header.js
```javascript
import React from "react"; // Importamos la biblioteca de react

// Componente funcional
const Header = () => {
  return <h1>Desde el header</h1>; // retorna JSX
};

export default Header;
```

Se utiliza un componente de la siguiente forma:

src/App.js
```javascript
import React from "react";
import Header from "./components/Header"; // Importamos el componente

function App() {
    return (
        <div className="App">
            <Header></Header> // utilización
        </div>
    );
}

export default App;
```

## Componentes Funcionales con Arrow Functions

Una ventaja que tenemos al definir componentes funcionales con arrow funtions es que al no tener código JS antes del return, podemos omitir el return y tener un código más pequeño.

```javascript
import React from 'react';

const Footer = () => (
    <footer>
        <p>Todos los derechos reservados &copy; </p>
    </footer>
);

export default Footer;
```

## Fragments

Si no queremos que en el navegador se nos llene de tantos divs, utilizaremos Fragments.

```javascript
function App() {
    return (
        <Fragment>
            <Header></Header>
            <Footer></Footer>
        </Fragment>
    );
}
```

con Fragments en nuestro navegador, el html se vería así:
```html
<div id="react">
    <h1>Tienda Virtual</h1>
    <footer>
        <p>Todos los derechos reservados © </p>
    </footer>
</div>
```

## Props

Así es como normalmente fluyen los datos.

Le pasamos mediante props, los siguientes valores a los componentes de Header y Footer:

```javascript
function App() {

    // Obtener fecha actual
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header
                title="Tienda Virtual"
            />
            <Footer
                date={ year } // pasamos la variable year al prop date
            />
        </Fragment>
    );
}
```

las props son recibidas y destructuradas de la siguiente forma:

```javascript
const Header = ({ title }) => { // destructuring los props
  return <h1>{ title }</h1>; // podemos usar js en jsx mediante llaves
};
```

```javascript
const Footer = ({ date }) => (
    <footer>
        <p>Todos los derechos reservados &copy; { date } </p>
    </footer>
);
```
## React Hook

- disponibles desde la versión 16.8
- te permiten actualizar un state, sin la necesidad de un class component
- la cantidad de código es menor

### Los Hooks se Dividen en Dos Grupos

1. Básicos
    - useState
    - useEffect
2. Avanzados
    - useContext
    - useRef
    - useReducer
    - useCallback
    - userMemo

### useState

```javascript
import React, { useState } from 'react';
```

```javascript
const [ clientes, guardarClientes ] = useState([]);
```

Esta función retorna un array del cual podemos extraer el estado actual, y la función que cambia el estado.

clientes = tiene el estado actual.

guardarClientes = cambia el estado.

## Pintando una Lista de Productos

```javascript
// Crear lista de productos
const [ products, setProducts ] = useState([
    { id: 1, name: 'Camisa ReactJS', price: 50  },
    { id: 2, name: 'Camisa NodeJs',  price: 40  },
    { id: 3, name: 'Camisa VueJS',   price: 30  },
    { id: 4, name: 'Camisa Angular', price: 20  },
]);
```

```javascript
return (
    <h1>Lista de Productos</h1>

    { products.map( product => (
        <Product 
            key={ product.id } 
            product={ product } 
        />
    ))}
);
```

map retorna un nueva lista, recordemos que en JSX podemos pintar listas de elementos.

```javascript
const Product = ({ product }) => {

    const { name, price, id } = product;

    return (
        <div>
            <h3>{ name }</h3>
            <p>${ price }</p>
        </div>
    );
};
```

## Eventos en React

Los eventos en React son con camelCase

```javascript
<button type="button" onClick={ () => selectProduct(id) }>
    Comprar
</button>
```

```javascript
const selectProduct = ( id ) => {
    console.log('Comprando... ' + id);   
}
```

> Note que cuando quedemos asignar una función a un evento, y esta función recibe parámetros, debemos utilizar arrow function como se ve en el ejemplo, si no es el caso, podemos poner el nombre de la función directamente.

## Pasando una función como Prop

veremos en este ejemplo como agregar productos a un carrito de compras, siendo este un estado del componente padre.

Estado del componente padre:

```javascript
// Carrito de Compras
const [ shoppingCart, addProduct ] = useState([]);
```

Pasa la función addProduct a su componente Hijo mediante props:

```javascript
<Product 
    key={ product.id } 
    product={ product }
    shoppingCart={ shoppingCart } // pasamos el estado
    addProduct={ addProduct }     // y la función que actualiza el estado
/>
```

El componente hijo los recibe y mediante un evento que dispara la función selectProduct, actualiza el estado shoppingCart del padre

```javascript
const selectProduct = ( product ) => {
    console.log( 'Comprando... ' + product );
    addProduct( [ ...shoppingCart, product ] );
}
```

> Note: que necesitamos el estado shoppingCart por que como es una lista, debemos obtener los valores anteriores del estado y agregar el nuevo valor.

___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
