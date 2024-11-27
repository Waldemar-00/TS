//!"experimentalDecorators": false
//? Property decorator

interface House
{
	floors: number | string,
	type: string,
	street: string,
	errors: any
}

class House_334 implements House
{
	@limitFloors3(12)
	floors: number = 2;
	type: string = 'block';
	street: string = 'Williams Street';
	errors: any
}

function limitFloors3 ( floorsLimit: number )
{
	return function ( target: undefined, context:  ClassFieldDecoratorContext)
	{
    return function (gotFloors: number)
      {
      if ( gotFloors >= 0 && gotFloors <= floorsLimit ) return gotFloors
      else throw new Error('The floors amount is out of range!')
      }

		}
	}

const house_334 = new House_334()
console.log(house_334)
house_334.floors = 29
console.log( house_334.floors, 'set - 29' )
house_334.floors = 10
console.log( house_334.floors, "Floors after set 10" )