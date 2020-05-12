import React, { useState } from 'react';
import Question from './components/Question';

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
        </div>
      </header>
    </div>
  );
}

export default App;
