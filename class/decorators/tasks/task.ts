// import "reflect-metadata"
interface ICuboid
{
	width: number;
	length: number;
	height: number;
	calcArea: (multiply?: number) => number;
	calcVolume: (multiply?: number) => number;
}
@addDate
class ShippingContainer implements ICuboid {
	@isInt()
	@min( 10 )
	@max( 100 )
	width: number;

	@isInt()
	@min( 10 )
	@max( 100 )
	length: number;

	@isInt()
	@min( 1 )
	@max( 10 )
	height: number;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
	}
	@lastCalculation('calcArea')
	calcArea(multiply?: number): number {
		return this.width * this.length * (multiply ? multiply : 1);
	}
	@lastCalculation('calcVolume')
	calcVolume(multiply?: number) {
		return this.width * this.length * this.height * (multiply ? multiply : 1);
	}
}
function addDate<T extends {new (...args: any[]):{}}> (constructor: T)
{
	return class extends constructor
	{
		date = new Date().toTimeString()
	}
}
function isInt ()
{
	return function (target: Object, propertyKey: string | symbol)
	{
		let value: number
		function getter ()
		{
			return value
		}
		function setter ( newNumber: number )
		{
			if ( Number.isInteger( newNumber ) ) value = newNumber
			else console.log('The number is not integer')
		}
		Object.defineProperty( target, propertyKey, {
			enumerable: true,
			configurable: true,
			get: getter,
			set: setter
		})
	}
}
function min (min: number)
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		let value: number
		function getter ()
		{
			return value
		}
		function setter ( newNumber: number  )
		{
			if ( newNumber >= min ) value = newNumber
			else console.log(`The number must be smaller or equal to the minimum: ${min}`)
		}
		Object.defineProperty( target, propertyKey, {
			enumerable: true,
			configurable: true,
			get: getter,
			set: setter
		})
	}
}
function max (max: number)
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		let value: number
		function getter ()
		{
			return value
		}
		function setter ( newNumber: number )
		{
			if ( newNumber <= max ) value = newNumber
			else console.log(`The number must be smaller or equal the maximum: ${max}`)
		}
		Object.defineProperty( target, propertyKey, {
			enumerable: true,
			configurable: true,
			get: getter,
			set: setter
		})
	}
}
function lastCalculation (method: string)
{
	return function ( target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor )
	{
		let oldMethod = descriptor.value
		descriptor.value = function (this: any)
		{
			this.lastCalculation = `The last calculation of method ${method[0].toLocaleUpperCase() + method.slice(1)} was at ${new Date()}`
			//* return oldMethod.apply( this, arguments ) or below
			return oldMethod.apply( this )
		}
	}
}
const container = new ShippingContainer( 20, 500, 30 );
console.log(container.calcArea())
console.log(container.calcVolume())
container.width = 11.5
container.width = 9
container.width = 112
console.log( container )
console.log( container.width )
console.log( container.length )
console.log( container.height )
