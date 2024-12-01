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
class Car_get_set_es5 {
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
    changeGetEs5,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Car_get_set_es5.prototype, "weight", null);
function changeGetEs5(target, context) {
    return function () {
        console.log('Here in the Getter we added a new functional!');
        return target.apply(this);
    };
}
function changeSetEs5(target, context) {
    return function (...args) {
        console.log('Here in the Setter we added a new functional!');
        return target.apply(this, args);
    };
}
const car_get_set_es5 = new Car_get_set_es5();
console.log(car_get_set_es5);
car_get_set_es5.weight = 1000;
console.log(car_get_set_es5.weight);
console.log(car_get_set_es5);
