import React from 'react';

const ControlBudget = ({ budget, remaining }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ { budget }
            </div>
            <div className="alert">
                Restante: $ { remaining }
            </div>
        </>
    );
};

export default ControlBudget;
