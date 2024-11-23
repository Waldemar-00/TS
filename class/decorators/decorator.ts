interface ICar_00
{
  fuel: string;
  open: boolean;
  seats: number;
  isOpen: () => 'open' | 'closed'
}
//! decorator factory

@changeDoorStatus( false )
@changeFuelAmount( 90 )
@changeSeatsAmount(7)
class Car_00 implements ICar_00
{
  fuel: string = '30%';
  open: boolean =  true;
  seats: number =  4;
  isOpen ()
  {
    return this.open ? 'open' : 'closed'
  }
}
function changeDoorStatus ( status: boolean )
{
  return function <T extends {new (...arg: any[]): {}}> ( constructor: T)
  {
    return class extends constructor
    {
      open = status
    }
  }
}
function changeFuelAmount ( fuel: number )
{
  return function <T extends { new( ...arg: any[] ): {} }> ( constructor: T )
  {
    return class extends constructor
    {
      fuel = `${fuel}%`
    }
  }
}
function changeSeatsAmount ( seats: number )
{
  return function <T extends { new( ...arg: any[] ): {} }> ( constructor: T )
  {
    return class extends constructor
    {
      seats = seats
    }
  }
}
const car_00 = new Car_00()
console.log( car_00.isOpen(), car_00.fuel, car_00.seats, car_00 )