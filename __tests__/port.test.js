const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');

describe('Port', () => {
    it ('can be instantiated', () => {
        expect (new Port()).toBeInstanceOf(Object);
    });
    it ('sets the name property of the port', () => {
        const port = new Port ('Dover')
        expect (port.name).toBe('Dover');
    });
});

describe('addShip', () => {
    it ('adds the docking ship to the ships in the port', () => {
        const barca = new Port ('Barcelona');
        const ship = {};

        
        barca.addShip(ship);

        expect(barca.ships).toContain(ship);

    });

});

describe('removeShip', () => {
    it ('removes a ship leaving the port', () => {

    
    const mallorca = new Port ('Mallorca');
    const mayflower = {};
    const titanic = {};

    mallorca.addShip(mayflower);
    mallorca.addShip(titanic);
    mallorca.removeShip(titanic);

    expect(mallorca.ships).toEqual([mayflower]);
});
}); 