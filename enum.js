//* readonly properties in the enum literal
var Cars;
(function (Cars) {
    Cars["Audi"] = "Audi";
    Cars["BMW"] = "BMW";
    Cars["Ford"] = "Ford";
    Cars["Mersedes"] = "Mersedes";
})(Cars || (Cars = {}));
var audi = Cars.Audi;
audi = Cars.Mersedes;
//! readonly
//*Cars.Mersedes = 'Porsh' - Error
//! readonly
console.log(Cars);
//* string literal
var greeting = "Hello"; // being const
var otherGreeting = "Hello John"; // being const
function printGreeting(str) {
    console.log(str);
}
printGreeting(greeting);
printGreeting(otherGreeting);
//* number literal
var number = 100;
var number_1 = 1000;
function printNumber(number) {
    console.log(number);
}
printNumber(number);
printNumber(number_1);
// printNumber(2000) it will not work
//* boolean literal
var yes = true;
var no = false;
function boolFn(bool) {
    console.log(bool);
}
boolFn(yes);
boolFn(no);
//* unique symbol
//! only CONST
var unSym = Symbol.for('some symbol');
//! only CONST
//* Below they not work:
//? let unSym_let: unique symbol = Symbol.for( 'let symbol' )
//? var unSym_var: unique symbol = Symbol.for('var symbol')
//* Above they not work ^
//* if in the class you need write PUBLIC STATIC READONLY
function uniqueSymbol(sym) {
    console.log(sym.description);
}
uniqueSymbol(unSym);
//* uniqueSymbol( Symbol('some symbol') ) not works
//* uniqueSymbol(Symbol('some symbol')) not works
