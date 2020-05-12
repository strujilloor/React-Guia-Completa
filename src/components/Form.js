import React, { useState } from 'react';

const Form = () => {

    // State
    const [ expenditure, setExpenditure ] = useState({
        name: '',
        amount: 0
    });

    // Extraer los valores
    const { name, amount } = expenditure;

    // Cuando el usuario agrega un gasto
    const addExpenditure = ( event ) => {
        event.preventDefault();

        // Validar

        // Construir Gasto

        // Pasar el gasto al componente principal 

    }

    return (
        <form
            onSubmit={ addExpenditure }
        >
            <h2>Agregar tus gastos aquí</h2>

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={ name }
                    name="name"
                    onChange={ e => setExpenditure({...expenditure, [e.target.name]: e.target.value}) }
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={ amount }
                    name="amount"
                    onChange={ e => setExpenditure({...expenditure, [e.target.name]: parseInt( e.target.value, 10 ) }) }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
};

export default Form;
