type Car = {
  mark: string,
  model: string | number,
  country: string,
  cost: number | string
}
const demand: Car = {
  mark: 'Mercedes',
  model: 1238701,
  country: 'German',
  cost: 100800
}
type Customer = {
  name: string,
  surname: string,
}

type CustomerCar = Car & Customer

const customer: CustomerCar = {
  ...demand,
  name: 'David',
  surname: 'Brown'
}

type CreateCarFn = ( { mark, model, country, cost, name, surname }: CustomerCar) => string

const createCar: CreateCarFn = ( { mark, model, country, cost, name, surname}) =>
{
  return `Mark of car: ${mark}. Model: ${model}. Country: ${country}. Cost: ${cost}$. Customer is ${name} ${surname}`
}

console.log( createCar( customer ) );
