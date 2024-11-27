let symbol = Symbol()

const user_777 = {
  name: 'Roman',
  age: 26,
  [symbol]: ''
}
user_777[ symbol ] = 'little secret'

console.log( user_777[ symbol ] )

let globalSymbol_777 = Symbol.for( 'GLOBAL' )
user_777[ globalSymbol_777 ] = 'global SECRET'
console.log( user_777[ globalSymbol_777 ] )
const GSymbol = Symbol.for( 'GLOBAL' )
console.log( GSymbol === globalSymbol_777 )