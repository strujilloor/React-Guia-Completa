import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

// Crear nuevos productos
export function crearNuevoProductoAction( producto ) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            // Insertar en la API
            await clienteAxios.post( '/hola', producto );

            // Sí todo sale bien, actualizar el State
            dispatch( agregarProductoExito( producto ) );
        } catch ( error ) {
            console.log( error );
            // Sí hay un error, cambiar el State
            dispatch( agregarProductoError( true ) );
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// si producto se guarda en la base de datos
const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = ( estado ) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});