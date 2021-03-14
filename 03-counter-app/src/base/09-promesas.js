import { getHeroeById } from './08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () =>  {
//         // Tarea
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve( p1 );
//         // reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )
// });
// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

export const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
        setTimeout( () =>  {
            // Tarea
            // importen el 
            const H = getHeroeById( id );
            if (H) {
                resolve( H );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1500 )
    
    });
}

// getHeroeByIdAsync(1)
// .then( console.log )
// .catch( console.warn );