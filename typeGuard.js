//* TYPE GUARD
var car_1 = {
    entity: 'car',
    engine: 'Mersedes-223871',
    wheels: {
        wheelNumber: 4,
        wheelType: 'winter'
    }
};
var ship = {
    entity: 'ship',
    engine: 'BMW',
    sail: 'Two boards'
};
var airplane = {
    entity: 'airplane', //* literal
    engine: 'Ford-7865',
    wings: 'Star-line'
};
var newVehicle = {
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
            var smth = vehicle; //* The never will work if you add a new vehicle, because the types will not be the same. And you see the Error. It's custom TYPE GUARD.
            return vehicle;
    }
}
console.log.apply(console, repairvehicle(car_1));
console.log.apply(console, repairvehicle(ship));
console.log.apply(console, repairvehicle(airplane));
console.log.apply(console, repairvehicle(newVehicle));
function isCar(car) {
    //* return 'wheels' in car
    return car.wheels !== undefined;
    //* return (car as Car_1).wheels.wheelType !== undefined
}
