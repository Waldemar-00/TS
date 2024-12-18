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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let reflectKey = Symbol('limit');
class Travel {
    constructor() {
        this.country = 'Germany';
        this.season = 'summer';
        this.duration = 14;
    }
    startTravel(passengers) {
        console.log(`Amount of passengers is ${passengers}`);
    }
}
__decorate([
    validate,
    __param(0, limit),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Travel.prototype, "startTravel", null);
//! decorator for a parameter
function limit(target, propertyKey, parameterIndex) {
    let indexesOfparameters = Reflect.getOwnMetadata(reflectKey, target, propertyKey) || [];
    indexesOfparameters.push(parameterIndex); //! Without properties - ONLY indexes of parameters
    Reflect.defineMetadata(reflectKey, indexesOfparameters, target, propertyKey);
    //* console.log( Reflect.getOwnMetadata( 'design:type', target, propertyKey ) )
    //* console.log( Reflect.getOwnMetadata( 'design:paramtypes', target, propertyKey ) )
    //* console.log( Reflect.getOwnMetadata( 'design:returntype', target, propertyKey ) )
}
//! decorator for a method
function validate(target, propertyKey, descriptor //! It is object about property( propertyKey ): enumerable, writable, configurable and VALUE!
) {
    //* console.log( descriptor )
    //* console.log(propertyKey)
    let oldMethod = descriptor.value;
    descriptor.value = function (...args) {
        let indexesOfparameters = Reflect.getOwnMetadata(reflectKey, target, propertyKey);
        if (indexesOfparameters) {
            for (let index of indexesOfparameters) //!limitsParameters contains only indexes
             {
                if (args[index] > 0 && args[index] < 11) {
                    console.log('Validate has been done!');
                    return oldMethod?.apply(this, args);
                }
                else
                    console.log("Validate has been failed!");
            }
        }
    };
}
const travel = new Travel();
travel.startTravel(10);
travel.startTravel(12);
travel.startTravel(0);
