# Formularios en React

## Agregando los campos al formulario

Los formularios poseen labels e inputs, y no olvidemos los placeholders, se está utilizando skeleton para los estilos dentro de public/index.html:

```html
    <title>Administración de Pacientes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
```

```javascript
<form>
    <label htmlFor="pet">Nombre Mascota</label>
    <input 
        type="text"
        name="pet"
        className="u-full-width"
        placeholder="Nombre Mascota"
    />
    <label htmlFor="owner">Nombre Dueño</label>
    <input 
        type="text"
        name="owner"
        className="u-full-width"
        placeholder="Nombre dueño de la mascota"
    />
    <label htmlFor="date">Fecha</label>
    <input 
        type="date"
        name="date"
        className="u-full-width"
    />
    <label htmlFor="time">Hora</label>
    <input 
        type="time"
        name="time"
        className="u-full-width"
    />
    <label htmlFor="symptoms">Síntomas</label>
    <textarea 
        name="symptoms"
        className="u-full-width"
    ></textarea>

    <button
        type="submit"
        className="u-full-width button-primary"
    >Agregar Cita</button>
</form>
```

## Creando el estado (State) para los campos del formulario

Los nombres de las propiedades del estado y del atributo name de los input deben ser iguales.

```javascript
// Crear State de Citas
const [appointment, setAppointment] = useState({
    pet: '', // <-- propiedad pet
    owner:'',
    date: '',
    time: '',
    symptoms: ''
});

// Función que se ejecuta cada que el usuario escribe en un input
const handleChange = () => {
    console.log('Escribiendo...');
}

// ...
<label htmlFor="pet">Nombre Mascota</label>
<input 
    type="text"
    name="pet" // <-- atributo name pet
    className="u-full-width"
    placeholder="Nombre Mascota"
    onChange={ handleChange }
/>
// ...lo mismo para todos los demás campos del formulario
```

## Leyendo los cambios en los inputs

```javascript
// Función que se ejecuta cada que el usuario escribe en un input
const handleChange = (event) => {
    setAppointment({
        ...appointment, // <-- debemos hacer una copia del estado anterior
        [event.target.name]: event.target.value // <-- para luego sustituir el nuevo valor
    })
}

// Extraer los valores
const { pet, owner, date, time, symptoms } = appointment; // <-- Object Destructuring

// ...
<label htmlFor="pet">Nombre Mascota</label>
<input 
    type="text"
    name="pet"
    className="u-full-width"
    placeholder="Nombre Mascota"
    onChange={ handleChange }
    value={ pet } // <-- Agregamos el atributo value, y le asignamos el valor de la propiedad
/>
// ...lo mismo para todos los demás campos del formulario
```

## Evento para leer cuando el usuario envie el formulario

```javascript
<form onSubmit={ submitAppointment }>
```

```javascript
// Cuando el usuario envia el formulario
const submitAppointment = ( event ) => {
    event.preventDefault(); // <-- prevenir que recargue la página

    // Validar

    // Asignar un ID

    // Crear Cita

    // Reiniciar Form
}
```

## Validación de formularios en React

```javascript
// No tengas miedo de crear multiples States
const [error, setError] = useState(false);
```

```javascript
const submitAppointment = ( event ) => {
    event.preventDefault();

    // Validar 
    if ( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '' ) { // trim() elimina los espacios en blanco
        setError(true); // <-- actualizamos el estado a true
        return;
    }

    // Asignar un ID

    // Crear Cita

    // Reiniciar Form
}
```

Podemos mostrar al usuario el error de la siguiente forma:

```javascript
<h2>Crear Cita</h2>
{ error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
```

Si estado error es true, se mostrará un párrafo con el mensaje "Todos los campos son obligatorios".


## Creando las Citas

nuetra app tendrá un state citas, y una función que cree la cita:

```javascript
function App() {

  // Arreglo de Citas
  const [appointments, setAppointments] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const createAppointment = ( appointment ) => {
    setAppointments([ ...appointments, appointment ]);
  }
```

y le pasaremos esta función al componente Form:

```javascript
<Form 
    createAppointment={ createAppointment }
/>
```

Form recibe está función y la manda a llamar cuando se ejecuta el evento submit submitAppointment:

```javascript
// Asignar un ID
const id = uuidv4();

// Crear Cita
createAppointment({ ...appointment, id });
```

> Note: esto del id no es necesario en un proyecto real, por que la DB que utilicemos generará automaticamente el id.

## Reiniciar Formulario

Básicamente el formulario se reinicia actualizando el estado que contiene los campos de este.

```javascript
// Reiniciar Form
setAppointment({
    pet: '',
    owner:'',
    date: '',
    time: '',
    symptoms: ''
});
```

## Eliminar Citas del State

El componente App, que contiene el estado de las citas, tendrá una función que eliminará la cita:

```javascript
// Función que elimina una cita por su id
const deleteAppointment = ( id ) => {
    // me trae un nuevo array con todas las citas menos la del id especificado:
    const newAppointments = appointments.filter( appointment => appointment.id !== id );
    setAppointments( newAppointments );
}
```

Le pasamos por props la función a el Componente cita:

```javascript
{ appointments.map( ( appointment ) => (
    <Appointment
        key={ appointment.id }
        appointment={ appointment }
        deleteAppointment={ deleteAppointment } // <--
    />
))}
```

El componente cita recibe la función, y la manda a llamar cuando se hace clic en el botón pasandole el id de la cita:

```javascript
<button
    className="button eliminar u-full-width"
    onClick={ () => deleteAppointment( appointment.id ) } // <--
>Eliminar &times;</button>
```

## Mostrando un mensaje de forma condicional

Si no se a registrado ninguna cita muestre como titulo, No hay citas, en caso contrario, Administra tus citas:

```javascript
function App() {
  // ...

  // Mensaje Condicional
  const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
        <div className="one-half column">
            <h2>{ title }</h2> 
        </div>
    </>
  );
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
