import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../base/database/heroes'

describe('09-promesas test ', () => {
   
    test('retorna un héroe buscado por el id',  (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe_ => {

            expect(heroe_).toEqual(heroes[0]);
            done()
        })
        .catch(console.log);
    });

    test('deber retornar el error en caso de que el heroe no exista', (done) => {
        const id = 20;
        getHeroeByIdAsync(id).catch((err)=>{
            expect(err).toBe('No se pudo encontrar el héroe')
            done()
        }
        )
    })
    
    
})
