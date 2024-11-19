"use strict";
let gettingNumber = [100, 1, 2, 3, 4, 5, 6, 7, 8];
gettingNumber = ['a', 'b', 'c', 'd', 'e', 'f'];
function printResult(...rest) {
    return rest.reduce((acc, current) => acc + current);
}
console.log(printResult(...gettingNumber));
const user01 = {
    created: 'created'
};
const user02 = {
    created: new Date()
};
