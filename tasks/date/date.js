"use strict";
const getDay = (day, month, year) => {
    if (day && month && year) {
        const weekDay = new Date(year, month, day).getDay();
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
const day = getDay(new Date().getDate(), new Date().getMonth(), new Date().getFullYear());
console.log(day);
// 2 Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
function raiseToDegree(num, degree = 2) {
    return num ** degree;
}
console.log(raiseToDegree(10));
console.log(raiseToDegree(10, 10));
// 3 Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.
//! Fucking TS
function amount(...rest) {
    return rest.reduce((acc, current) => (acc + current));
}
console.log(amount(1, 2, 3, 4, 5));
console.log(amount('1', '1', '1', '1', '1'));
console.log(amount([1], ['str'], [3], [2], [7]));
function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return (value * 2);
    }
}
console.log(processValue('string'));
console.log(processValue(100));
// 4 Укажите переменной тип функции:
let func = function (text) {
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
    let sum = 0;
    for (let elem of arr) {
        sum += func(elem);
    }
    return sum;
}
let res00 = maker([1, 2, 3], function (num) {
    return num ** 2;
});
console.log(res00);
function make(arr, func) {
    return arr.map(function (elem) {
        return func(elem);
    });
}
let res01 = make([1, 2, 3], function (num) {
    return num ** 2;
});
console.log(res01);
// 7 Перепишите следующий JavaScript код на TypeScript вариант:
let arr001 = [1, 2, 3];
let res001 = arr001.map(num => num ** 2);
console.log(res001);
