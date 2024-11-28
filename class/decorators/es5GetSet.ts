//! "experimentalDecorators": false
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
class Car_get_set_es5 implements ICar_get_set
{
  fuel: string = '30%';
  open: boolean = true;
  seats: number = 4;
  _weight: number = 1000
  isOpen ()
  {
    return this.open ? 'open' : `closed`
  }
  @changeGetEs5
  get weight () { return this._weight }
  @changeSetEs5
  set weight(w) { this._weight += w}
}


function changeGetEs5<T, R> (  target: (this: T) => R, context: ClassGetterDecoratorContext<T, number> )
  {
   return function (this: any): R
    {
      console.log('Here in the Getter we added a new functional!')
      return target.apply(this)
    }
  }
function changeSetEs5<T, R> ( target: ( this: T, value: number ) => R, context: ClassSetterDecoratorContext<T, number> )
  {
    return function (this: T, ...args: any): R
      {
        console.log('Here in the Setter we added a new functional!')
        return target.apply( this, args )
      }
  }


const car_get_set_es5 = new Car_get_set_es5()
console.log( car_get_set_es5 )
car_get_set_es5.weight = 1000
console.log( car_get_set_es5.weight )
console.log( car_get_set_es5 )
