//! Extract
//! Exclude
//! Omit
//! Pick
//! Record


//! Extract
type SomeProperties =
  | { 'a': 1, 'b': 8 }
  | { 'a': 10, 'b': 80 }
  | { 'a': 100, 'b': 800 }

type ExtractObject = Extract<SomeProperties, { 'a': 100 }> //* extracted all object

//! Exclude
type IncludeObject = Exclude<SomeProperties, { 'a': 100 }> //* excluded all object

//! Omit
type OmitProperty = Omit<SomeProperties, 'a'> //* will omit all properties 'a'

interface SomeObjetc {
  a: 100;
  b: 1,
  c: 'some string'
}
const keySymbol = Symbol( 'name' )
const keySymbol1 = Symbol( 'name' )
const a = 'a'
const someObjetc1 = {
  [ a ]: 100,
  [ keySymbol ]: 'John',
  [ keySymbol1 ]: 'Ivan',
  b: 1,
  c: 'some string'
}
type OmitPropertyFromInterface = Omit<SomeObjetc, 'c'>
type OmitPropertyFromObject = Omit<typeof someObjetc1, 'a'>
type OmitSymbolFromObject = Omit<typeof someObjetc1, typeof keySymbol | typeof keySymbol1>

//! Pick
type Currencies1 = {
  usa?: 'USD',
  belarus?: 'BY',
  england?: 'GBP',
  poland?: 'KRW',
}

type PickCurrenciesOnly = Pick<Currencies1, 'usa' | 'belarus'>

type PickCurrenciesOnly1<T> = {
  readonly[K in keyof T]-?: T[K]
}
type PickCurrencies = Pick<PickCurrenciesOnly1<Currencies1>, 'usa' | 'belarus'>

type PickCurrenciesOptim = PickCurrenciesOnly1<PickCurrenciesOnly>

//! Record

type Cats = 'Grays' | 'Felix' | 'Bro'
type Age = number

type CatsData = Record<Cats, Age>