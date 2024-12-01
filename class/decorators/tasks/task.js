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
let ShippingContainer = class ShippingContainer {
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
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
    min(1),
    max(10),
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
// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра
function addDate(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.date = new Date().toTimeString();
        }
    };
}
// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число
function isInt() {
    return function (target, propertyKey) {
        let value;
        function getter() {
            return this[value];
        }
        function setter(newNumber) {
            if (Number.isInteger(newNumber))
                this[value] = newNumber;
            else
                console.log('The number is not integer');
        }
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter
        });
    };
}
function min(min) {
    return function (target, propertyKey) {
        let value;
        function getter() {
            return this[value];
        }
        function setter(newNumber) {
            if (newNumber >= min)
                this[value] = newNumber;
            else
                console.log(`The number must be smaller or equal to the minimum: ${min}`);
        }
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter
        });
    };
}
function max(max) {
    return function (target, propertyKey) {
        let value;
        function getter() {
            return this[value];
        }
        function setter(newNumber) {
            if (newNumber <= max)
                this[value] = newNumber;
            else
                console.log(`The number must be smaller or equal the maximum: ${max}`);
        }
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            configurable: true,
            get: getter,
            set: setter
        });
    };
}
// ИЛИ менять содержимое свойства класса lastCalculation
// Как значение записывать в него строку , "Последний подсчет ${method} был ${Дата}"
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)
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
const container = new ShippingContainer(20, 500, 30);
console.log(container.calcArea());
console.log(container.calcVolume());
container.width = 11.5;
container.width = 9;
container.width = 112;
console.log(container);
// for ( let prop in container )
// {
// 	console.log(prop)
// }
