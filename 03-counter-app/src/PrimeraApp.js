import React, { Fragment } from 'react';
import PropTypes from  'prop-types';
// SFC Stalles Functional Componets
// FC Functional Componets
const PrimeraApp = ({ saludo,  subtitulo}) =>{
   
    return (
        <> 
            {/* <h1>{JSON.stringify(saludo, null, 3)}</h1> */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </> //Otra forma de declarar un fragment con los simbolos vacios(<> </>)
        
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: '',
}

export default PrimeraApp;

// Secciones

// if (!saludo) {
//     throw new Error('El saludo es necesario')
// }

// const saludo = 'Hola Mundo';
// Los objetos no se pueden imprimir objetos;
// const numeros = [1,2,3,4,5,6,]; Lo imprime;
// const bool = false; No lo imprime