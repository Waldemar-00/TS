let str: string = 'Happy birthday!'
const errorMessage = 'Something wrong!'
let isBirthday: boolean = true
let age: number = 42
let greeting: string = 'Hello'

function logCongrats ( str: string, isBirthday: boolean | null | undefined, age: number, errorMessage: string ): void
{
  if ( isBirthday )
{
  console.log(`${str} Your age is ${age + 1}`);

  } else console.log(errorMessage);
return undefined
}
console.log(logGreeting(true, greeting))
logCongrats( 'some', undefined, 101, 'Something wrong :-(!' )

function logGreeting ( isBirthday: boolean | null | undefined, greeting: string ): string | void
{
  if(isBirthday) return greeting + '!'
}