import React from 'react';

const Form = () => {
    return (
        <>
        <h2>Crear Cita</h2>
        <form>
            <label htmlFor="pet">Nombre Mascota</label>
            <input 
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Nombre Mascota"
            />
            <label htmlFor="owner">Nombre Dueño</label>
            <input 
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
            />
            <label htmlFor="date">Fecha</label>
            <input 
                type="date"
                name="date"
                className="u-full-width"
            />
            <label htmlFor="time">Hora</label>
            <input 
                type="time"
                name="time"
                className="u-full-width"
            />
            <label htmlFor="symptoms">Síntomas</label>
            <textarea 
                name="symptoms"
                className="u-full-width"
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
        </>
    );
};

export default Form;
