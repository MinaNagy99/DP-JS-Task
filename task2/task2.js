class Shipment  
{
    constructor(pickUpDate , deliveryDate , commodities , shipFrom , shipTo){
        this.pickUpDate = pickUpDate;
        this.deliveryDate = deliveryDate;
        this.commodities = commodities;
        this.shipFrom = shipFrom;
        this.shipTo = shipTo;

    }
}
class PlayGroundShipment extends Shipment
{
    constructor(pickUpDate , deliveryDate , commodities , shipFrom , shipTo){
        super(pickUpDate , deliveryDate , commodities , shipFrom , shipTo)
    }
}
class AirShipment extends Shipment
{
    constructor(pickUpDate , deliveryDate , commodities , shipFrom , shipTo){
        super(pickUpDate , deliveryDate , commodities , shipFrom , shipTo)
        this.TransportationMethod = 'Air'
    }
}
class Shiper 
{
    constructor(){
        this.allShipment=[]
    }

    chooseShipment(shipment){
        this.allShipment.push(shipment)
        console.log(this.allShipment);
    }


}

const shiperOne = new Shiper()


const shipmentOne = new PlayGroundShipment(2022,2023,'Foods','ahmed','Gmal')
const shipmentTwo = new AirShipment(2022,2023,'Drinks','Walid','MIna')

shiperOne.chooseShipment(shipmentTwo)
shiperOne.chooseShipment(shipmentOne)
