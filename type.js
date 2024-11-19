"use strict";
const demand = {
    mark: 'Mercedes',
    model: 1238701,
    country: 'German',
    cost: 100800
};
const customer = {
    ...demand,
    name: 'David',
    surname: 'Brown'
};
const createCar = ({ mark, model, country, cost, name, surname }) => {
    return `Mark of car: ${mark}. Model: ${model}. Country: ${country}. Cost: ${cost}$. Customer is ${name} ${surname}`;
};
console.log(createCar(customer));
