let objMy: {[key: string]: number} = {a: 1, b: 2, c: 3};
let res = 0;

for ( let key in objMy )
{
  if ( objMy.hasOwnProperty( key ) )
  {
    let elem: number = objMy[ key ];
    console.log(elem);
	  res += elem;
  }

}

console.log( res );

let userTuple: [ string, number ] = [ 'John', 123 ]
userTuple.push( 'Margaret' )
userTuple.unshift( 'Married' )
// userTuple[1] = 'Vialetta'
console.log(userTuple[0], 'index 0');

console.log(userTuple);
console.log( userTuple.length );

userTuple.forEach( ( tup ) => console.log( tup ) )

const readonlyTuple: readonly [ number, string ] = [ 1, "immutable" ];
readonlyTuple.forEach( ( tup ) => console.log( tup ) )

const userTupleReadOnly: readonly [ number, string, boolean?] = [ 123, 'John' ]

let tpl: [ number, boolean, ...string[] ]
tpl = [ 111, true ]

enum Season
{
  Spring,
  Summer,
  Autumn,
  Winter
}
const winterKey = Season.Winter
console.log(winterKey)
console.log( Season[ winterKey ] )

let current: Season = 2
current = Season.Autumn
current = Season.Summer
console.log(current)

const regExp: RegExp = /.+?/

// * Promise

const promise: Promise<string[]> = new Promise( function ( resolve, reject ): void {
  setTimeout( () =>
  {
    resolve(['a', 'b', 'c', 'd', 'e', 'f'])
  }, 3000)
} )

promise.then( ( arrayOfString ) => console.log( arrayOfString ) )

//* Date

let arr: Date[] = []

arr.push(new Date(2030, 11, 31))
arr.push( new Date( 2020, 11, 31 ) )