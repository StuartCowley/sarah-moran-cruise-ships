const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship');

describe('Itinerary', () => {
    it('returns an object', () => {
        expect (new Itinerary()).toBeInstanceOf(Object);
    });
    it ('sets the ports property of the itinerary', () => {
        const amsterdam = jest.fn();
        const newcastle = jest.fn();       
        const itinerary = new Itinerary([amsterdam, newcastle]);
        expect (itinerary.ports).toEqual([amsterdam, newcastle]);
    });

});