import React, { useState } from 'react';
import Form from './components/Form';

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
          2
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
