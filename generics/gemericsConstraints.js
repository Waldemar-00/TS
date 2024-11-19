"use strict";
const smth = 55;
const userLog = {
    name: 'Kevin',
    age: 44,
    login: 1212098768340173
};
const receivedParentsData = { mother: 'Gretta', father: 'Tom', married: true };
const userParents = {
    name: 'Gregor',
    age: 37,
    parents: receivedParentsData
};
const depositMoney = (amount) => {
    console.log(`Requiered to the server with amount: ${amount}`);
    return amount;
};
depositMoney(1000);
depositMoney('1000');
