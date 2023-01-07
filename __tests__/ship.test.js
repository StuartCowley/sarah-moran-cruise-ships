const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe ('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let newcastle;
        let amsterdam;
        let itinerary;
        
    beforeEach(() => {
        newcastle = new Port ('Newcastle');
        amsterdam = new Port ('Amsterdam');
        itinerary = new Itinerary ([newcastle, amsterdam]);
        ship = new Ship(itinerary);

        });
        it ('returns an object', () => {
            expect (ship).toBeInstanceOf(Object);
        });

        it ('sets the starting port property', () => {
            expect (ship.currentPort).toBe(newcastle);
        });

        it ('gets added to port on instantiation', () => {
            expect(ship.currentPort.ships).toContain(ship);
        });

        it ('can set sail from a starting port', () => {
  
            ship.setSail();
    
            expect (ship.currentPort).toBeFalsy();
            expect (newcastle.ships).not.toContain(ship);
            //expect (ship.previousPort).toBe(itinerary);
        });
    });
});

describe('setSail', () => {
  
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
        expect(ship.currentPort.ships).toContain(ship);

    });
});

