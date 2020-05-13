export const revisarPresupuesto = ( presupuesto, restante ) => {
    let clase;

    if( ( presupuesto / 4 ) > restante ) { // 100 / 4 = 25
        clase = 'alert alert-danger'; // hemos gastado más del 75% del presupuesto
    } else if( ( ( presupuesto / 2 ) > restante ) ) {
        clase = 'alert alert-warning'; // hemos gastado más del 50% del presupuesto
    }else {
        clase = 'alert alert-success';
    }

    return clase;
}