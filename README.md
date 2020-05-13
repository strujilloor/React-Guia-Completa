## Carga condicional de componentes

Nuestra aplicación debe tener un estado booleano que vendrá siendo el encargado de pintar un componente u otro.

Ejemplo:
```javascript
// State
const [showquestion, setShowquestion] = useState(true);
```

La función encargada de actualizar el estado debe ser mandada al componente que se desea pintar o no mediante sus props.

Ejemplo:
```javascript
<Question 
    saveBudget={ setBudget }
    saveRemaining={ setRemaining }
    updateShowQuestion={ setShowquestion } // <--
/> 
```

El componente recibe la función y la manda a llamar después de algún tipo de proceso, cambiando su valor.

Ejemplo:
```javascript
const Question = ({ saveBudget, saveRemaining, updateShowQuestion  }) => {
    //...

    // Función que lee el presupuesto
    const defineBudget = (event) => {
        // ...
        updateShowQuestion( false ); // <--
    }
    // ...
}
```
Utilizando nuestro operador ternario, definimos si se debe o no pintar el componente, y cuando no, que pinte otra cosa.

Ejemplo:
```javascript
<div className="contenido-principal contenido">
    { showquestion ? // operador ternario
        <Question // <-- pinte esto
            saveBudget={ setBudget }
            saveRemaining={ setRemaining }
            updateShowQuestion={ setShowquestion }
        /> 
    :  // <-- o pinte esto otro
        <div className="row"> 
            <div className="one-half column">
                <Form />
            </div>
            <div className="one-half column">
                2
            </div>
        </div>
    }
</div>
```

## Restando del presupuesto al añadir un gasto (useEffect)

Podemos utilizar de una manera muy interesante useEffect para cuando el gasto se guarde, almacenarlo en el array de gastos y a su vez, ir restando el gasto del presupuesto actual, para almacenar el restante.

```javascript
function App() {

    // State
    const [budget, setBudget] = useState(0); // Presupuesto
    const [remaining, setRemaining] = useState(0); // Restante
    const [showquestion, setShowquestion] = useState(true);
    const [expenditures, setExpenditures] = useState([]); // Gastos
    const [expenditure, saveExpenditure] = useState({}); // Gasto
    const [createexpenditure, saveCreateExpenditure] = useState(false);

    // UseEffect que actualiza el restante
    useEffect(() => {
        // Note: necesitamos este estado y esta condicional para que no se cree un gasto al iniciar la app (recuerda que useEffect también se ejecuta al iniciar la app)
        if( createexpenditure ) {

            // Agrega el nuevo gasto
            setExpenditures([
                ...expenditures,
                expenditure
            ]);

            // Resta del presupuesto actual
            const remainingBudget = remaining - expenditure.amount; // Restante - Cantidad del Gasto
            setRemaining( remainingBudget );

            // Resetear a false
            saveCreateExpenditure( false );
        }
    }, [ expenditure ]);

```

Entonces con el useEffect podemos ahorrarnos varias funciones, que serían: 

- actualizar el array de Gastos
- actualizar el valor Restante, del presupuesto (al haber un gasto)

El Estado Crear Gasto ( createexpenditure ) es necesario debido a que useEffect también se ejecuta cuando se inicia la aplicación, entonces podemos controlar cuando se almacenan los gastos con esta propiedad, la cual enviamos al componente Form para que la active cuando se genere un gasto:

```javascript
<Form 
    saveExpenditure={ saveExpenditure }
    saveCreateExpenditure={ saveCreateExpenditure }
/>
```

```javascript
const Form = ({ saveExpenditure, saveCreateExpenditure }) => {
    // ...
    // Cuando el usuario agrega un gasto
    const addExpenditure = ( event ) => {

        // ...

        // Pasar el gasto al componente principal 
        saveExpenditure( newExpenditure );
        saveCreateExpenditure( true ); // <--

        // ...
    }
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
