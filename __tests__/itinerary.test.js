const Itinerary = require('../src/itinerary');

describe('Itinerary', () => {
    it('returns an object', () => {
        expect (new Itinerary()).toBeInstanceOf(Object);
    });
    it ('sets the ports property of the itinerary', () => {
        const itinerary = new Itinerary('Dublin');
        expect (itinerary.ports).toBe('Dublin');
    });

});