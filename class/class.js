"use strict";
class Params {
    constructor(x, y, z, height = '100') {
        this.x = x;
        this.y = y;
        this.z = z;
        this.height = height;
    }
}
const a11 = new Params(1, 2, 3, '400');
console.log(a11.x);
console.log(a11.height);
// var undefined: string = 'this is undefined' It's possible
class UserSimple {
}
const johnSImple = new UserSimple();
johnSImple.name = 'John';
console.log(johnSImple);
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
class Base {
    greet() { console.log("Hello from Base"); }
}
class Derived extends Base {
    greet() {
        console.log("Hello from Derived");
    }
}
const derived = new Derived();
derived.greet(); // "Hello from Derived"
class User99 {
    constructor(name, age, valid = false) {
        this.valid = false;
        this.name = name;
        this.age = age;
        this.valid = valid;
    }
    isValid(data) {
        return data.length > 8;
    }
}
