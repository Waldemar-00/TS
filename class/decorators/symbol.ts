//!"experimentalDecorators": true
//? Property decorator

interface House
{
	floors: number | string,
	type: string,
	street: string,
	errors: any
}

class House_333 implements House
{
	@limitFloors2(12)
	floors: number = 22;
	type: string = 'block';
	street: string = 'Williams Street';
	errors: any
}

function limitFloors2 ( floorsLimit: number )
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		//!"TARGET" contains only propery floors: number = 9, with initial value
		//!"propertyKey" contains property key "floors"
		//? console.log(target, "TARGETta")
		let symbol = Symbol('symbol')
		Object.defineProperty( target, propertyKey, {
			enumerable: true,
			configurable: true,
      get: function ( this: any )
      {
        return this[ symbol ]
      },
			set: function ( this: any, gotFloors: number )
			{
				if ( gotFloors >= 0 && gotFloors <= floorsLimit ) this[symbol] = gotFloors
				else
				{
					Object.defineProperty( target, 'errors', {
						enumerable: true,
						configurable: true,
						writable: true,
						value: 'The floors amount is out of range!!!'
					} )
				}
			}
		})
	}
}

const house_333 = new House_333() //! Created new class instance without property "floors"!!!!!!!!!!!!!!!!!
// console.log( house_333 ) //! { type: 'block', street: 'Williams Street' }
//! BUT property FLOORS placed in the prototype with initial value
console.log(house_333)
console.log( house_333.floors )
if( house_333.errors ) console.log( house_333.errors )

house_333.floors = 29
console.log( house_333.floors )
if( house_333.errors ) console.log( house_333.errors )
house_333.floors = 10
console.log(house_333)
console.log( house_333.floors, "Floors after set" )

const clone = Object.assign( {}, house_333 )
console.log(clone)