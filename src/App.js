import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Arreglo de Citas
  const [appointments, setAppointments] = useState([]);

  // Use Effect para realizar ciertas operaciones cuando el State cambie
  useEffect( () => {
      console.log('Componente listo, o algo cambió en las citas');
  }, [appointments] )

  // Función que tome las citas actuales y agregue la nueva
  const createAppointment = ( appointment ) => {
      setAppointments([ ...appointments, appointment ]);
  }

  // Función que elimina una cita por su id
  const deleteAppointment = ( id ) => {
      // me trae un nuevo array con todas las citas menos la del id especificado:
      const newAppointments = appointments.filter( appointment => appointment.id !== id );
      setAppointments( newAppointments );
  }

  // Mensaje Condicional
  const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas';

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
          <h2>{ title }</h2>
          { appointments.map( ( appointment ) => (
            <Appointment
              key={ appointment.id }
              appointment={ appointment }
              deleteAppointment={ deleteAppointment }
            />
          ) ) }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
