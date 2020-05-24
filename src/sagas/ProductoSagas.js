import { put, call, takeLatest } from 'redux-saga/effects';
import clienteAxios from '../config/axios';
import {
    COMENZAR_DESCARGA_PRODUCTOS
} from '../types';
import {
    descargarProductosExitosa,
    descargarProductosError
} from '../actions/productoActions';


function* obtenerProductos({ payload }) {
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

// Watchers
export default function* productos(){
    yield takeLatest( COMENZAR_DESCARGA_PRODUCTOS, obtenerProductos );
}