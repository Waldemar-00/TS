"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userData = '{"str": "Happy birthday!", "errorMessage": "Something wrong!", "isBirthday":true,"age":42,"greeting":"Hello", "name": "John"}';
var user = JSON.parse(userData);
console.log(user);
var str = 'Happy birthday!';
var errorMessage = 'Something wrong!';
var isBirthday = true;
var age = 42;
var greeting = 'Hello';
function logCongrats(str, isBirthday, age, errorMessage) {
    if (isBirthday) {
        console.log("".concat(str, " Your age is ").concat(age + 1));
    }
    else
        console.log(errorMessage);
    return undefined;
}
console.log(logGreeting(true, greeting));
logCongrats('some', undefined, 101, 'Something wrong :-(!');
var createError = function (msg) {
    throw new Error();
};
function logGreeting(isBirthday, greeting) {
    if (isBirthday)
        return greeting + '!';
    else
        return createError('Something went wrong!');
}
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
function nevering() {
    throw new Error();
}
var fromNevering = nevering();
var fromNeveringAny = nevering();
var number = nevering();
var string = nevering();
var boolean = nevering();
var undefined_ = nevering();
var null_ = nevering();
var void_ = nevering();
//unknown
var num = 10;
var str_1 = 'some';
var bool = false;
var unknown_5 = 11;
var unknown = nevering();
var unknown_ = undefined;
var unknown_1 = null;
var unknown_2 = any;
var unknown_3 = v;
var unknown_num = num;
var unknown_str = str_1;
var unknown_bool = bool;
var unknown_unknown = unknown_5;
