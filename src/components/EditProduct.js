import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useHistory } from 'react-router-dom'

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // Nuevo State de producto
    const [ producto, guardarProducto ] = useState({
        name: '',
        price: ''
    });
    const { name, price } = producto;
    
    // producto a editar
    const productFromState = useSelector( state => state.productos.productoEditar );
    
    // Llenar el State automáticamente
    useEffect( () => {
        if (productFromState) {
            guardarProducto( productFromState );
        }
    }, [productFromState] );
    
    // Leer los datos del formulario
    const onChangeForm = ( event ) => {

        const value = ( event.target.name === 'price' ) 
            ? parseInt( event.target.value ) 
            : event.target.value;

        guardarProducto({
            ...producto,
            [event.target.name]: value
        });
    }
    
    const submitEditarProducto = ( event ) => {
        event.preventDefault();
        
        dispatch( editarProductoAction( producto ) )
            .then( () => {
                history.push('/');
            });
    }
    
    if ( !productFromState ) return null; // cuando no venga producto del estado no cargue nada, y no se generen errores
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={ submitEditarProducto }
                        >
                            <div className="form-group">
                                <label htmlFor="name">Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={ name }
                                    onChange={ onChangeForm }
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
                                    onChange={ onChangeForm }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
