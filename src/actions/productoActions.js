import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction( producto, history ) {
    return async ( dispatch ) => {
        dispatch( agregarProducto() );

        try {
            // Insertar en la API
            await clienteAxios.post( '/productos', producto );

            // Sí todo sale bien, actualizar el State
            dispatch( agregarProductoExito( producto ) );

            // Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );

            // Redireccionar
            history.push('/');
        } catch ( error ) {
            console.log( error );
            // Sí hay un error, cambiar el State
            dispatch( agregarProductoError( true ) );

            // Alerta Error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intente de nuevo'
            });
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

// Función que descarga los productos de la base de datos
export function obtenerProductosAction() {
    return async ( dispatch ) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/asdf');
            dispatch( descargarProductosExitosa( respuesta.data ) );
        } catch (error) {
            console.log( error );
            dispatch( descargarProductosError() );
        }
    }
};

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = ( productos ) =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});
