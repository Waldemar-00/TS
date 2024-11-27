"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
let Car_00 = (() => {
    let _classDecorators = [changeDoorStatus(false), changeFuelAmount(90), changeSeatsAmount(7)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Car_00 = _classThis = class {
        constructor() {
            this.fuel = '30%';
            this.open = true;
            this.seats = 4;
        }
        isOpen() {
            return this.open ? 'open' : 'closed';
        }
    };
    __setFunctionName(_classThis, "Car_00");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Car_00 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Car_00 = _classThis;
})();
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
