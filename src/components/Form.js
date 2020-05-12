import React from 'react';

const Form = () => {
    return (
        <form>
            <h2>Agregar tus gastos aquí</h2>

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
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
