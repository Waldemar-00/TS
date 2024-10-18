"use strict";
const cofiguration = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (role) => console.log(role)
};
function configToString({ protocol, port, role, log }) {
    log(role);
    return `Protocol: ${protocol}, Port: ${port}, Role: ${role}`;
}
console.log(configToString(cofiguration));
const styles = {
    position: 'absolute',
    top: '40px',
    left: '70px'
};
const someData = {
    some: 'some',
    other: 3000
};
const other = {
    name: 'Boris',
    method: function () { console.log(this.name); },
};
//* other.name = 'John'
//!Cannot assign to 'name' because it is a read-only property
if (other.method)
    other.method();
//* Non-Null Non-Undefined operator
other.method(); //* your rules
let value;
nonNullNonUndefined();
console.log(value + 100); //* you take problems yourself
function nonNullNonUndefined() {
    value = 100;
}
//* readonly
class Animal {
    constructor() {
        this.name = 'Animal';
    }
}
const ports = [3000, 3001, 8080];
//* ports[ 0 ] = 7001
// ! Index signature in type 'readonly number[]' only permits reading.
const tuplePorts = [3000, 3001, 8080];
//* tuplePorts[ 0 ] = 1000
//! Index signature in type 'readonly number[]' only permits reading.
//* tuplePorts.push( 9000 )
//! Property 'push' does not exist on type 'readonly number[]'.
