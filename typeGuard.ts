//* TYPE GUARD

// function printValue (
//   value:
//     | string
//     | number
//     | boolean
// )
// {
//   if ( typeof value === 'string' ) console.log(`The "${value}" is a string`)
//   else if ( isNumber(value) ) console.log(value * 5)
//   else console.log(!value)
// }

// printValue( false )
// printValue( 'something' )
// printValue( 700 )

// function isNumber (
//   value: unknown
//   //* | string
//   //* | number
//   //* | boolean
// ): value is number
// {
//   return typeof value === 'number'
// }
//* console.log(isNumber( 100 ))  true
//* console.log(isNumber( false ))  false
//* console.log(isNumber('Sonething'))  false


//* for interface

interface Car_1
{
  entity: 'car',
  engine: string,
  wheels: {
    wheelNumber: number,
    wheelType: string
  }
}
interface Ship
{
  entity: 'ship',
  engine: string,
  sail: string
}
interface Airplane
{
  entity: 'airplane', //* literal
  engine: string,
  wings: string
}
interface newVehicle
{
  entity: 'smth',
  engine: string,
  detail: string
}

type Vehicle = Car_1 | Ship | Airplane | newVehicle

const car_1: Car_1 = {
  entity: 'car',
  engine: 'Mersedes-223871',
  wheels: {
    wheelNumber: 4,
    wheelType: 'winter'
  }
}
const ship: Ship = {
  entity: 'ship',
  engine: 'BMW',
  sail: 'Two boards'
}
const airplane: Airplane = {
  entity: 'airplane', //* literal
  engine: 'Ford-7865',
  wings: 'Star-line'
}
const newVehicle: newVehicle = {
  entity: 'smth',
  engine: 'XV-876',
  detail: 'Double wing'
}

function repairvehicle (vehicle: Vehicle):(string|number)[]
{
  // if ( isCar(vehicle) ) return vehicle.wheels.wheelNumber
  // else if ( 'sail' in vehicle ) return vehicle.sail
  // else return vehicle //* never
  switch (vehicle.entity) {
    case 'car':
      return [vehicle.wheels.wheelNumber, vehicle.wheels.wheelType]
    case 'ship':
      return [vehicle.sail]
    case 'airplane':
      return [vehicle.wings]
    case 'smth':
      return [vehicle.detail]
    default:
      const smth: never = vehicle //* The never will work if you add a new vehicle, because the types will not be the same. And you see the Error. It's custom TYPE GUARD.
      return smth
  }
}

console.log( ...repairvehicle( car_1 ) )
console.log( ...repairvehicle( ship ) )
console.log( ...repairvehicle( airplane ) )
console.log( ...repairvehicle( newVehicle ) )

function isCar(car: Vehicle): car is Car_1
{
  //* return 'wheels' in car
  return ( car as Car_1 ).wheels !== undefined
  //* return (car as Car_1).wheels.wheelType !== undefined
}
