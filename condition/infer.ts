//! INFER
type GetFirst<T> = T extends Array<infer First> ? First : T

type Example00 = GetFirst<number>
type Example001 = GetFirst<'1'>
type Example01 = GetFirst<[ '1', 2, 3 ]>
type Example02 = GetFirst<string>
type Example03 = GetFirst<[ str: string, num: number ]>

type TypeA = { id: string }
type TypeB = { id: number }
//* constraints type below: only TypeA
type SafeType<T extends TypeA> = T[ 'id' ]
const string001: SafeType<TypeA> = 'str'

type InferType<T> = T extends { id: infer S } ?
S extends string ? string :
S extends number ? number : unknown : never //? never or any, who will be truth here?
//! <TypeEx>() => any

const inferString: InferType<TypeA> = 'Hello infer'
const inferNumber: InferType<TypeB> = 100

type TypeZ = { id: [ 1, 2 ] }
const inferAny: InferType<TypeZ> = 1000
//! type TypeEx = { key: number }
//! const inferEx: <TypeEx> = <TypeEx>() => any

type FromTypeA = TypeA[ 'id' ]

//! return value of FUNCTION
type CustomReturnType<T, A> = T extends ( arg: A ) => infer P ? P : never

type ResultType1 = CustomReturnType<() => void, any> // void
type ResultType3 = CustomReturnType<() => number, number> // number

function returnVoid (num: number): ResultType1
{
  console.log(num)
}
function returnedNumber (num: number): ResultType3
{
  return num
}
function returnVoid01 (num: number): CustomReturnType<() => void, number>
{
  console.log(num)
}
returnVoid01(100)
function returnedObject (num: number): CustomReturnType<() => object, number>
{
  return { num }
}
function returnedNever (num: number): CustomReturnType<() => number[], number>
{
  return [num]
}
function returnedWithInferN (num: number, num2: number): CustomReturnType<() => number, number>
{
  const number = num + num2
  return number
}
function returnedWithInferS (str: string): CustomReturnType<() => string, string>
{
  return str
}
returnedWithInferS('Something')
// type CustomReturnType01<T> = T extends (...args: string[]) => infer P ? P : string

// type ResultType01 = CustomReturnType01<() => void> // void
// type ResultType02 = CustomReturnType01<() => number> // number
//! INFER _______________________________________
//! Get types of ARRAY with infer
type ArrayType0001<T> = T extends ( infer It )[] ? It : T

const arr007 = [1, '2', null, 'something']

type ResultType = ArrayType0001<typeof arr007> // string | number | null | undefined

const item: ResultType = 1000

function returnedSomething<T> (arg: T[] ): T
{
  return arg[( Math.round( Math.random() * (arg.length - 1)) )]
}
console.log(returnedSomething<ArrayType0001<typeof arr007>>(arr007))
//! returned function value
type FnType<T> = T extends ( ...arg: any ) => infer F ? F : never

const arrayInfer = [ 1, '2', null, 'something' ]
const obj007 = { 'a': 100, 'b': 'str' }

function fn<T> ( arg1: string, arg2: number, arg3: T[] ): void
{
  console.log(arg1, arg2, arg3)
}

//! from array
type TypesOfArray<T> = T extends ( infer AT )[] ? AT : T
type TOfArray<T> = T[ keyof T ]
type FromArr007 = TOfArray<typeof obj007>
type TOfKeyA = typeof obj007['a']
type TSimlpeObj = typeof obj007[keyof typeof obj007]
type TOfarray = TypesOfArray<typeof arrayInfer>
type TOfStr = TypesOfArray<typeof arr007>
// fn<FnTypeArg<typeof arrayInfer>>('str', 1000, arrayInfer)
fn<TOfarray>('str', 1000, arrayInfer)
type ReturnedTypeOfFn = FnType<typeof fn>
type RArgsOfFn = TypesOfArray<typeof fn<typeof arr007>>

//! first element from array with infer

// type TFirstEl<T> = T extends [ infer First, ...infer Rest ] ? First : TFirstEl<Rest>
// type TAFirst = TFirstEl<>

//! string

type TStringInfer<T> = T extends `${ infer S }` ? S : never
const strInfer = 'INFER'
type ST = TStringInfer<typeof strInfer>


type ExtractNumberType<T> = T extends `${ infer U }` ? `${ U }` extends `${ number }` ? U : never : never

type numberInside = ExtractNumberType<'100'> // '100'
type stringInside = ExtractNumberType<'some string'> //never

const literal = 'literal'
type ExLiteralType<T> = T extends `${ infer S }` ? `${ S }` extends `${ typeof literal }` ? S : never : never

type exLiterla = ExLiteralType<'litera'>

//! Array<infer U> === (infer U)[] Recursion
type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T //! Here is recursion

type NestedArray = number[][][]
type Flat = Flatten<NestedArray>  // This will be 'number'
const arrayNumbers = [ 1, [ 2, [ 3,  ['str'] ] ], 9 ]

type FlatNumbers = Flatten<typeof arrayNumbers> // string|number

type GetTypesRecursion<T> = T extends ( infer M )[] ? GetTypesRecursion<M> : T

type TypesOfArray1 = GetTypesRecursion<typeof arrayNumbers>

//! Tuples with infer
type TupleToUnion<T extends any[]> = T extends [infer U, ...infer Rest]
  ? (U | TupleToUnion<Rest>) //? Union type
  : never

function getTupleHead<T extends any[]> ( tuple: [ ...T ] ): TupleToUnion<T>
{
  return tuple[0]
}
const someString = 'Some string'
const tupleInfer: [ "hello", 42, true ] = [ "hello", 42, true ] // ["hello", 42, true] type
const commonArray = [ 'str', 'hello', 100] // (string|number| )[] type

type TTuple = TupleToUnion<typeof tupleInfer>
type TCommonArray = TupleToUnion<typeof commonArray>

const type = getTupleHead<typeof tupleInfer>( tupleInfer )
console.log(type)
type TOfType = typeof type

//! inferring arguments

function makeArray<T extends unknown[]>(...args: T): T {
  return args
}

const numberArray = makeArray(1, 2, 3) // [number, number, number] in JS any[]
const stringArray = makeArray( 'a', 'b', 'c' ) // [string, string, string] in JS any[]


function getFirst<T extends unknown[]> ( arr: [...T]): T extends [infer F, ...unknown[]] ? F : never {
    return arr[0] as T extends [infer F, ...unknown[]] ? F : never
}

const firstNumber = getFirst([1, '2', 3]) // firstNumber is inferred as number
const firstString = getFirst( [ 'a', 200, 'c' ] ) // firstString is inferred as string
const first001 = { 'a': 200, 'c': '3000' }
type First = typeof first001.a
const arrayFirst: [string, boolean, number, string, boolean] = [ 'a', false,  200, 'c', true ]
const firstArray = arrayFirst[ 0 ]
console.log(firstArray)
type ArrayFirst = typeof firstArray


const arr21 = [ 1, false, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, true, 22, 23, 24, 25, 26, 27 ]
const commonString = 'some string'

function getSecond<T extends any[]>(arr: T, index: number): T extends [infer F, infer S, ...any[]] ? S : never
{
  //! If you need only to return some value from array or get his type use any, but if you will use this value in code use unknown and check type
  return arr[index]
}
const getValueByIndex = getSecond<typeof arrayFirst>( arrayFirst, 1 )
console.log( getValueByIndex )
