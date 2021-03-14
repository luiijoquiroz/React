import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('05-Funciones', () => {
    
    test('getUser debe retornar objeto usuario ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);  
    })

    test('getUsuarioActivo debe retornar un usuario activo ', () => {
        
        const nombre = 'Luis';
        const usuarioActivoMock = {
            uid: 'ABC567',
            username: nombre 
        };
        const user = getUsuarioActivo('Luis');
        expect(user).toEqual(usuarioActivoMock);

    })
    
    
})
