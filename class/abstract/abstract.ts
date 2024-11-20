//! implementation
interface ICar
{
  name: string;
  model: string;
  date: () => string;
}

class BMWCar implements ICar
{
  name!: 'BMW';
  model!: 'S';
  date ()
  {
    return 'Date of start'
  }
}
//! Abstract class

abstract class AbstractCar
{
  name!: string;
  model!: string;
  somestring!: string;
  abstract date(): string;
  abstract get car (): string;
  abstract set car ( car: string );
  textAboutBMW ( text: string ): string
  {
    return text
  }
}

class BMW extends AbstractCar
{
  constructor (model: string)
  {
    super()
    this.name = 'BMW'
    this.model = model
  }
  date (): string
  {
    return new Date().toTimeString()
  }
  get car (): string
  {
    return `Name of car: ${this.name}. Model of car: ${this.model}`
  }
  set car ( car: string )
  {
    this.name = car
  }
}
const bmw = new BMW( '779901' )
console.log( bmw.textAboutBMW( 'Some text about BMW company...' ) )
console.log(BMW)