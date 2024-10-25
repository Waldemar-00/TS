var objMy = { a: 1, b: 2, c: 3 };
var res = 0;
for (var key in objMy) {
    if (objMy.hasOwnProperty(key)) {
        var elem = objMy[key];
        console.log(elem);
        res += elem;
    }
}
console.log(res);
