"use strict";
let objMy = { a: 1, b: 2, c: 3 };
let res = 0;
for (let key in objMy) {
    if (objMy.hasOwnProperty(key)) {
        let elem = objMy[key];
        console.log(elem);
        res += elem;
    }
}
console.log(res);
let userTuple = ['John', 123];
userTuple.push('Margaret');
userTuple.unshift('Married');
// userTuple[1] = 'Vialetta'
console.log(userTuple[0], 'index 0');
console.log(userTuple);
console.log(userTuple.length);
userTuple.forEach((tup) => console.log(tup));
const readonlyTuple = [1, "immutable"];
readonlyTuple.forEach((tup) => console.log(tup));
const userTupleReadOnly = [123, 'John'];
let tpl;
tpl = [111, true];
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
const winterKey = Season.Winter;
console.log(winterKey);
console.log(Season[winterKey]);
let current = 2;
current = Season.Autumn;
current = Season.Summer;
console.log(current);
const regExp = /.+?/;
// * Promise
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(['a', 'b', 'c', 'd', 'e', 'f']);
    }, 3000);
});
promise.then((arrayOfString) => console.log(arrayOfString));
//* Date
let arr = [];
arr.push(new Date(2030, 11, 31));
arr.push(new Date(2020, 11, 31));
