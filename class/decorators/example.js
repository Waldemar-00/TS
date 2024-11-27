"use strict";
//!"experimentalDecorators": true
//? Property decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class House_332 {
    constructor() {
        this.floors = 22;
        this.type = 'block';
        this.street = 'Williams Street';
    }
}
__decorate([
    limitFloors(12)
], House_332.prototype, "floors", void 0);
function limitFloors(floorsLimit) {
    return function (target, propertyKey) {
        //!"TARGET" contains only propery floors: number = 9, with initial value
        //!"propertyKey" contains property key "floors"
        //? console.log(target, "TARGETta")
        let value; //! Value gets his asset in the set function after validation
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            configurable: true,
            get: () => value,
            set: (gotFloors) => {
                if (gotFloors >= 0 && gotFloors <= floorsLimit)
                    value = gotFloors;
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
const house_332 = new House_332(); //! Created new class instance without property "floors"!!!!!!!!!!!!!!!!!
// console.log( house_332 ) //! { type: 'block', street: 'Williams Street' }
//! BUT property FLOORS placed in the prototype with initial value
console.log(house_332);
console.log(house_332.floors);
if (house_332.errors)
    console.log(house_332.errors);
house_332.floors = 29;
console.log(house_332.floors);
if (house_332.errors)
    console.log(house_332.errors);
house_332.floors = 10;
console.log(house_332);
console.log(house_332.floors, "Floors after set");
