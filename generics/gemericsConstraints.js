var smth = 55;
var userLog = {
    name: 'Kevin',
    age: 44,
    login: 1212098768340173
};
var receivedParentsData = { mother: 'Gretta', father: 'Tom', married: true };
var userParents = {
    name: 'Gregor',
    age: 37,
    parents: receivedParentsData
};
var depositMoney = function (amount) {
    console.log("Requiered to the server with amount: ".concat(amount));
    return amount;
};
depositMoney(1000);
depositMoney('1000');
