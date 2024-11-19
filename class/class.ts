class Params
{
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
    public height: string = '100'
  )
  {

  }
}
const a11 = new Params(1, 2, 3, '400')
console.log(a11.x)
console.log( a11.height )
// var undefined: string = 'this is undefined' It's possible

class UserSimple
{
  name!: string;
}

const johnSImple = new UserSimple()
johnSImple.name = 'John'
console.log(johnSImple)

// class GetSet
// {
//     name = 'John';
//     surname = 'Smith';
//     // get fullName() {
//     //     return this.name + ' ' + this.surname
//     // }
//     // set fullName ( value )
//     // {
//     //     [this.name, this.surname] = value.split(' ')
//     // }
// }

// const obj = new GetSet()
// // console.log( obj.fullName );
// // console.log(obj.fullName = 'Aliace Kupper');

// // const testObj = {
// //     name: 'John',
// //     surname: 'Smith'
// // }
// Object.defineProperty( obj, 'fullName', {
//     get() {
//         return this.name + ' ' + this.surname
//     },
//     set( value )
//     {
//         [this.name, this.surname] = value.split(' ')
//     }
// } )

// console.log(obj.fullName);


// const TESTO_GET_SET = {
//     name: 'John',
//     surname: 'Smith',
//     get fullname ()
//     {
//         delete this.fullname
//         return this.fullname =  this.name + ' ' + this.surname
//     }
// }

// console.log(TESTO_GET_SET.fullname);
// console.log(TESTO_GET_SET);
class Base
{
  greet () { console.log( "Hello from Base" ); }
}
class Derived extends Base
{
  override greet ()
  {
    console.log( "Hello from Derived" );
  }
} const derived = new Derived(); derived.greet(); // "Hello from Derived"

//! imlements

interface Implement
{
  name: string;
  age: number;
}
interface Invalidate
{
  valid: boolean;
  isValid: (data: string) => boolean;
}
class User99 implements Implement, Invalidate
{
  name: string;
  age: number;
  valid: boolean = false;
  constructor
    (
    name: string,
    age: number,
    valid: boolean = false
    )
  {
    this.name = name;
    this.age = age;
    this.valid = valid;
  }


  isValid ( data: string ) : boolean
  {
    return data.length > 8
  }


}