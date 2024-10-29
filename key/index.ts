interface IKeys
{
  some: string,
  other: number
}

type GotKeys = keyof IKeys

function printSomething ( message: GotKeys ): string
{
  if ( message === 'some' ) return 'Greate Key "SOME"'
  else return 'Key NUMBER'
}
console.log( printSomething( 'some' ) )
console.log( printSomething( 'other' ) )

//______________________________ K keyof T

interface Company
{
  name: string,
  amount: number
}
const company: Company = {
  name: 'IBM',
  amount: 10000000
}
function printCompany<T, K extends keyof T, S extends keyof T>(company: T, name: K, amount: S): string
{
  return `Name of Company: ${company[name]}. Total ${company[amount]}`
}
console.log(printCompany(company, 'name', 'amount'))
interface Google {
  brend: string,
  debts: number
}
const google: Google = {
  brend: 'Google',
  debts: 10000000000
}
console.log( printCompany( google, 'brend', 'debts' ) )

type GoodleType = typeof google
//* got type of object google, Google inteface

type GoodleKeys = keyof typeof google
//* got keys from object google, Google inteface

const someObject = {
  key1: 100,
  key2: 'some text'
}

type SomeObjectType = typeof someObject

type SomeKeysFromSomeObject = keyof typeof someObject