var string001 = 'str';
//! <TypeEx>() => any
var inferString = 'Hello infer';
var inferNumber = 100;
var inferAny = 1000;
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
    return { num: num };
}
function returnedNever(num) {
    return [num];
}
function returnedWithInferN(num, num2) {
    var number = num + num2;
    return number;
}
function returnedWithInferS(str) {
    return str;
}
returnedWithInferS('Something');
var arr007 = [1, '2', null, 'something'];
var item = 1000;
function returnedSomething(arg) {
    return arg[(Math.round(Math.random() * (arg.length - 1)))];
}
console.log(returnedSomething(arr007));
var arrayInfer = [1, '2', null, 'something'];
var obj007 = { 'a': 100, 'b': 'str' };
function fn(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
// fn<FnTypeArg<typeof arrayInfer>>('str', 1000, arrayInfer)
fn('str', 1000, arrayInfer);
var strInfer = 'INFER';
var literal = 'literal';
var arrayNumbers = [1, [2, [3, ['str']]], 9];
function getTupleHead(tuple) {
    return tuple[0];
}
var someString = 'Some string';
var tupleInfer = ["hello", 42, true]; // ["hello", 42, true] type
var commonArray = ['str', 'hello', 100]; // (string|number| )[] type
var type = getTupleHead(tupleInfer);
console.log(type);
//! inferring arguments
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numberArray = makeArray(1, 2, 3); // [number, number, number]
var stringArray = makeArray('a', 'b', 'c'); // [string, string, string]
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3]); // firstNumber is inferred as number
var firstString = getFirst(['a', 'b', 'c']); // firstString is inferred as string
