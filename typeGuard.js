//* TYPE GUARD
function printValue(value) {
    if (typeof value === 'string')
        console.log("The \"".concat(value, "\" is a string"));
    else if (isNumber(value))
        console.log(value * 5);
    else
        console.log(!value);
}
printValue(false);
printValue('something');
printValue(700);
function isNumber(value
//* | string
//* | number
//* | boolean
) {
    return typeof value === 'number';
}
var car_1 = {
    engine: 'Mersedes-223871',
    wheels: {
        wheelNumber: 4,
        wheelType: 'winter'
    }
};
var ship = {
    engine: 'BMW',
    sail: 'Two boards'
};
function repairVehcle(vehcle) {
    if (isCar(vehcle))
        console.log(vehcle.wheels.wheelNumber, vehcle.wheels.wheelType);
    else if ('sail' in vehcle)
        console.log(vehcle.sail);
    else
        console.log('No name vehcle');
}
repairVehcle(car_1);
repairVehcle(ship);
function isCar(car) {
    //* return 'wheels' in car
    return car.wheels !== undefined;
    //* return (car as Car_1).wheels.wheelType !== undefined
}
