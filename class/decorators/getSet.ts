//! "experimentalDecorators": true
interface ICar_get_set
{
  fuel: string;
  open: boolean;
  seats: number;
  isOpen: (msg: string) => 'open' | string
}

// @changeDoorStatus1( false )
// @changeFuelAmount1( 75 )
// @changeSeatsAmount1(11)
class Car_get_set implements ICar_get_set
{
  fuel: string = '30%';
  open: boolean = true;
  seats: number = 4;
  _weight: number = 1000
  isOpen ()
  {
    return this.open ? 'open' : `closed`
  }
  get weight () { return this._weight }
  @changeGetSet()
  set weight(w) { this._weight += w}
}


function changeGetSet ()
{
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor ): PropertyDescriptor | void
  {
    const oldGet = descriptor.get
    const oldSet = descriptor.set
    descriptor.get = function ()
    {
      console.log('Here in the Getter we added a new functional!')
      return oldGet?.apply( this )
    }
    descriptor.set = function (this: any, ...arg: any)
    {
      console.log( `Here in the Setter we added a new functional! With arguments: ${ [ ...arg ] }` )
      return oldSet?.apply(this, arg)
    }

  }
}

const car_get_set = new Car_get_set()
console.log( car_get_set )
car_get_set.weight = 1000
console.log( car_get_set.weight )
console.log( car_get_set )
