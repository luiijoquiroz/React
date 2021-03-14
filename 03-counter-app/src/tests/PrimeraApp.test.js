import React from 'react';
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { render } from "@testing-library/react";

describe('Tests Primera App', () => {
    
    test('debe retornar el mensaje "Hola Movie" ', () => {
        const saludo_ = 'Hola';
        const subtitulo_ = 'Movie';

        const { getByText} = render(<PrimeraApp saludo = {saludo_} subtitulo = {subtitulo_} />);
        
        expect(getByText('Hola')).toBeInTheDocument(true); 
        expect(getByText('Movie')).toBeInTheDocument(true); 
    })
        


})
