//* TYPE GUARD

function printValue (
  value:
    | string
    | number
    | boolean
)
{
  if ( typeof value === 'string' ) console.log(`The "${value}" is a string`)
  else if ( isNumber(value) ) console.log(value * 5)
  else console.log(!value)
}

printValue( false )
printValue( 'something' )
printValue( 700 )

function isNumber (
  value: unknown
  //* | string
  //* | number
  //* | boolean
): value is number
{
  return typeof value === 'number'
}
//* console.log(isNumber( 100 ))  true
//* console.log(isNumber( false ))  false
//* console.log(isNumber('Sonething'))  false


//* for interface

interface Car_1
{
  engine: string,
  wheels: {
    wheelNumber: number,
    wheelType: string
  }
}
interface Ship
{
  engine: string,
  sail: string
}

const car_1: Car_1 = {
  engine: 'Mersedes-223871',
  wheels: {
    wheelNumber: 4,
    wheelType: 'winter'
  }
}
const ship: Ship = {
  engine: 'BMW',
  sail: 'Two boards'
}

function repairVehcle (
  vehcle:
    | Car_1
    | Ship
)
{
  if ( isCar(vehcle) ) console.log( vehcle.wheels.wheelNumber, vehcle.wheels.wheelType )
  else if ( 'sail' in vehcle ) console.log( vehcle.sail )
  else console.log('No name vehcle');
}

repairVehcle( car_1 )
repairVehcle( ship )

function isCar(
  car:
    | Car_1
    | Ship
): car is Car_1
{
  //* return 'wheels' in car
  return ( car as Car_1 ).wheels !== undefined
  //* return (car as Car_1).wheels.wheelType !== undefined
}
