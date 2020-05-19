import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';


// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function ( state = initialState, action ) {
    switch( action.type ) {

        case AGREGAR_PRODUCTO: 
            return { // imagina este return como un setState
                ...state,
                loading: action.payload // Comienza a cargar la acción de agregar producto
            }

        case AGREGAR_PRODUCTO_EXITO: 
            return {
                ...state,
                loading: false, // termina la acción de agregar producto
                productos: [ ...state.productos, action.payload ] // agrega el producto que viene de la acción a la lista de productos
            }
        
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false, // termina la acción de agregar producto
                error: action.payload
            }

        default:
            return state;
    }
}

