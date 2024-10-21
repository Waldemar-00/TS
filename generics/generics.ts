//! function print<Type> ( arg: Type ): Type
//!   return arg
//! }
//* console.log( print<number>( 10 ) )
//* console.log( print( 10 ) )
//* console.log(print<number[]>([1, 10]) )
//* console.log( print<string>( 'TEN' ) )
//* console.log( print<string[]>( [ 'one', 'two' ] ) )

//* console.log( print<object>( { a: '1', b: '2' } ) )
//* console.log( print<FormData>( new FormData() ) )
//* console.log( print<Function>( () => 'Fn' ) )

//! let newPrint: <Type> ( arg: Type ) => Type = print
//* let newPrint_1: <Type> ( arg: Type ) => Type = newPrint
//* console.log( newPrint( 100 ), newPrint.name ) //* 100 print
//* console.log(newPrint_1.name) //* print


//! With interface
//* interface PrintInt { <Type>( arg: Type ): Type }
//* function print <Type> ( arg: Type ): Type {
//*    return arg
//*  }
// //* let newPrint: ( arg: number ) => number = print
// //* console.log( newPrint( 1001 ) ) //* ( arg: number ) => number
// //* console.log(print<string>('1001')) //* print<Type> ( arg: Type ): Type

//* let newPrint: { <Type> ( arg: Type ): Type } = print
//* let newPrint: PrintInt = print
//* console.log( newPrint<1001>( 1001 ) )
//* console.log(newPrint<number>(1001))

// interface PrintInt<Type>{ ( arg: Type ): Type }

// function print <Type> ( arg: Type ): Type {
//    return arg
// }

// let newPrint: PrintInt<number> = print
// console.log( newPrint( 1001 ) )
// console.log(newPrint('1001')) //! Argument of type 'string' is not assignable to parameter of type 'number'

//!A limit interface

interface Length
{
  length: number;
}

function printArr<Type extends Length> ( arg: Type ): Type
{
  console.log(arg.length)
  return arg
}
// printArr<number[]>( [ 1, 2, 3, 4, 5, 6, 7 ] )
// printArr<string[]>( [ 'str', 'a', 'b', 'c', 'd', 'e' ] )
// printArr({length: 100})

//! A limit Key, keyof Type

function getValueByKey<Type, Key extends keyof Type> ( obj: Type, key: Key ): Type[Key]
{
  return obj[key]
}
const obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(getValueByKey(obj, 'c'))
// console.log(getValueByKey(obj, 'sd')) Argument of type '"sd"' is not assignable to parameter of type '"c" | "a" | "b"'.


//! Generalization


interface PrintNumber
{
  key: number
}

interface PrintString
{
  key: string
}

//? Instead of previous ones

interface Print<Type>
{
  key: Type
}
const stringPrint: Print<string> = {
  key: 'string',
}
const numberPrint: Print<number> = {
  key: 100678
}
function printType<Type> (arg: Type): Type
{
  return arg
}
console.log( printType( stringPrint ) )
console.log(printType(numberPrint))
