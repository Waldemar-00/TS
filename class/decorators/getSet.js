"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @changeDoorStatus1( false )
// @changeFuelAmount1( 75 )
// @changeSeatsAmount1(11)
class Car_get_set {
    constructor() {
        this.fuel = '30%';
        this.open = true;
        this.seats = 4;
        this._weight = 1000;
    }
    isOpen() {
        return this.open ? 'open' : `closed`;
    }
    get weight() { return this._weight; }
    set weight(w) { this._weight += w; }
}
__decorate([
    changeGetSet()
], Car_get_set.prototype, "weight", null);
function changeGetSet() {
    return function (_target, _propertyKey, descriptor) {
        const oldGet = descriptor.get;
        const oldSet = descriptor.set;
        descriptor.get = function () {
            console.log('Here in the Getter we added a new functional!');
            return oldGet?.apply(this);
        };
        descriptor.set = function (...arg) {
            console.log(`Here in the Setter we added a new functional! With arguments: ${[...arg]}`);
            return oldSet?.apply(this, arg);
        };
    };
}
const car_get_set = new Car_get_set();
console.log(car_get_set);
car_get_set.weight = 1000;
console.log(car_get_set.weight);
console.log(car_get_set);
