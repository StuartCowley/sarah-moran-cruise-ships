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
    it ('gets added to port on instantiation', () => {
        const port = new Port ('Dublin');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort.ships).toEqual([ship]);

    });
});

describe('setSail', () => {
    it ('can set sail from a starting port', () => {
        const barca = new Port ('Barcelona');
        const ibiza = new Port ('Ibiza');
        const itinerary = new Itinerary([barca,ibiza]);
        const ship = new Ship(itinerary);

        ship.setSail();

        //expect (ship.currentPort.ships).not.toEqual();
        expect (ship.currentPort).toBeFalsy();
        //expect (ship.previousPort).toBe(itinerary);
    });
    it ('throws an error if you try to sail past the last port in the itinerary', () => {
        const newcastle = new Port ('Newcastle');
        const amsterdam = new Port ('Amsterdam');
        const itinerary = new Itinerary ([newcastle, amsterdam]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('You have reached the end of your itinerary, please disembark');
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
    it('contains the Ship instance in the current port', () => {
        const miraflores = new Port ('Miraflores');
        const huanchaco = new Port('Huanchaco');
        const itinerary = new Itinerary([miraflores, huanchaco]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort.ships).toEqual([ship]);

    });
});

