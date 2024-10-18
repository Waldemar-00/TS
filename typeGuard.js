"use strict";
//* TYPE GUARD
const car_1 = {
    entity: 'car',
    engine: 'Mersedes-223871',
    wheels: {
        wheelNumber: 4,
        wheelType: 'winter'
    }
};
const ship = {
    entity: 'ship',
    engine: 'BMW',
    sail: 'Two boards'
};
const airplane = {
    entity: 'airplane', //* literal
    engine: 'Ford-7865',
    wings: 'Star-line'
};
const newVehicle = {
    entity: 'smth',
    engine: 'XV-876',
    detail: 'Double wing'
};
function repairvehicle(vehicle) {
    // if ( isCar(vehicle) ) return vehicle.wheels.wheelNumber
    // else if ( 'sail' in vehicle ) return vehicle.sail
    // else return vehicle //* never
    switch (vehicle.entity) {
        case 'car':
            return [vehicle.wheels.wheelNumber, vehicle.wheels.wheelType];
        case 'ship':
            return [vehicle.sail];
        case 'airplane':
            return [vehicle.wings];
        case 'smth':
            return [vehicle.detail];
        default:
            const smth = vehicle; //* The never will work if you add a new vehicle, because the types will not be the same. And you see the Error. It's custom TYPE GUARD.
            return smth;
    }
}
console.log(...repairvehicle(car_1));
console.log(...repairvehicle(ship));
console.log(...repairvehicle(airplane));
console.log(...repairvehicle(newVehicle));
function isCar(car) {
    //* return 'wheels' in car
    return car.wheels !== undefined;
    //* return (car as Car_1).wheels.wheelType !== undefined
}
