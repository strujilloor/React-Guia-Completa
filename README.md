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
