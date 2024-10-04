//*Union

// let something: string | number | boolean = 100;
// //console.log(typeof something);
// something = 'str'
// //console.log(typeof something);

// let someArray: string[] | number[] = [ 1, 2, 3, 4, 5 ]
// someArray = [ 'a', 'b', 'c', 'd', 'e' ]
//console.log(someArray);
//! let otherArray: (string[] | number[]) = [1, 2, 3, 4, 5, 'a', 'b', 'c']
//!                                                    not work

// someMsg('Hello')
// someMsg(47)

// function someMsg ( msg:
//   | string
//   | number
// ): void
// {
//   if ( typeof msg === 'string' ) console.log( msg.toUpperCase() )
//   else console.log( msg.toExponential() )
//   console.log(msg);

// }


//* Union array

// someMsg(['Hello', 'Bro'])
// someMsg( 47 )
// function someMsg ( msg:
//   | string[]
//   | number
// ): void
// {
//   if ( Array.isArray(msg) ) console.log(`${msg[0]}, ${msg[1]}`)
//   else console.log( msg.toExponential() )
//   console.log(msg);
// }

//* Union array, common methods

// useCommonMethods([1, 2, 3, 4, 5, 6, 7, 8, 9])
// useCommonMethods ('Some string')
// function useCommonMethods ( a: number[] | string)
// {
//   console.log(a.slice(0, 5));
// }

//* Union object with in operator

// checkProperty( { msg: "No tax in this month" } )
// checkProperty({tax: 172})
// function checkProperty ( obj: { msg: string } | { tax: number } )
// {
//   if ( 'msg' in obj ) console.log( obj.msg.toUpperCase() );
//   else console.log('Tax in ths month is: ' + obj.tax + '$');
// }


//* Union instanceof

checkInstace( new Date() )
checkInstace('Time is out!!!')
function checkInstace ( time: string | Date )
{
  if ( time instanceof Date ) console.log( time.toTimeString() )
  else console.log(time)
}

//? Union - the ternary operator

// const takeNumber = () => 1000
// useTernary('300')
// function useTernary ( param: string | (() => number) ): void
// {
//   const value: string = typeof param !== 'string' ? param() : param
//   console.log(value);
// }

//? Union - the ternary operator