import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

 describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar hola param ', () => {
        const nombre = 'Luis' 
        const saludo = getSaludo(nombre);
        expect( saludo ).toBe( `Hola, Luis !`)
    })

    // Ejercicio getSaludo debe retornar Hola Carlos!  si on hay argumento en el nombre
    test('getSaludo retorna valor por defecto ', () => {
        
        const saludo = getSaludo();
        // console.log(saludo)
        expect(saludo).toBe(`Hola, Carlos !`)
    })
    

});


  