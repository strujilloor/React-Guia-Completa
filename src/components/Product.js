import React from 'react';
import { Link } from 'react-router-dom';

// REDUX
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'

const Product = ({ product }) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();

    // Confirmar si desea eliminarlo
    const confirmarEliminarProducto = ( id ) => {
        // Preguntar al usuario


        // Pasarlo al Action
        dispatch( borrarProductoAction( id ) );
    }

    return (
        <tr>
            <td>{ name }</td>
            <td><span className="font-weight-bold">$ { price } </span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${ id }`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmarEliminarProducto( id ) }
                >Eliminar</button>
            </td>
        </tr>
    );
};

export default Product;
