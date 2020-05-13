import React from 'react';
import Expenditure from './Expenditure'

const List = ({ expenditures }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            
            { expenditures.map( expenditure => (
                <Expenditure
                    key={ expenditure.id }
                    expenditure={ expenditure }
                />
            ) ) }
        </div>
    );
};

export default List;
