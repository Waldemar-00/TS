"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @changeDoorStatus1( false )
// @changeFuelAmount1( 75 )
// @changeSeatsAmount1(11)
class Car_01 {
    constructor() {
        this.fuel = '30%';
        this.open = true;
        this.seats = 4;
        this._weight = 1000;
    }
    isOpen(msg) {
        return this.open ? 'open' : `closed: ${msg}`;
    }
}
__decorate([
    limitSeatsDecorator(1),
    __metadata("design:type", Number)
], Car_01.prototype, "seats", void 0);
__decorate([
    printFuelInformation,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Car_01.prototype, "isOpen", null);
//! property decorators
function limitSeatsDecorator(limit) {
    return function (target, propertyKey) {
        let value;
        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newNumber) => (value >= 0 && value <= limit) ? value = newNumber : console.log('The number is out of range!')
        });
    };
}
//! Decorated the additional methods
function printFuelInformation(target, propertyKey, descriptor) {
    const oldFn = descriptor.value;
    descriptor.value = function (...arg) {
        console.log('I changed method isOpen');
        console.log(this.fuel); //! this: any => here
        return oldFn.apply(this, arg);
        // return this.open ? 'open' : 'closed' //! second method
    };
}
//! "experimentalDecorators": false
// function printFuelInformation ( constructor: any, context: ClassMethodDecoratorContext )
//   {
//     return function (this: any, ...arg: any[]) //! second => this: any
//     {
//       console.log( 'I changed method isOpen' )
//       console.log(this.fuel) //! this: any => here
//       return constructor.apply(this, arg)
//     }
// }
// function printFuelInformation<T, A extends any[], R> ( constructor: (this: T, ...args: A) => R, context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R >)
// {
//   return function (this: T, ...args: A): R //! second => this: any
//   {
//     console.log( 'I changed method isOpen' )
//     console.log( `${ String( context.name ) } was started` )
//     // console.log( this.fuel) //! error of type
//     return constructor.apply(this, args)
//   }
// }
//? @printFuelInformation
//?   isOpen (msg: string)
//?   {
//?     return this.open ? 'open' : `closed: ${msg}`
//?   }
function changeDoorStatus1(status) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeFuelAmount1(fuel) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.fuel = `${fuel}%`;
            }
        };
    };
}
function changeSeatsAmount1(seats) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.seats = seats;
            }
        };
    };
}
const car_01 = new Car_01();
console.log(car_01.isOpen('for a long time'), car_01.fuel, car_01.seats);
console.log(car_01);
//! example
