import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// Muestra Alerta
export function MostrarAlertaAction( alerta ) {
    return ( dispatch ) => {
        dispatch( mostrarAlerta( alerta ) );
    }
}

const mostrarAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

// Ocultar Alerta
export function ocultarAlertaAction() {
    return ( dispatch ) => {
        dispatch( ocultarAlerta() );
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA,
});