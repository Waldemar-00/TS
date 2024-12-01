"use strict";
//!"experimentalDecorators": true
//? Property decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class House_333 {
    constructor() {
        this.floors = 22;
        this.type = 'block';
        this.street = 'Williams Street';
    }
}
__decorate([
    limitFloors2(12),
    __metadata("design:type", Number)
], House_333.prototype, "floors", void 0);
function limitFloors2(floorsLimit) {
    return function (target, propertyKey) {
        //!"TARGET" contains only propery floors: number = 9, with initial value
        //!"propertyKey" contains property key "floors"
        //? console.log(target, "TARGETta")
        let symbol = Symbol('symbol');
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[symbol];
            },
            set: function (gotFloors) {
                if (gotFloors >= 0 && gotFloors <= floorsLimit)
                    this[symbol] = gotFloors;
                else {
                    Object.defineProperty(target, 'errors', {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: 'The floors amount is out of range!!!'
                    });
                }
            }
        });
    };
}
const house_333 = new House_333(); //! Created new class instance without property "floors"!!!!!!!!!!!!!!!!!
// console.log( house_333 ) //! { type: 'block', street: 'Williams Street' }
//! BUT property FLOORS placed in the prototype with initial value
console.log(house_333);
console.log(house_333.floors);
if (house_333.errors)
    console.log(house_333.errors);
house_333.floors = 29;
console.log(house_333.floors);
if (house_333.errors)
    console.log(house_333.errors);
house_333.floors = 10;
console.log(house_333);
console.log(house_333.floors, "Floors after set");
const clone = Object.assign({}, house_333);
console.log(clone);
