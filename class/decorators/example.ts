//!"experimentalDecorators": true
//? Property decorator

interface House
{
	floors: number | string,
	type: string,
	street: string,
	errors: any
}

class House_332 implements House
{
	@limitFloors(12)
	floors: number = 22;
	type: string = 'block';
	street: string = 'Williams Street';
	errors: any
}

function limitFloors ( floorsLimit: number )
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		//!"TARGET" contains only propery floors: number = 9, with initial value
		//!"propertyKey" contains property key "floors"
		//? console.log(target, "TARGETta")
		let value: number //! Value gets his asset in the set function after validation
		Object.defineProperty( target, propertyKey, {
			enumerable: true,
			configurable: true,
			get:() => value,
			set: ( gotFloors: number ) =>
			{
				if ( gotFloors >= 0 && gotFloors <= floorsLimit ) value = gotFloors
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

const house_332 = new House_332() //! Created new class instance without property "floors"!!!!!!!!!!!!!!!!!
// console.log( house_332 ) //! { type: 'block', street: 'Williams Street' }
//! BUT property FLOORS placed in the prototype with initial value
console.log(house_332)
console.log( house_332.floors )
if( house_332.errors ) console.log( house_332.errors )

house_332.floors = 29
console.log( house_332.floors )
if( house_332.errors ) console.log( house_332.errors )
house_332.floors = 10
console.log(house_332)
console.log( house_332.floors, "Floors after set" )