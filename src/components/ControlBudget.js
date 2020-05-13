import React from 'react';
import { revisarPresupuesto as checkBudget } from '../Helpers';

const ControlBudget = ({ budget, remaining }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ { budget }
            </div>
            <div className={ checkBudget( budget, remaining ) }>
                Restante: $ { remaining }
            </div>
        </>
    );
};

export default ControlBudget;
