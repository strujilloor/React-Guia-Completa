import React from 'react';

const Expenditure = ({ expenditure }) => {

    const { name, amount } = expenditure;

    return (
        <li className="gastos">
            <p>
                { name }

                <span className="gasto">$ { amount }</span>
            </p>
            
        </li>
    );
};

export default Expenditure;
