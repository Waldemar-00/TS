let gettingNumber: string[] | number[] = [ 100, 1, 2, 3, 4, 5, 6, 7, 8 ]
gettingNumber = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
type DataFromServer = typeof gettingNumber extends string[] ? string[] : number[]
type Refund = typeof gettingNumber[0]
function printResult(...rest: DataFromServer): Refund
{
  return rest.reduce((acc, current) => acc + current)
}

console.log( printResult( ...gettingNumber ) )


interface DtWeight
{
  weight: number
}
interface DtCalories
{
  calories: string
}

type DtFromBase<T extends string | number> = T extends string ? DtWeight : DtCalories
//* V-1
// function calcCalories ( strOrNum: string | number ): DtWeight | DtCalories
// {
//   if ( typeof strOrNum === 'string' )
//   {
//     return { calories: strOrNum}
//   } else
//   {
//     return {weight: strOrNum}
//   }
// }
// console.log(calcCalories(100))
// console.log(calcCalories('4000'))
//*__________________________________
//* V-2
// function calcCalories<T extends string | number> ( strOrNum: T ): DtWeight | DtCalories
// {
//   if ( typeof strOrNum === 'string' )
//   {
//     return { calories: strOrNum}
//   } else
//   {
//     return {weight: strOrNum}
//   }
// }
// console.log(calcCalories<number>(100))
// console.log(calcCalories<string>('4000'))
//*_____________________________________________
//* V-3
// function calcCalories ( str: string ): DtWeight
// function calcCalories ( num: number ): DtCalories
// function calcCalories<T extends string | number> ( strOrNum: T ): DtWeight | DtCalories
// {
//   if ( typeof strOrNum === 'string' )
//   {
//     return { calories: strOrNum}
//   } else
//   {
//     return {weight: strOrNum}
//   }
// }
// console.log(calcCalories<number>(100))
// console.log(calcCalories<string>('4000'))
//*______________________________________________________
//* V-4

// function calcCalories<T extends string | number> ( strOrNum: T ): T extends number ? DtWeight : DtCalories
// {
//   if ( typeof strOrNum === 'string' )
//   {
//     return { calories: strOrNum} as  T extends number ? DtWeight : DtCalories
//   } else
//   {
//     return {weight: strOrNum} as T extends number ? DtWeight : DtCalories
//   }
// }
// console.log(calcCalories(100))
// console.log( calcCalories( '4000' ) )

interface User01<T extends 'created' | Date>
{
  created: T extends 'created' ? 'created' : Date
}

const user01: User01<'created'> = {
  created: 'created'
}

const user02: User01<Date> = {
  created: new Date()
}

//! INFER
type GetFirst<T> = T extends Array<infer First> ? First : T

type Example00 = GetFirst<number>
type Example01 = GetFirst<[ '1', 2, 3 ]>
type Example02 = GetFirst<string>
type Example03 = GetFirst<[str: string, num: number]>