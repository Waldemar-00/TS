function printSomething(message) {
    if (message === 'some')
        return 'Greate Key "SOME"';
    else
        return 'Key NUMBER';
}
console.log(printSomething('some'));
console.log(printSomething('other'));
var company = {
    name: 'IBM',
    amount: 10000000
};
function printCompany(company, name, amount) {
    return "Name of Company: ".concat(company[name], ". Total ").concat(company[amount]);
}
console.log(printCompany(company, 'name', 'amount'));
var google = {
    brend: 'Google',
    debts: 10000000000
};
console.log(printCompany(google, 'brend', 'debts'));
//* got keys from object google, Google inteface
var someObject = {
    key1: 100,
    key2: 'some text'
};
