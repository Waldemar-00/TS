"use strict";
function calcArea(a, b) {
    if (b) {
        const rect = {
            a,
            b,
            area: a * b
        };
        return rect;
    }
    else {
        const square = {
            a,
            area: a * a
        };
        return square;
    }
}
console.log(calcArea(4));
console.log(calcArea(4, 7));
