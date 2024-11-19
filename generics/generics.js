"use strict";
//! function print<Type> ( arg: Type ): Type
//!   return arg
//! }
//* console.log( print<number>( 10 ) )
//* console.log( print( 10 ) )
//* console.log(print<number[]>([1, 10]) )
//* console.log( print<string>( 'TEN' ) )
//* console.log( print<string[]>( [ 'one', 'two' ] ) )
function printArr(arg) {
    console.log(arg.length);
    return arg;
}
// printArr<number[]>( [ 1, 2, 3, 4, 5, 6, 7 ] )
// printArr<string[]>( [ 'str', 'a', 'b', 'c', 'd', 'e' ] )
// printArr({length: 100})
//! A limit Key, keyof Type
function getValueByKey(obj, key) {
    return obj[key];
}
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(getValueByKey(obj, 'c'));
const stringPrint = {
    key: 'string',
};
const numberPrint = {
    key: 100678
};
function printType(arg) {
    return arg;
}
//* console.log( printType( stringPrint ) )
//* console.log(printType(numberPrint))
function generalization(data, number) {
    switch (typeof data) {
        case 'string':
            return `${data.toLocaleUpperCase()}!`;
        case 'number':
            return `${+number + +(data.toFixed(2))}`;
        default:
            return `No text, no number!`;
    }
}
console.log(generalization(100.171261921, 17));
console.log(generalization('Hello Dude', 17));
