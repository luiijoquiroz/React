import '@testing-library/jest-dom';
import { getHeroeById,getHeroeByOwner, getHeroesByOwner } from '../../base/08-imp-exp';
import  heroes,{ owners} from '../../base/database/heroes';

describe('test 08-imp-exp >', () => {
    
    test('debe retornar objeto heroe con sus propiedades filtrado por su id', () => {
        const _id = 1;
        const heroe = getHeroeById(_id);
        const {id, name, owner} = heroe;
        const heroeData = heroes.find(h => h.id == _id)

        expect(typeof id).toBe('number');
        expect(typeof name).toBe('string');
        expect(typeof owner).toBe('string');
        
        expect(heroe).toEqual(heroeData)
    })

    test('debe retornar undefined  al ingresar id inexistente ', () => {
        const _id = 20;
        const heroe = getHeroeById(_id);
      
        const heroeData = heroes.find(h => h.id == _id)

        expect(heroe).toEqual(heroeData)
    })
    
    test('debe retornar un heroe con sus propiedades discriminado por su owner', () => {
        const _owner = 'DC';
        const heroe = getHeroeByOwner(_owner);
        
        const heroeData = heroes.find(h => h.owner == _owner)
        
        expect(heroe).toEqual(heroeData)

    })

    test('debe retornar un arreglo con los héroes de DC', () => {
        const _owner = 'DC';
        const heroesDC = getHeroesByOwner(_owner);
        const _heroes = heroes.filter((h)=> h.owner === _owner )

        expect(heroesDC).toEqual(_heroes);

    })

    test('debe retornar un arreglo con los héroes de Marvel', () => {
        const _owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(_owner);
        const _heroes = heroes.filter((h)=> h.owner === _owner )
        
        expect(heroesMarvel).toEqual(_heroes);
        expect(heroesMarvel.length).toEqual(2);

    })
    
})

// {
//     id: 1,
//     name: 'Batman',
//     owner: 'DC'
// },
// {
//     id: 2,
//     name: 'Spiderman',
//     owner: 'Marvel'
// },
// {
//     id: 3,
//     name: 'Superman',
//     owner: 'DC'
// },
// {
//     id: 4,
//     name: 'Flash',
//     owner: 'DC'
// },
// {
//     id: 5,
//     name: 'Wolverine',
//     owner: 'Marvel'
// },