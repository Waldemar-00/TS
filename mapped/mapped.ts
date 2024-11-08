//! mapped types

//! new keywords:
//! UpperCase, LowerCase, Capitalize, Uncapitalize, Exclude

type UserKeys = 'name' | 'age' | 'role'
type UserMapped = {
  [K in UserKeys]: string
}

type UserMappedGeneric<T extends string> = {
  [K in T]: string
}

type UserMappedG = UserMappedGeneric<UserKeys>


type Currencies = {
  usa?: 'USD',
  belarus?: 'BY',
  england?: 'GBP',
  poland?: 'KRW',
}
//! Uppercase, Lowercase, Capitalize, Uncapitalize, Exclude
type CreateCurrencies<T> = {
  readonly [K in keyof T as `${Uppercase<string & K>}`]-?: T[K]
}

type CustomCurrencies = CreateCurrencies<Currencies>

type CurrenciesWithoutUSD<T> = {
  [ K in keyof T as Exclude<K, 'usa'> ]: T[ K ]
}

type CustomCurrenciesWithoutUSD = CurrenciesWithoutUSD<Currencies>

type CurrencyInclude<T> = {
  readonly[ K in keyof T]-?: T[K]
}
type CurrensiesIncluedsEURO = CurrencyInclude<Currencies & { euro: 'EURO' }>


//! ReturnType
function concats (a: number, b: string): string
{
  return a + b
}

type ReturnedCalculateType = ReturnType<typeof concats>

//! Parameters

type ParametersType = Parameters<typeof concats> //* [a: number, b: string] - Tuple
type FirstParameterType = Parameters<typeof concats>[ 0 ] //* number
type FirstParameterFromType = ParametersType[ 1 ] //* string
type T1 = Parameters<<T>(arg: T) => T> //*  [arg: unknown]

//! ConstructorParameters

class Example
{
  constructor(str: string){}
}

type ParameterInsideClass = ConstructorParameters<typeof Example> //*  [str: string] Tuple