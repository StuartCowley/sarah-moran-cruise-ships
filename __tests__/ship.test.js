const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe ('Ship', () => {
    it ('returns an object', () => {
        const port = new Port('Dublin');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect (ship).toBeInstanceOf(Object);
    });
    it ('sets the starting port property', () => {
        const port = new Port ('Amsterdam');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect (ship.currentPort).toBe(port);

    });
});

describe('setSail', () => {
    it ('can set sail from a starting port', () => {
        const port = new Port ('Barcelona')
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect (ship.currentPort).toBeFalsy();
        //expect (ship.previousPort).toBe(itinerary);
    });

});

describe('dock', () => {
    it ('can dock at a different port', () => {
        const newcastle = new Port ('Newcastle');
        const amsterdam = new Port ('Amsterdam');
        const itinerary = new Itinerary ([newcastle, amsterdam]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect (ship.currentPort).toBe(amsterdam);

    });
});

