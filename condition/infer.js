"use strict";
const string001 = 'str';
//! <TypeEx>() => any
const inferString = 'Hello infer';
const inferNumber = 100;
const inferAny = 1000;
function returnVoid(num) {
    console.log(num);
}
function returnedNumber(num) {
    return num;
}
function returnVoid01(num) {
    console.log(num);
}
returnVoid01(100);
function returnedObject(num) {
    return { num };
}
function returnedNever(num) {
    return [num];
}
function returnedWithInferN(num, num2) {
    const number = num + num2;
    return number;
}
function returnedWithInferS(str) {
    return str;
}
returnedWithInferS('Something');
const arr007 = [1, '2', null, 'something'];
const item = 1000;
function returnedSomething(arg) {
    return arg[(Math.round(Math.random() * (arg.length - 1)))];
}
console.log(returnedSomething(arr007));
const arrayInfer = [1, '2', null, 'something'];
const obj007 = { 'a': 100, 'b': 'str' };
function fn(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
// fn<FnTypeArg<typeof arrayInfer>>('str', 1000, arrayInfer)
fn('str', 1000, arrayInfer);
const strInfer = 'INFER';
const literal = 'literal';
const arrayNumbers = [1, [2, [3, ['str']]], 9];
function getTupleHead(tuple) {
    return tuple[0];
}
const someString = 'Some string';
const tupleInfer = ["hello", 42, true]; // ["hello", 42, true] type
const commonArray = ['str', 'hello', 100]; // (string|number| )[] type
const type = getTupleHead(tupleInfer);
console.log(type);
//! inferring arguments
function makeArray(...args) {
    return args;
}
const numberArray = makeArray(1, 2, 3); // [number, number, number] in JS any[]
const stringArray = makeArray('a', 'b', 'c'); // [string, string, string] in JS any[]
function getFirst(arr) {
    return arr[0];
}
const firstNumber = getFirst([1, '2', 3]); // firstNumber is inferred as number
const firstString = getFirst(['a', 200, 'c']); // firstString is inferred as string
const first001 = { 'a': 200, 'c': '3000' };
const arrayFirst = ['a', false, 200, 'c', true];
const firstArray = arrayFirst[0];
console.log(firstArray);
const arr21 = [1, false, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, true, 22, 23, 24, 25, 26, 27];
const commonString = 'some string';
function getSecond(arr, index) {
    //! If you need only to return some value from array or get his type use any, but if you will use this value in code use unknown and check type
    return arr[index];
}
const getValueByIndex = getSecond(arrayFirst, 1);
console.log(getValueByIndex);
