import React from 'react';

const Appointment = ({ appointment }) => {

    const { pet, owner, date, time, symptoms } = appointment;

    return (
        <div className="cita">
            <p>Mascota: | <span>{ pet }</span></p>
            <p>Dueño: | <span>{ owner }</span></p>
            <p>Fecha: | <span>{ date }</span></p>
            <p>Time: | <span>{ time }</span></p>
            <p>Síntomas: | <span>{ symptoms }</span></p>
        </div>
    );
};

export default Appointment;
