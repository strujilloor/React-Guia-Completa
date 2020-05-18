import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NewProduct = () => {

    // utilizar use dispatch y te retorna una función
    const dispatch = useDispatch();

    // mandar llamar el action de productoAction
    const agregarProducto = () => dispatch( crearNuevoProductoAction() );

    // Cuando el usuario haga submit
    const submitNuevoProducto = ( event ) => {
        event.preventDefault();

        // Validar formulario

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto();
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
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="price"
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
