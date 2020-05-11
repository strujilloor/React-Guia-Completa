import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, deleteAppointment }) => {

    const { pet, owner, date, time, symptoms } = appointment;

    return (
        <div className="cita">
            <p>Mascota: | <span>{ pet }</span></p>
            <p>Dueño: | <span>{ owner }</span></p>
            <p>Fecha: | <span>{ date }</span></p>
            <p>Hora: | <span>{ time }</span></p>
            <p>Síntomas: | <span>{ symptoms }</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => deleteAppointment( appointment.id ) }
            >Eliminar &times;</button>
        </div>
    );
};

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}


export default Appointment;
