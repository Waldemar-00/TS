var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var demand = {
    mark: 'Mercedes',
    model: 1238701,
    country: 'German',
    cost: 100800
};
var customer = __assign(__assign({}, demand), { name: 'David', surname: 'Brown' });
var createCar = function (_a) {
    var mark = _a.mark, model = _a.model, country = _a.country, cost = _a.cost, name = _a.name, surname = _a.surname;
    return "Mark of car: ".concat(mark, ". Model: ").concat(model, ". Country: ").concat(country, ". Cost: ").concat(cost, "$. Customer is ").concat(name, " ").concat(surname);
};
console.log(createCar(customer));
