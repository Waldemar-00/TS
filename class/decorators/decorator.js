"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//! decorator factory
// @changeDoorStatus( false )
// @changeFuelAmount( 90 )
// @changeSeatsAmount(7)
// class Car_00 implements ICar_00
// {
//   fuel: string = '30%';
//   open: boolean =  true;
//   seats: number =  4;
//   isOpen ()
//   {
//     return this.open ? 'open' : 'closed'
//   }
// }
// function changeDoorStatus ( status: boolean )
// {
//   return function <T extends {new (...arg: any[]): {}}> ( constructor: T)
//   {
//     return class extends constructor
//     {
//       open = status
//     }
//   }
// }
// function changeFuelAmount ( fuel: number )
// {
//   return function <T extends { new( ...arg: any[] ): {} }> ( constructor: T )
//   {
//     return class extends constructor
//     {
//       fuel = `${fuel}%`
//     }
//   }
// }
// function changeSeatsAmount ( seats: number )
// {
//   return function <T extends { new( ...arg: any[] ): {} }> ( constructor: T )
//   {
//     return class extends constructor
//     {
//       seats = seats
//     }
//   }
// }
// const car_00 = new Car_00()
// console.log( car_00.isOpen(), car_00.fuel, car_00.seats, car_00 )
//! latest decorators
let Car_00 = class Car_00 {
    constructor() {
        this.fuel = '30%';
        this.open = true;
        this.seats = 4;
    }
    isOpen() {
        return this.open ? 'open' : 'closed';
    }
};
Car_00 = __decorate([
    changeDoorStatus(false),
    changeFuelAmount(90),
    changeSeatsAmount(7)
], Car_00);
function changeDoorStatus(status) {
    return function (target, context) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeFuelAmount(fuel) {
    return function (target, context) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${fuel}%`;
            }
        };
    };
}
function changeSeatsAmount(seats) {
    return function (target, context) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.seats = seats;
            }
        };
    };
}
const car_00 = new Car_00();
console.log(car_00.isOpen(), car_00.fuel, car_00.seats, car_00);
