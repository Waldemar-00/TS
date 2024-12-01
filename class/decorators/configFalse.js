"use strict";
//!"experimentalDecorators": false
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
class House_334 {
    constructor() {
        this.floors = 2;
        this.type = 'block';
        this.street = 'Williams Street';
    }
}
__decorate([
    limitFloors3(12),
    __metadata("design:type", Number)
], House_334.prototype, "floors", void 0);
function limitFloors3(floorsLimit) {
    return function (target, context) {
        return function (gotFloors) {
            if (gotFloors >= 0 && gotFloors <= floorsLimit)
                return gotFloors;
            else
                throw new Error('The floors amount is out of range!');
        };
    };
}
const house_334 = new House_334();
console.log(house_334);
house_334.floors = 29;
console.log(house_334.floors, 'set - 29');
house_334.floors = 10;
console.log(house_334.floors, "Floors after set 10");
