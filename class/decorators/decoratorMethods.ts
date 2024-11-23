interface ICar_01
{
  fuel: string;
  open: boolean;
  seats: number;
  isOpen: (msg: string) => 'open' | string
}

@changeDoorStatus1( false )
@changeFuelAmount1( 75 )
@changeSeatsAmount1(11)
class Car_01 implements ICar_01
{
  fuel: string = '30%';
  open: boolean =  true;
  seats: number = 4;
  @printFuelInformation
  isOpen (msg: string)
  {
    return this.open ? 'open' : `closed: ${msg}`
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