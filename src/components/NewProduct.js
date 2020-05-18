import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NewProduct = () => {

    // State del componente
    const [ name, saveName ] = useState('');
    const [ price, savePrice ] = useState(0);

    // utilizar use dispatch y te retorna una función
    const dispatch = useDispatch();

    // mandar llamar el action de productoAction
    const agregarProducto = ( product ) => dispatch( crearNuevoProductoAction( product ) );

    // Cuando el usuario haga submit
    const submitNuevoProducto = ( event ) => {
        event.preventDefault();

        // Validar formulario
        if ( name.trim() === '' || price <= 0 || isNaN( price ) ) {
            return;
        }

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto({
            name,
            price
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Producto
                        </h2>

                        <form onSubmit={ submitNuevoProducto }>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={ name }
                                    onChange={ e => saveName( e.target.value ) }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="price"
                                    value={ price }
                                    onChange={ e => savePrice( parseInt(e.target.value) ) }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
