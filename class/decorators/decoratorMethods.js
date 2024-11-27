"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
// @changeDoorStatus1( false )
// @changeFuelAmount1( 75 )
// @changeSeatsAmount1(11)
let Car_01 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _seats_decorators;
    let _seats_initializers = [];
    let _seats_extraInitializers = [];
    let _isOpen_decorators;
    return _a = class Car_01 {
            isOpen(msg) {
                return this.open ? 'open' : `closed: ${msg}`;
            }
            constructor() {
                this.fuel = (__runInitializers(this, _instanceExtraInitializers), '30%');
                this.open = true;
                this.seats = __runInitializers(this, _seats_initializers, 4);
                __runInitializers(this, _seats_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _seats_decorators = [limitSeatsDecorator(1)];
            _isOpen_decorators = [printFuelInformation];
            __esDecorate(_a, null, _isOpen_decorators, { kind: "method", name: "isOpen", static: false, private: false, access: { has: obj => "isOpen" in obj, get: obj => obj.isOpen }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _seats_decorators, { kind: "field", name: "seats", static: false, private: false, access: { has: obj => "seats" in obj, get: obj => obj.seats, set: (obj, value) => { obj.seats = value; } }, metadata: _metadata }, _seats_initializers, _seats_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
//! property decorators
function limitSeatsDecorator(limit) {
    return function (target, propertyKey) {
        let value;
        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: (newNumber) => (value >= 0 && value <= limit) ? value = newNumber : console.log('The number is out of range!')
        });
    };
}
//! Decorated the additional methods
function printFuelInformation(context, propertyKey, descriptor) {
    const oldFn = descriptor.value;
    descriptor.value = function (...arg) {
        console.log('I changed method isOpen');
        console.log(this.fuel); //! this: any => here
        return oldFn.apply(this, arg);
        // return this.open ? 'open' : 'closed' //! second method
    };
}
//! "experimentalDecorators": false
// function printFuelInformation ( constructor: any, context: ClassMethodDecoratorContext )
//   {
//     return function (this: any, ...arg: any[]) //! second => this: any
//     {
//       console.log( 'I changed method isOpen' )
//       console.log(this.fuel) //! this: any => here
//       return constructor.apply(this, arg)
//     }
// }
// function printFuelInformation<T, A extends any[], R> ( constructor: (this: T, ...args: A) => R, context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R >)
// {
//   return function (this: T, ...args: A): R //! second => this: any
//   {
//     console.log( 'I changed method isOpen' )
//     console.log( `${ String( context.name ) } was started` )
//     // console.log( this.fuel) //! error of type
//     return constructor.apply(this, args)
//   }
// }
//? @printFuelInformation
//?   isOpen (msg: string)
//?   {
//?     return this.open ? 'open' : `closed: ${msg}`
//?   }
function changeDoorStatus1(status) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeFuelAmount1(fuel) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${fuel}%`;
            }
        };
    };
}
function changeSeatsAmount1(seats) {
    return function (target) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.seats = seats;
            }
        };
    };
}
const car_01 = new Car_01();
console.log(car_01.isOpen('for a long time'), car_01.fuel, car_01.seats);
console.log(car_01);
//! example
