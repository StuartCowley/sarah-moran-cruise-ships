const Ship = require('../src/ship');

describe ('constructor', () => {
    it ('returns an object', () => {
        expect (new Ship ('Titanic')).toBeInstanceOf(Object);
    });
    it ('sets the starting port property', () => {
        const ship = new Ship('Southampton')
        expect (ship.start).toEqual('Southampton');

    })
});

describe('setSail', () => {
    it ('can set sail', () => {
        const ship = new Ship('Heysham')

        ship.setSail();

        expect (ship.startingPort).toBeFalsy();
    });

});