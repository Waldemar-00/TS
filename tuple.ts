// Tuple

const tuple: [ boolean, string, number ] = [ true, 'some', 100 ]
//* tuple[0] = 'false' not work
tuple[0] = false
console.log(tuple[0])
tuple.push( 44 )
//*console.log(tuple[3]); not work
for ( let tup of tuple )console.log(tup) //work
const last = tuple.pop()
console.log(last)




// type Matches = [string, boolean];

// const arsenal: Matches = ['Man City', true];
// const city: Matches = ['Man United', true];
// const hotspur: Matches = ['Liverpool', true];

// function processMatches ( ...matches: [ ...Matches[], string ] ): void
// {
//   console.log(matches);
//   const lastMatch = matches.pop();
//   console.log('Previous matches:');
//   for (const match of matches) {
//     console.log(match[0]);
//   }
//   console.log('Last match:', lastMatch);
// }

// processMatches( arsenal, city, hotspur, 'Chelsea vs. Arsenal' );

// Named tuple

// type MyNamedTuple = [ userName: string, age: number, isAdmin: boolean ];
// const person: MyNamedTuple = [ 'John Doe', 30, false ];
// const [userName, age, isAdmin] = person
// console.log(userName, age, isAdmin);