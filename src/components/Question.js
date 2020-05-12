import React, { useState } from 'react';
import Error from './Error';

const Question = ({ saveBudget, saveRemaining, updateShowQuestion }) => {

    // Definir el State
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    // Función que lee el presupuesto
    const defineBudget = (event) => {
        setAmount( parseInt( event.target.value, 10 ) ); // en base 10
    }

    // Submit para definir el presupuesto
    const addBudget = (event) => {
        event.preventDefault();

        // Validar
        if ( amount < 1 || isNaN( amount ) ) {
            setError( true )
            return;
        }

        // si se pasa la validación
        setError( false );
        saveBudget( amount );
        saveRemaining( amount );
        updateShowQuestion( false );
    }
    
    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error message="El Presupuesto es Incorrecto" /> : null }

            <form
                onSubmit={ addBudget }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ defineBudget }
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
};

export default Question;
