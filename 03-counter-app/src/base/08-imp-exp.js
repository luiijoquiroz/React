// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../base/database/heroes';
// console.log( owners );

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

const getHeroeByOwner = ( owner ) => heroes.find( (heroe) => heroe.owner === owner );

// find?, filter
const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

export { getHeroeById,
         getHeroeByOwner,
         getHeroesByOwner }
// console.log( getHeroesByOwner('Marvel') );


