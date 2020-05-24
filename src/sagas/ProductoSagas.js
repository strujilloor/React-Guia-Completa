import { put, call, takeEvery, all } from 'redux-saga/effects';
import clienteAxios from '../config/axios';
import {
    COMENZAR_DESCARGA_PRODUCTOS,
    AGREGAR_PRODUCTO
} from '../types';
import {
    descargarProductosExitosa,
    descargarProductosError,
    agregarProductoExito,
    agregarProductoError
} from '../actions/productoActions';
import Swal from 'sweetalert2';

// Función que descarga los productos de la base de datos
function* obtenerProductos({ payload }) { // payload es literalmente el payload que viene en la action que dispara esta función
    try {
        // call recibe la función, y los parámetros de esta
        const respuesta = yield call( clienteAxios.get, '/productos'  );
        console.log( respuesta.data );
        yield put( descargarProductosExitosa( respuesta.data ) ); // put es como un dispatch
    } catch (error) {
        console.log( error );
        yield put( descargarProductosError() );
    }
}

function* crearNuevoProducto({ payload }) {
    try {
        // Insertar en la API
        // await clienteAxios.post( '/productos', producto );
        const respuesta = yield call( clienteAxios.post, '/productos', payload.producto ) // payload sería el producto que viene

        // Sí todo sale bien, actualizar el State
        yield put( agregarProductoExito( respuesta.data ) );

        // Alerta
        Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success'
        );

        // Redireccionar
        payload.history.push('/');
    } catch (error) {
        console.log( error );
        yield put( agregarProductoError( true ) ); // state error pasa a ser true
    }
}

// Watchers
export default function* productos(){
    yield all([
        takeEvery( COMENZAR_DESCARGA_PRODUCTOS, obtenerProductos ),
        takeEvery( AGREGAR_PRODUCTO, crearNuevoProducto )
    ]);
}