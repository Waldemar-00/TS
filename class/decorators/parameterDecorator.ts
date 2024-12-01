import "reflect-metadata"
let reflectKey = Symbol('limit')
interface ITravel
{
  country: string;
  season: string;
  duration: number | string
}

class Travel implements ITravel
{
  country: string = 'Germany';
  season: string = 'summer';
  duration: number = 14;
  @validate
  startTravel ( @limit passengers: number )
  {
    console.log(`Amount of passengers is ${passengers}`)
  }
}
//! decorator for a parameter
function limit (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
)
{
  let indexesOfparameters: number[] = Reflect.getOwnMetadata( reflectKey, target, propertyKey ) || []
  indexesOfparameters.push( parameterIndex ) //! Without properties - ONLY indexes of parameters
  Reflect.defineMetadata(reflectKey, indexesOfparameters, target, propertyKey)


  //* console.log( Reflect.getOwnMetadata( 'design:type', target, propertyKey ) )
  //* console.log( Reflect.getOwnMetadata( 'design:paramtypes', target, propertyKey ) )
  //* console.log( Reflect.getOwnMetadata( 'design:returntype', target, propertyKey ) )
}
//! decorator for a method

function validate (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor //! It is object about property( propertyKey ): enumerable, writable, configurable and VALUE!
)
{
  //* console.log( descriptor )
  //* console.log(propertyKey)

  let oldMethod = descriptor.value
  descriptor.value = function (...args: any)
  {
    let indexesOfparameters: number[] = Reflect.getOwnMetadata( reflectKey, target, propertyKey )
    if ( indexesOfparameters )
      {
        for ( let index of indexesOfparameters ) //!limitsParameters contains only indexes
        {
          if ( args[ index ] > 0 && args[ index ] < 11 )
          {
            console.log( 'Validate has been done!' )
            return oldMethod?.apply( this, args )
          }
          else console.log( "Validate has been failed!" )
        }
      }
  }
}
const travel = new Travel()
travel.startTravel( 10 )
travel.startTravel( 12 )
travel.startTravel(0)