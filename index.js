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
function logGreeting(isBirthday, greeting) {
    if (isBirthday)
        return greeting + '!';
}
