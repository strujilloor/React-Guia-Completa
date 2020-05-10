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
    const handleChange = (event) => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    // Extraer los valores
    const { pet, owner, date, time, symptoms } = appointment;

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
                value={ pet }
            />
            <label htmlFor="owner">Nombre Dueño</label>
            <input 
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Nombre dueño de la mascota"
                onChange={ handleChange }
                value={ owner }
            />
            <label htmlFor="date">Fecha</label>
            <input 
                type="date"
                name="date"
                className="u-full-width"
                onChange={ handleChange }
                value={ date }
            />
            <label htmlFor="time">Hora</label>
            <input 
                type="time"
                name="time"
                className="u-full-width"
                onChange={ handleChange }
                value={ time }
            />
            <label htmlFor="symptoms">Síntomas</label>
            <textarea 
                name="symptoms"
                className="u-full-width"
                onChange={ handleChange }
                value={ symptoms }
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
