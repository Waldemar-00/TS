// let userData = '{"str": "Happy birthday!", "errorMessage": "Something wrong!", "isBirthday":true,"age":42,"greeting":"Hello", "name": "John"}'
// let user: {
//   str: string,
//   errorMessage: string,
//   isBirthday: boolean,
//   age: number,
//   greeting: string,
//   name: string
// } = JSON.parse( userData )
// console.log(user);
var _a;
// let str: string = 'Happy birthday!'
// const errorMessage = 'Something wrong!'
// let isBirthday: boolean = true
// let age: number = 42
// let greeting: string = 'Hello'
// function logCongrats ( str: string, isBirthday: boolean | null | undefined, age: number, errorMessage: string ): void
// {
//   if ( isBirthday )
// {
//   console.log(`${str} Your age is ${age + 1}`);
//   } else console.log(errorMessage);
// return undefined
// }
// console.log(logGreeting(true, greeting))
// logCongrats( 'some', undefined, 101, 'Something wrong :-(!' )
// const createError = (msg: string): never =>
// {
//   throw new Error()
// }
// function logGreeting ( isBirthday: boolean | null | undefined, greeting: string ): string | never
// {
//   if ( isBirthday ) return greeting + '!'
//   else return createError('Something went wrong!')
// }
//null, undefined, void
var someNull = null;
var someNullValue = null;
var someUndefined = undefined;
var someUndefinedValue = undefined;
//void
var action = function () { };
var any = action();
var v = action();
//never
// function nevering (): never //!always need to assign or you get type: void
// {
//   throw new Error()
// }
// const fromNevering: never = nevering()
// const fromNeveringAny: any = nevering()
// const number: number = nevering()
// const string: string = nevering()
// const boolean: boolean = nevering()
// const undefined_: undefined = nevering()
// const null_: null = nevering()
// const void_: void = nevering()
// //unknown
// const num: number = 10
// const str_1: string = 'some'
// const bool: boolean = false
// let unknown_5: unknown = 11
// const unknown: unknown = nevering()
// const unknown_: unknown = undefined
// const unknown_1: unknown = null
// const unknown_2: unknown = any
// const unknown_3: unknown = v
// const unknown_num: unknown = num
// const unknown_str: unknown = str_1
// const unknown_bool: unknown = bool
// const unknown_unknown: unknown = unknown_5
//Symbol
var sym = Symbol('sym');
var data = (_a = {},
    _a[sym] = 100,
    _a);
console.log(data[sym]);
//BigInt
var bigint = BigInt(111);
console.log(bigint);
