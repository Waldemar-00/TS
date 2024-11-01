var getDay = function (day, month, year) {
    if (day && month && year) {
        var weekDay = new Date(year, month, day).getDay();
        switch (weekDay) {
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            case 0:
                return 'Sunday';
        }
    }
    return 'Something went wrong!';
};
var day = getDay(new Date().getDate(), new Date().getMonth(), new Date().getFullYear());
console.log(day);
// 2 Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
function raiseToDegree(num, degree) {
    if (degree === void 0) { degree = 2; }
    return Math.pow(num, degree);
}
console.log(raiseToDegree(10));
console.log(raiseToDegree(10, 10));
// 3 Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.
function amount() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (acc, current) { return acc + current; });
}
console.log(amount(1, 2, 3, 4, 5));
console.log(amount('1', '1', '1', '1', '1'));
// 4 Укажите переменной тип функции:
var func = function (text) {
    console.log(text);
};
func('Hello');
func(1000);
// 5 Объявите тип функции, параметром принимающей число и массив чисел, а результатом возвращающий массив чисел.
function pushNumber(num, arr) {
    arr.push(num);
    return arr;
}
console.log(pushNumber(100, [1, 2]));
function maker(arr, func) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        sum += func(elem);
    }
    return sum;
}
var res00 = maker([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res00);
function make(arr, func) {
    return arr.map(function (elem) {
        return func(elem);
    });
}
var res01 = make([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res01);
// 7 Перепишите следующий JavaScript код на TypeScript вариант:
var arr001 = [1, 2, 3];
var res001 = arr001.map(function (num) { return Math.pow(num, 2); });
console.log(res001);
