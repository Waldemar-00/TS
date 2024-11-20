"use strict";
class BMWCar {
    date() {
        return 'Date of start';
    }
}
//! Abstract class
class AbstractCar {
    textAboutBMW(text) {
        return text;
    }
}
class BMW extends AbstractCar {
    constructor(model) {
        super();
        this.name = 'BMW';
        this.model = model;
    }
    date() {
        return new Date().toTimeString();
    }
    get car() {
        return `Name of car: ${this.name}. Model of car: ${this.model}`;
    }
    set car(car) {
        this.name = car;
    }
}
const bmw = new BMW('779901');
console.log(bmw.textAboutBMW('Some text about BMW company...'));
console.log(BMW);
