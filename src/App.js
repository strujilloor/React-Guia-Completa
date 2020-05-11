import React, { useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Arreglo de Citas
  const [appointments, setAppointments] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const createAppointment = ( appointment ) => {
    setAppointments([ ...appointments, appointment ]);
  }

  return (
    <>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            createAppointment={ createAppointment }
          />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          { appointments.map( ( appointment ) => (
            <Appointment
              key={ appointment.id }
              appointment={ appointment }
            />
          ) ) }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
