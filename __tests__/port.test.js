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