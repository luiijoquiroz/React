const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Heroes']; //Export de Manera Individual //Asi se puede
// export const owners = ['DC', 'Heroes']; //Export de Manera Individual //Asi se puede

// export default heroes; //Asi se puede

//Otra forma 
export  {
    heroes as default,
    owners
}