interface IPhone {
	company: string;
	number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone
{
  company: string,
	number: number,
	size: string;
	companyPartner: IPhone['company'];
	manufactured: Date;
}

// Типизировать объект phones
interface IPhones
{
    company: string;
    number: number;
    size: string;
    companyPartner: string;
    manufactured: Date
}
const phones: IPhones[] = [
	{
		company: "Nokia",
		number: 1285637,
		size: "5.5",
		companyPartner: "MobileNokia",
		manufactured: new Date("2022-09-01"),
	},
	{
		company: "Samsung",
		number: 4356637,
		size: "5.0",
		companyPartner: "SamMobile",
		manufactured: new Date("2021-11-05"),
	},
	{
		company: "Apple",
		number: 4552833,
		size: "5.7",
		companyPartner: "no data",
		manufactured: new Date("2022-05-24T12:00:00"),
	},
];

interface IPhoneManufacturedAfterDate extends IMobilePhone {
	initialDate: string;
}
//*   company: string,
//*		number: number,
//*   size: string;
//* 	companyPartner: IPhone['company'];
//* 	manufactured: Date;
// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе
//* type Factory = keyof typeof phones[number]['manufactured']
type Factory = keyof typeof phones[number]
function filterPhonesByDate(
	phones: IPhones[],
	manufactured: Factory,
	initial: string
): IPhoneManufacturedAfterDate[]
{
  const iPhoneManufacturedAfterDate: IPhoneManufacturedAfterDate[] = phones
    .filter( ( obj ) => new Date( obj[ manufactured ] ).getTime() > new Date( initial ).getTime() )
    .map( ( obj ) =>
  {
      const objForPhArr = { ...obj, initialDate: initial }
      return objForPhArr
  } )
  return iPhoneManufacturedAfterDate
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
