import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  // State
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showquestion, setShowquestion] = useState(true);
  const [expenditures, setExpenditures] = useState([]);

  // Cuando agreguemos un nuevo gasto
  const addNewExpenditure = ( expenditure ) => {
      setExpenditures([
          ...expenditures,
          expenditure
      ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          { showquestion ?
            <Question 
              saveBudget={ setBudget }
              saveRemaining={ setRemaining }
              updateShowQuestion={ setShowquestion }
            /> 
          : 
            <div className="row">
              <div className="one-half column">
                <Form 
                  addNewExpenditure={ addNewExpenditure }
                />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
