import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  // State
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Question 
            saveBudget={ setBudget }
            saveRemaining={ setRemaining }
          />

          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
