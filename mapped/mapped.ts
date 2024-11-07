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
  [K in keyof T as Exclude<K, 'usa'>]: T[K]
}

type CustomCurrenciesWithoutUSD = CurrenciesWithoutUSD<Currencies>

type CurrencyInclude<T> = {
  readonly[ K in keyof T]-?: T[K]
}
type CurrensiesIncluedsEURO = CurrencyInclude<Currencies & {euro: 'EURO'}>