import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {

    // Obtener fecha actual
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header
                title="Tienda Virtual"
            />
            <Footer
                date={ year }
            />
        </Fragment>
    );
}

export default App;
