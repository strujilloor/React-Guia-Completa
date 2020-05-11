import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Form = ( { createAppointment } ) => {

    // Crear State de Citas
    const [appointment, setAppointment] = useState({
        pet: '',
        owner:'',
        date: '',
        time: '',
        symptoms: ''
    });

    // No tengas miedo de crear múltiples States
    const [error, setError] = useState(false);

    // Función que se ejecuta cada que el usuario escribe en un input
    const handleChange = (event) => {
        setAppointment({
            ...appointment,
            [event.target.name]: event.target.value
        })
    }

    // Extraer los valores
    const { pet, owner, date, time, symptoms } = appointment;

    // Cuando el usuario envia el formulario
    const submitAppointment = ( event ) => {
        event.preventDefault();

        // Validar 
        if ( pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '' ) { // trim() elimina los espacios en blanco
            setError(true);
            return;
        }
        // Eliminar el mensaje previo
        setError(false);

        // Asignar un ID
        const id = uuidv4();

        // Crear Cita
        createAppointment({ ...appointment, id });

        // Reiniciar Form
        setAppointment({
            pet: '',
            owner:'',
            date: '',
            time: '',
            symptoms: ''
        });
    }

    return (
        <>
        <h2>Crear Cita</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
        <form onSubmit={ submitAppointment }>
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

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Form;
