const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe ('Ship', () => {
    it ('returns an object', () => {
        expect (new Ship()).toBeInstanceOf(Object);
    });
    it ('sets the starting port property', () => {
        const itinerary = new Itinerary('Calais');
        const ship = new Ship(itinerary);

        expect (ship.currentPort).toEqual(itinerary);

    });
});

describe('setSail', () => {
    it ('can set sail', () => {
        const itinerary = new Itinerary('Barcelona');
        const ship = new Ship(itinerary);

        ship.setSail();

        expect (ship.currentPort).toBeFalsy();
    });

});

describe('dock', () => {
    it ('can dock at a different port', () => {
        const newcastle = new Itinerary('Newcastle');
        const ship = new Ship(newcastle);

        const amsterdam = new Itinerary ('Amsterdam');
        ship.dock(amsterdam);

        expect (ship.currentPort).toBe(amsterdam);

    });
});

