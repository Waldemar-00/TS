"use strict";
//!"experimentalDecorators": false
//? Property decorator
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
let House_334 = (() => {
    var _a;
    let _floors_decorators;
    let _floors_initializers = [];
    let _floors_extraInitializers = [];
    return _a = class House_334 {
            constructor() {
                this.floors = __runInitializers(this, _floors_initializers, 2);
                this.type = (__runInitializers(this, _floors_extraInitializers), 'block');
                this.street = 'Williams Street';
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _floors_decorators = [limitFloors3(12)];
            __esDecorate(null, null, _floors_decorators, { kind: "field", name: "floors", static: false, private: false, access: { has: obj => "floors" in obj, get: obj => obj.floors, set: (obj, value) => { obj.floors = value; } }, metadata: _metadata }, _floors_initializers, _floors_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
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
