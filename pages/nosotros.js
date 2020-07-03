import React from 'react';
import Layout from '../components/layout/Layout';

const Nosotros = () => (
    <div>
        <Layout>
            <h1>Nosotros</h1>
        </Layout>
    </div>
);

export default Nosotros;

/**
 * ROUTING
 * como podemos ver el nombre del archivo sera en minúsculas 
 * y con - si es compuesto.
 * 
 * la ruta se genera automáticamente según donde se encuentre
 * el componente.
 * 
 * en este caso como nosotros.js se encuentra en la raíz de pages,
 * su ruta sera -> '/nosotros'.
 * 
 * si estuviera dentro de una carpeta digamos blog, entonces
 * la ruta sera -> 'blog/nosotros'.
 * 
 * Note: como layout no se encuentra en pages, si no en una carpeta
 * llamada components, este no genera ruta.
 */