
class Port {
    constructor(name){
        this.name = name;
        this.ships = []
    }

    addShip(shipName){
        this.ships.push(shipName)
    }

    removeShip(shipName){
        delete this.ships[shipName];
    }
}

module.exports = Port;