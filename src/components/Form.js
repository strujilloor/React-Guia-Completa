import React, { useState } from 'react';

const Form = () => {

    // Crear State de Citas
    const [appointment, setAppointment] = useState({
        pet: '',
        owner:'',
        date: '',
        time: '',
        symptoms: ''
    });

    // Función que se ejecuta cada que el usuario escribe en un input
    const handleChange = () => {
        console.log('Escribiendo...');
    }

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
                onChange={ handleChange }
            />
            <label htmlFor="owner">Nombre Dueño</label>
            <input 
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={ handleChange }
            />
            <label htmlFor="date">Fecha</label>
            <input 
                type="date"
                name="date"
                className="u-full-width"
                onChange={ handleChange }
            />
            <label htmlFor="time">Hora</label>
            <input 
                type="time"
                name="time"
                className="u-full-width"
                onChange={ handleChange }
            />
            <label htmlFor="symptoms">Síntomas</label>
            <textarea 
                name="symptoms"
                className="u-full-width"
                onChange={ handleChange }
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
