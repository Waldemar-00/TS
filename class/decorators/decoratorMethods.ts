interface ICar_01
{
  fuel: string;
  open: boolean;
  seats: number;
  isOpen: (msg: string) => 'open' | string
}

// @changeDoorStatus1( false )
// @changeFuelAmount1( 75 )
// @changeSeatsAmount1(11)
class Car_01 implements ICar_01
{
  fuel: string = '30%';
  open: boolean = true;
  @limitSeatsDecorator(1)
  seats: number = 4;
  @printFuelInformation
  isOpen (msg: string)
  {
    return this.open ? 'open' : `closed: ${msg}`
  }
}
//! property decorators

function limitSeatsDecorator ( limit: number )
{
  return function ( target: Object, propertyKey: string | symbol ): void
  {
    let value: number
    Object.defineProperty( target, propertyKey, {
      get: () => value,
      set: ( newNumber: number) => ( value >= 0 && value <= limit ) ? value = newNumber : console.log('The number is out of range!')
    })
  }
}
//! Decorated the additional methods
function printFuelInformation (
    context: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void //! now we will have void
  {
    const oldFn = descriptor.value
    descriptor.value = function (this: any, ...arg: any[]) //! second => this: any
    {
      console.log( 'I changed method isOpen' )
      console.log(this.fuel) //! this: any => here
      return oldFn.apply(this, arg)
      // return this.open ? 'open' : 'closed' //! second method
    }
  }
//! "experimentalDecorators": false
// function printFuelInformation ( constructor: any, context: ClassMethodDecoratorContext )
//   {
//     return function (this: any, ...arg: any[]) //! second => this: any
//     {
//       console.log( 'I changed method isOpen' )
//       console.log(this.fuel) //! this: any => here
//       return constructor.apply(this, arg)
//     }
// }
  // function printFuelInformation<T, A extends any[], R> ( constructor: (this: T, ...args: A) => R, context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R >)
  // {
  //   return function (this: T, ...args: A): R //! second => this: any
  //   {
  //     console.log( 'I changed method isOpen' )
  //     console.log( `${ String( context.name ) } was started` )
  //     // console.log( this.fuel) //! error of type
  //     return constructor.apply(this, args)
  //   }
  // }
//? @printFuelInformation
//?   isOpen (msg: string)
//?   {
//?     return this.open ? 'open' : `closed: ${msg}`
//?   }
function changeDoorStatus1 ( status: boolean )
{
  return function <T extends { new( ...arg: any[] ): {} }> ( target: T )
  //? SECOND ARGUMENT => context: ClassDecoratorContext<T>
  {
    return class extends target
    {
      open = status
    }
  }
}
function changeFuelAmount1 ( fuel: number )
{
  return function <T extends { new( ...arg: any[] ): {} }> ( target: T )
  //? SECOND ARGUMENT => context: ClassDecoratorContext<T>
  {
    return class extends target
    {
      fuel = `${fuel}%`
    }
  }
}
function changeSeatsAmount1 ( seats: number )
{
  return function <T extends { new( ...arg: any[] ): {} }> ( target: T )
  //? SECOND ARGUMENT => context: ClassDecoratorContext<T>
  {
    return class extends target
    {
      seats = seats
    }
  }
}
const car_01 = new Car_01()
console.log( car_01.isOpen('for a long time'), car_01.fuel, car_01.seats )
console.log( car_01 )
//! example