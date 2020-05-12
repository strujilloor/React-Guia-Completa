import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ addNewExpenditure }) => {

    // State
    const [ expenditure, setExpenditure ] = useState({
        name: '',
        amount: 0
    });
    const [ error, setError ] = useState( false );

    // Extraer los valores
    const { name, amount } = expenditure;

    // Cuando el usuario agrega un gasto
    const addExpenditure = ( event ) => {
        event.preventDefault();

        // Validar
        if ( amount < 1 || isNaN( amount ) || name.trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        // Construir Gasto
        const newExpenditure = {
            name,
            amount,
            id: shortid.generate()
        };

        // Pasar el gasto al componente principal 
        addNewExpenditure( newExpenditure );

        // Resetear Formulario
        setExpenditure({
            name: '',
            amount: 0
        });

    }

    return (
        <form
            onSubmit={ addExpenditure }
        >
            <h2>Agregar tus gastos aquí</h2>

            { error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null }

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
