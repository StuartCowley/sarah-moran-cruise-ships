const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe ('Ship', () => {
    it ('returns an object', () => {
        expect (new Ship()).toBeInstanceOf(Object);
    });
    it ('sets the starting port property', () => {
        const port = new Port('Calais');
        const ship = new Ship(port);

        expect (ship.currentPort).toEqual(port);

    });
});

describe('setSail', () => {
    it ('can set sail', () => {
        const port = new Port('Barcelona');
        const ship = new Ship(port);

        ship.setSail();

        expect (ship.currentPort).toBeFalsy();
    });

});

describe('dock', () => {
    it ('can dock at a different port', () => {
        const newcastle = new Port('Newcastle');
        const ship = new Ship(newcastle);

        const amsterdam = new Port('Amsterdam');
        ship.dock(amsterdam);

        expect (ship.currentPort).toBe(amsterdam);

    });
});

