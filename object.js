var userData = {
    name: 'ULADZIMIR',
    age: 42,
    isBirthday: false,
    messages: {
        error: 'Error',
        smth: 'Something went wrong',
        oops: 'Oops'
    }
};
function logCongrat(_a) {
    var name = _a.name, age = _a.age, isBirthday = _a.isBirthday, _b = _a.messages, error = _b.error, smth = _b.smth, oops = _b.oops;
    if (isBirthday)
        console.log("Happy Birthday ".concat(name, "! Your age is ").concat(age + 1));
    else
        console.log(oops);
}
logCongrat(userData);
//array
var array = ['a', 'b', 'c', 'log', 'd', 'e'];
var arrNumbers = [1, 2, 3, 4];
var matrix = [[1, 2, 3], [4, 5, 6]];
var filteredArray = array.filter(function (str) { return str !== 'log'; }).map(function (str) { return "".concat(str, " - done"); });
// console.log(filteredArray);
var first = filteredArray[0], second = filteredArray[1], third = filteredArray[2], fourth = filteredArray[3];
console.log(first.toUpperCase());
console.log(second.toUpperCase());
console.log(third.toUpperCase());
console.log(fourth.toUpperCase());
