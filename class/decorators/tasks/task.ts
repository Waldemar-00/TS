import "reflect-metadata"
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
	@min( 10 )
	@max( 100 )
	height: number;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
		validate( this, 'width', width )
		validate( this, 'length', length )
		validate( this, 'height', height)
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
interface addedProperties  {
	date: Date,
	lastCalculation: string
}
function addDate<T extends {new (...args: any[]):{}}> (constructor: T)
{
	return class extends constructor
	{
		date = new Date().toTimeString()
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
function isInt ()
{
	return function (target: Object, propertyKey: string | symbol)
	{
		Reflect.defineMetadata('isInt', true, target, propertyKey)
	}
}
function min (min: number)
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		Reflect.defineMetadata('min', min, target, propertyKey)
	}
}
function max (max: number)
{
	return function ( target: Object, propertyKey: string | symbol )
	{
		Reflect.defineMetadata('max', max, target, propertyKey)
	}
}

function validate (target: any, propertyKey: string | symbol, value: any): boolean
{
	if ( Reflect.hasMetadata( 'isInt', target, propertyKey ) && !Number.isInteger( value ) )
	{
		throw new Error(`The ${propertyKey.toString()} is not interger!`)
	}
	if ( Reflect.hasMetadata( 'min', target, propertyKey ) && value < Reflect.getMetadata( 'min', target, propertyKey ) )
	{
		throw new Error(`The ${propertyKey.toString()} is smaller than range!`)
	}
	if ( Reflect.hasMetadata( 'max', target, propertyKey ) && value > Reflect.getMetadata( 'max', target, propertyKey ) )
	{
		throw new Error(`The ${propertyKey.toString()} is larger than range`)
	}
	return true
}
function finalValidate (obj: unknown)
{
	if ( obj && typeof obj === 'object' && !Array.isArray( obj ) )
	{
		for ( let key in obj )
		{
			validate(obj, key, obj[ key as keyof typeof obj ] )
		}
	}
}
const container = new ShippingContainer( 10, 90, 30 ) as ICuboid & addedProperties
console.log(container.calcArea())
console.log(container.calcVolume())
container.width = 70
container.width = 11
container.width = 99
finalValidate(container)
console.log( container )
console.log( container.date )
console.log( container.lastCalculation )
console.log( container.width )
