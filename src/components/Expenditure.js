import React from 'react';
import PropTypes from 'prop-types';

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

Expenditure.propTypes = {
    expenditure: PropTypes.object.isRequired
};

export default Expenditure;
