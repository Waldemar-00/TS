// 1 Сделайте функцию, которая принимать параметрами день, месяц и год, и возвращать день недели, соответствующий этой дате. Пусть все три параметра будут не обязательными. Если какой-то параметр не передан, он должен принять значение, соответствующее текущей дате.
// type NumberOfUndefined = number | undefined
type DateFunction = ( day: number, month: number, year: number ) => string
const getDay: DateFunction = ( day?, month?, year? ) =>
{
  if ( day && month && year )
  {
    const weekDay: number = new Date( year, month, day ).getDay()
    switch (weekDay) {
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 5:
        return 'Friday'
      case 6:
        return 'Saturday'
      case 0:
        return 'Sunday'
    }
  }
  return 'Something went wrong!'
}
const day = getDay( new Date().getDate(), new Date().getMonth(), new Date().getFullYear() )
console.log(day)

// 2 Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.

function raiseToDegree ( num: number, degree: number = 2 ): number
{
  return num ** degree
}

console.log( raiseToDegree( 10 ) )
console.log(raiseToDegree(10, 10))


// 3 Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.

// 4 Укажите переменной тип функции:
// let func = function(text: string): void {
// 	alert(text);
// };

// 5 Объявите тип функции, параметром принимающей число и массив чисел, а результатом возвращающий массив чисел.

// 6 Найдите и исправьте ошибки, допущенные в следующем коде:

// type Func = (num: number) => number;

// function make(arr: number, func: Func): number {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += func(elem);
// 	}

// 	return sum;
// }

// let res: number[] = make([1, 2, 3], function(num): string {
// 	return num ** 2;
// });

// console.log( res );

// type Func = (num: number) => number;

// function make(arr: number[], func: Func): number[] {
// 	return arr.map(function(elem: number) {
// 		return func(elem);
// 	});
// }

// let res: number[] = make([1, 2, 3], function(num: number): number {
// 	return num ** 2;
// });

// console.log(res);

// 7 Перепишите следующий JavaScript код на TypeScript вариант:
// let arr = [1, 2, 3];
// let res = arr.map(num => num ** 2);

// console.log(res);