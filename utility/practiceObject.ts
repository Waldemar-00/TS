// Необходимо типизировать этот большой объект
// Свойство futureClasses должно быть в зависимости от classes по типу
// Свойства exClients и futureClients тоже должны быть в зависимости от currClients
// ИЛИ все три зависят от общего родителя

// Простыми словами: при добавлении свойства в целевой объект они должны быть
// автоматически добавлены в зависимые (сразу подсказка от TS)
interface IClasses {
	name: string;
	startsAt: string;
	duration: number;
	//! ease: string   will get Error
}
interface IFutureClasses extends Omit<IClasses, 'startsAt'>
{
  willStartsAt: string
}
interface IClients
{
	name: string,
	age: string | number,
	gender: 'male' | 'female',
	timeLeft: string,
	makeCallFor: Date,
	//! some: string   will get Error
}
type CurrClients = Omit<IClients, 'makeCallFor'>
type ExClients = Omit<IClients, 'timeLeft'>
type FutureClients = Pick<IClients, 'name' | 'makeCallFor'>
// type CurrClients =
// {
// [K in keyof IClients as Exclude<K, 'makeCallFor'>]-?: IClients[K]
// }
// type ExClients = {
// 	[K in keyof IClients as Exclude<K, 'timeLeft'>]-?: IClients[K]
// }
// type FutureClients = {
// 	[ K in keyof IClients as Exclude<K, 'age' | 'gender' | 'timeLeft'>]-?: IClients[K]
// }
interface IFitnessClubCenter
{
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: IClasses[],
	futureClasses: IFutureClasses[],
	currClients: CurrClients[],
	exClients: ExClients[],
	futureClients: FutureClients[]
}
const fitnessClubCenter: IFitnessClubCenter = {
	clubName: "Fitness club Center",
	location: "central ave. 45, 5th floor",
	classes: [
		{
			name: "yoga",
			startsAt: "8:00 AM",
			duration: 60,
		},
		{
			name: "trx",
			startsAt: "11:00 AM",
			duration: 45,
		},
		{
			name: "swimming",
			startsAt: "3:00 PM",
			duration: 70,
		},
	],
	futureClasses: [
		{
			name: "boxing",
			willStartsAt: "6:00 PM",
			duration: 40,
		},
		{
			name: "breath training",
			willStartsAt: "8:00 PM",
			duration: 30,
		},
	],
	currClients: [
		{
			name: "John Smith",
			age: "-",
			gender: "male",
			timeLeft: "1 month",
		},
		{
			name: "Alise Smith",
			age: 35,
			gender: "female",
			timeLeft: "3 month",
		},
		{
			name: "Ann Sonne",
			age: 24,
			gender: "female",
			timeLeft: "5 month",
		},
	],
	exClients: [
		{
			name: "Tom Smooth",
			age: 50,
			gender: "male",
			makeCallFor: new Date("2023-08-12"),
		},
	],
	futureClients: [
		{
			name: "Maria",
			makeCallFor: new Date("2023-07-10"),
		},
	],
}
