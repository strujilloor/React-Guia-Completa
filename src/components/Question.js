import React, { useState } from 'react';

const Question = () => {

    // Definir el State
    const [amount, setAmount] = useState(0);

    // Función que lee el presupuesto
    const defineBudget = (event) => {
        setAmount( parseInt( event.target.value, 10 ) ); // en base 10
    }

    // Submit para definir el presupuesto
    const addBudget = (event) => {
        event.preventDefault();

        // Validar

        // si se pasa la validación

    }
    
    return (
        <>
            <h2>Coloca tu presupuesto</h2>

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
