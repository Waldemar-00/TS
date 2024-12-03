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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let ShippingContainer = class ShippingContainer {
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
        validate(this, 'width', width);
        validate(this, 'length', length);
        validate(this, 'height', height);
    }
    calcArea(multiply) {
        return this.width * this.length * (multiply ? multiply : 1);
    }
    calcVolume(multiply) {
        return this.width * this.length * this.height * (multiply ? multiply : 1);
    }
};
__decorate([
    isInt(),
    min(10),
    max(100),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "width", void 0);
__decorate([
    isInt(),
    min(10),
    max(100),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "length", void 0);
__decorate([
    isInt(),
    min(10),
    max(100),
    __metadata("design:type", Number)
], ShippingContainer.prototype, "height", void 0);
__decorate([
    lastCalculation('calcArea'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], ShippingContainer.prototype, "calcArea", null);
__decorate([
    lastCalculation('calcVolume'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingContainer.prototype, "calcVolume", null);
ShippingContainer = __decorate([
    addDate,
    __metadata("design:paramtypes", [Number, Number, Number])
], ShippingContainer);
function addDate(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.date = new Date().toTimeString();
        }
    };
}
function lastCalculation(method) {
    return function (target, propertyKey, descriptor) {
        let oldMethod = descriptor.value;
        descriptor.value = function () {
            this.lastCalculation = `The last calculation of method ${method[0].toLocaleUpperCase() + method.slice(1)} was at ${new Date()}`;
            //* return oldMethod.apply( this, arguments ) or below
            return oldMethod.apply(this);
        };
    };
}
function isInt() {
    return function (target, propertyKey) {
        Reflect.defineMetadata('isInt', true, target, propertyKey);
    };
}
function min(min) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('min', min, target, propertyKey);
    };
}
function max(max) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('max', max, target, propertyKey);
    };
}
function validate(target, propertyKey, value) {
    if (Reflect.hasMetadata('isInt', target, propertyKey) && !Number.isInteger(value)) {
        throw new Error(`The ${propertyKey.toString()} is not interger!`);
    }
    if (Reflect.hasMetadata('min', target, propertyKey) && value < Reflect.getMetadata('min', target, propertyKey)) {
        throw new Error(`The ${propertyKey.toString()} is smaller than range!`);
    }
    if (Reflect.hasMetadata('max', target, propertyKey) && value > Reflect.getMetadata('max', target, propertyKey)) {
        throw new Error(`The ${propertyKey.toString()} is larger than range`);
    }
    return true;
}
function finalValidate(obj) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        for (let key in obj) {
            validate(obj, key, obj[key]);
        }
    }
}
const container = new ShippingContainer(10, 90, 30);
console.log(container.calcArea());
console.log(container.calcVolume());
container.width = 70;
container.width = 11;
container.width = 99;
finalValidate(container);
console.log(container);
console.log(container.date);
console.log(container.lastCalculation);
console.log(container.width);
