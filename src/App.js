import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {

  // State
  const [budget, setBudget] = useState(0); // Presupuesto
  const [remaining, setRemaining] = useState(0); // Restante
  const [showquestion, setShowquestion] = useState(true);
  const [expenditures, setExpenditures] = useState([]); // Gastos
  const [expenditure, saveExpenditure] = useState({}); // Gasto
  const [createexpenditure, saveCreateExpenditure] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
      if( createexpenditure ) { // necesitamos este estado y esta condicional para que no se cree un gasto al iniciar la app (recuerda que useEffect también se ejecuta al iniciar la app)

          // Agrega el nuevo gasto
          setExpenditures([
              ...expenditures,
              expenditure
          ]);

          // Resta del presupuesto actual
          const remainingBudget = remaining - expenditure.amount;
          setRemaining( remainingBudget );

          // Resetear a false
          saveCreateExpenditure( false );
      }
  }, [ expenditure, createexpenditure, expenditures, remaining ]);

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
                  saveExpenditure={ saveExpenditure }
                  saveCreateExpenditure={ saveCreateExpenditure }
                />
              </div>
              <div className="one-half column">
                <List 
                  expenditures={ expenditures }
                />

                <ControlBudget 
                  budget={ budget }
                  remaining={ remaining } 
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
