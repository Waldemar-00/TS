"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _D_privateField, _a, _CommonPlayer_nameOfGame;
//! PRIVATE
class Public {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
const public00 = new Public('name', 100);
console.log(public00.name);
console.log(public00.number);
class Player {
    constructor(_login, _password, server, consent) {
        this._login = _login;
        this._password = _password;
        this.server = server;
        this.consent = consent;
    }
    get getPassword() {
        return { _password: this._password, _login: this._login };
    }
    set getPassword(newPassword) {
        this._password = newPassword;
    }
}
const plaeyrData = new Player('Brown', '18763pq', '5000', true);
console.log(plaeyrData.getPassword, '1');
console.log(plaeyrData.getPassword = '000000000', 'middle');
console.log(plaeyrData.getPassword, '2');
//! PROTECTED
class CompetitivePlayer extends Player {
    constructor() {
        super('Brown', '18763pq', '5000', true);
    }
    isConsent() {
        return this.consent;
    }
}
const competitive = new CompetitivePlayer();
console.log(competitive.isConsent());
let getDPrivateField;
class D {
    constructor(v) {
        _D_privateField.set(this, void 0);
        __classPrivateFieldSet(this, _D_privateField, v, "f");
    }
    get getPrivateValue() {
        return __classPrivateFieldGet(this, _D_privateField, "f");
    }
}
_D_privateField = new WeakMap();
(() => {
    getDPrivateField = (D) => __classPrivateFieldGet(D, _D_privateField, "f");
})();
const DD = new D('our private string');
console.log(getDPrivateField(new D("privateD"))); //* ahead from class
console.log(DD.getPrivateValue); //* from instance
//! STATIC
function getNameFromServer() {
    //* some code to get name of game
    const result = 'Some game';
    return result;
}
class CommonPlayer {
    constructor() { }
    get getGameName() {
        return __classPrivateFieldGet(_a, _a, "f", _CommonPlayer_nameOfGame);
    }
    set getGameName(name) {
        __classPrivateFieldSet(_a, _a, name, "f", _CommonPlayer_nameOfGame);
    }
}
_a = CommonPlayer;
_CommonPlayer_nameOfGame = { value: void 0 };
(() => {
    console.log(`The THIS is equal to the CommonPlayer: ${_a === _a}`);
    //! (this.#nameOfGame = nameOfGame) ===
    //! ( CommonPlayer.#nameOfGame = nameOfGame )
    __classPrivateFieldSet(_a, _a, getNameFromServer(), "f", _CommonPlayer_nameOfGame);
})();
console.log(CommonPlayer.prototype.getGameName);
console.log(CommonPlayer.prototype.getGameName = 'BLITZ');
//! Bind and this
class ExampleThis {
    constructor() {
        this.ourValue = 'Some value';
        this.arrowFn = () => {
            console.log(this.ourValue, 'Arrow function');
        };
        //! Why we do that???
    }
    printValue() {
        console.log(this.ourValue);
    }
    this() {
        return this;
    }
    //! Why we do that???
    typeGuard() {
        return this instanceof ExampleThis2;
    }
}
const textExampl = new ExampleThis();
//* textExampl.printValue()
const otherFn = textExampl.printValue.bind(textExampl);
//* otherFn()
const otherFn2 = textExampl.this().arrowFn;
//* otherFn2()
class ExampleThis2 extends ExampleThis {
    printAnotherPrint() {
        super.printValue();
        this.arrowFn();
        this.this().arrowFn();
    }
}
const exampleThisTest2 = new ExampleThis2();
//* exampleThisTest2.printAnotherPrint()
//! Why we do that???
const typeGuard = new ExampleThis2();
//* typeGuard.typeGuard() ? console.log(typeGuard) : console.log(typeGuard)
if (typeGuard.typeGuard()) {
    console.log('TRUTH');
    typeGuard.printAnotherPrint();
}
if (!typeGuard.typeGuard()) {
    console.log("ELSE");
    typeGuard.printValue();
}
