//!Generics
type Smth<T> = T

const smth: Smth<number> = 55

type UserLog<T> = {
  name: string,
  age: number,
  login: T
}

const userLog: UserLog<1212098768340173> = {
  name: 'Kevin',
  age: 44,
  login: 1212098768340173
}

//? generalization
// interface UserData<ParentsData>
// {
//   name: string,
//   age: number,
//   parents: ParentsData
// }
// const user0: UserData<{ mother: string, father: string }> = {
//   name: 'Gregor',
//   age: 37,
//   parents: {mother: 'Gretta', father: 'Tom'}
// }
// const user1: UserData<{ stepMother: string, stepFather: string }> = {
//   name: 'John',
//   age: 40,
//   parents: {stepMother: 'Violetta', stepFather: 'Vitold'}
// }
// const user2: UserData<string> = {
//   name: 'Gregor',
//   age: 37,
//   parents: ''
// }
//! Generic Constraints
interface Parents
{
  mother: string,
  father: string
}
interface UserData<ParentsData extends Parents>
{
  name: string,
  age: number,
  parents: ParentsData //! We are extending the ParentsData property  with interface Parents
}
const receivedParentsData = {mother: 'Gretta', father: 'Tom', married: true}
const userParents: UserData<{mother: string, father: string, married: boolean}> = {
  name: 'Gregor',
  age: 37,
  parents: receivedParentsData
}

//! Function Generic Constraints
type numOrStr = number | string
const depositMoney = <T extends numOrStr> ( amount: T ): T => {
  console.log( `Requiered to the server with amount: ${ amount }` )
  return amount
}
depositMoney( 1000 )
depositMoney( '1000' )
