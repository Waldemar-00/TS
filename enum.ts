//* readonly properties in the enum literal

enum Cars
{
  Audi = 'Audi',
  BMW = 'BMW',
  Ford = 'Ford',
  Mersedes = 'Mersedes',
}
let audi = Cars.Audi
audi = Cars.Mersedes
//! readonly
//*Cars.Mersedes = 'Porsh' - Error
//! readonly
console.log(Cars);

//* string literal
const greeting: "Hello" = "Hello" // being const
const otherGreeting: "Hello John" = "Hello John" // being const
function printGreeting ( str: "Hello" | "Hello John"): void
{
  console.log(str);

}
printGreeting( greeting )
printGreeting( otherGreeting )

//* number literal

const number: 100 = 100
const number_1: 1000 = 1000
function printNumber (number: 100 | 1000)
{
  console.log(number);

}
printNumber(number)
printNumber( number_1 )
// printNumber(2000) it will not work

//* boolean literal

const yes: true = true
const no: false = false

function boolFn ( bool: true | false)
{
  console.log(bool);
}

boolFn( yes )
boolFn( no )

//* unique symbol
//! only CONST
const unSym: unique symbol = Symbol.for( 'some symbol' )
//! only CONST
//* Below they not work:
//? let unSym_let: unique symbol = Symbol.for( 'let symbol' )
//? var unSym_var: unique symbol = Symbol.for('var symbol')
//* Above they not work ^
//* if in the class you need write PUBLIC STATIC READONLY

function uniqueSymbol ( sym: typeof unSym )
{
  console.log(sym.description);
}
uniqueSymbol( unSym )
//* uniqueSymbol( Symbol('some symbol') ) not works
//* uniqueSymbol(Symbol('some symbol')) not works