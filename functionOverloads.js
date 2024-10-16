function calcArea(a, b) {
    if (b) {
        var rect = {
            a: a,
            b: b,
            area: a * b
        };
        return rect;
    }
    else {
        var square = {
            a: a,
            area: a * a
        };
        return square;
    }
}
console.log(calcArea(4));
console.log(calcArea(4, 7));
