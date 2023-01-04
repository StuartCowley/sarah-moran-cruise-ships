class Ship {
    constructor(itinerary){
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }

    setSail(){
        //if(this.currentPort === (array.length -1)){
            //throw new Error('You have reached the end of your itinerary, please disembark')
        //}
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    dock(){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

        this.currentPort = itinerary.ports[previousPortIndex + 1];
    }

}



module.exports = Ship;