"use strict";
//! Extract
//! Exclude
//! Omit
//! Pick
//! Record
const keySymbol = Symbol('name');
const keySymbol1 = Symbol('name');
const a = 'a';
const someObjetc1 = {
    [a]: 100,
    [keySymbol]: 'John',
    [keySymbol1]: 'Ivan',
    b: 1,
    c: 'some string'
};
