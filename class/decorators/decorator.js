"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    decoratorFactory(false)
], Car_00);
function decoratorFactory(status, fuel, seats) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.open = status;
                this.fuel = fuel ? `${fuel}%` : constructor.prototype.fuel;
                this.seats = seats;
            }
        };
    };
}
//? function carDecorator<T extends {new (...arg: any[]): {}}> ( constructor: T)
//? {
//?   return class extends constructor
//?   {
//?     open = false
//?   }
//?   //* constructor.prototype.open = false
//? }
//* function addFuel( car: ICar_00 ) {
//*   car.fuel = '100%'
//*   return car
//* }
const car_00 = new Car_00();
console.log(car_00.isOpen(), car_00.fuel, car_00.seats);
