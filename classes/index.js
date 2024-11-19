"use strict";
class User100 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullName(surname) {
        if (surname)
            return `${this.name} ${surname}`;
        else
            return `${this.name}`;
    }
}
const john = new User100('John', 'twy'); //* any
console.log(john);
const julia = new User100('Julia', 27);
console.log(julia);
console.log(julia.getFullName('Brown'));
console.log(julia.getFullName());
class AdminUser extends User100 {
    constructor(rules, name, age) {
        super(name, age);
        this.rules = rules;
    }
    getAdmin() { return this.rules; }
}
const admin = new AdminUser(true, 'John', 23);
console.log(admin.getFullName('Brown'));
console.log(admin.getAdmin());
