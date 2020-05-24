import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    COMENZAR_EDICION_PRODUCTO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
// REDUX-THUNK export function crearNuevoProductoAction( producto, history ) {
//     return async ( dispatch ) => {
//         dispatch( agregarProducto() );

//         try {
//             // Insertar en la API
//             await clienteAxios.post( '/productos', producto );

//             // Sí todo sale bien, actualizar el State
//             dispatch( agregarProductoExito( producto ) );

//             // Alerta
//             Swal.fire(
//                 'Correcto',
//                 'El producto se agregó correctamente',
//                 'success'
//             );

//             // Redireccionar
//             history.push('/');
//         } catch ( error ) {
//             console.log( error );
//             // Sí hay un error, cambiar el State
//             dispatch( agregarProductoError( true ) );

//             // Alerta Error
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Hubo un error',
//                 text: 'Hubo un error, intente de nuevo'
//             });
//         }
//     }
// }

export const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// si producto se guarda en la base de datos
const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
export const agregarProductoError = ( estado ) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

// Función que descarga los productos de la base de datos
// export function obtenerProductosAction() {
//     return async ( dispatch ) => {
//         dispatch( descargarProductos() );

//         try {
//             const respuesta = await clienteAxios.get('/productos');
//             dispatch( descargarProductosExitosa( respuesta.data ) );
//         } catch (error) {
//             console.log( error );
//             dispatch( descargarProductosError() );
//         }
//     }
// };

export const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

export const descargarProductosExitosa = ( productos ) =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

export const descargarProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// Selecciona y elimina producto
export function borrarProductoAction( id ) {
    return async ( dispatch ) => {
        dispatch( obtenerProductoEliminar( id ) );

        try {
            await clienteAxios.delete(`/productos/${ id }`);
            dispatch( eliminarProductoExito() );

            // Si se elimina, mostrar alerta
            Swal.fire({
                icon: 'success',
                title: 'Eliminado!',
                text: 'El producto se eliminó correctamente.',
                confirmButtonColor: '#78C2AD',
                confirmButtonText: 'OK',
            });
        } catch (error) {
            console.log( error );
            dispatch( eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = ( id ) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

// Colocar Producto en edición
export function obtenerProductoEditarAction( producto ) {
    return ( dispatch ) => {
        dispatch( obtenerProductoEditar( producto ) );
    }
}

const obtenerProductoEditar = ( producto ) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

// Edita un producto en la API y State
export function editarProductoAction( producto ) {
    return async ( dispatch ) => {
        dispatch( editarProducto() );

        try {
            await clienteAxios.put(`/productos/${ producto.id }`, producto);
            dispatch( editarProductoExito( producto ) )
        } catch (error) {
            console.log( error );
            dispatch( editarProductoError() );
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = ( producto ) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
});