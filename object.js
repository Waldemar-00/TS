"use strict";
const userData = {
    name: 'ULADZIMIR',
    age: 42,
    isBirthday: false,
    messages: {
        error: 'Error',
        smth: 'Something went wrong',
        oops: 'Oops'
    }
};
function logCongrat({ name, age, isBirthday, messages: { error, smth, oops } }) {
    if (isBirthday)
        console.log(`Happy Birthday ${name}! Your age is ${age + 1}`);
    else
        console.log(oops);
}
logCongrat(userData);
//array
const array = ['a', 'b', 'c', 'log', 'd', 'e'];
const arrNumbers = [1, 2, 3, 4];
const matrix = [[1, 2, 3], [4, 5, 6]];
const filteredArray = array.filter((str) => str !== 'log').map((str) => `${str} - done`);
// console.log(filteredArray);
const [first, second, third, fourth] = filteredArray;
console.log(first.toUpperCase());
console.log(second.toUpperCase());
console.log(third.toUpperCase());
console.log(fourth.toUpperCase());
