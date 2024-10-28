var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User100 = /** @class */ (function () {
    function User100(name, age) {
        this.name = name;
        this.age = age;
    }
    User100.prototype.getFullName = function (surname) {
        if (surname)
            return "".concat(this.name, " ").concat(surname);
        else
            return "".concat(this.name);
    };
    return User100;
}());
var john = new User100('John', 'twy'); //* any
console.log(john);
var julia = new User100('Julia', 27);
console.log(julia);
console.log(julia.getFullName('Brown'));
console.log(julia.getFullName());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(rules, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.rules = rules;
        return _this;
    }
    AdminUser.prototype.getAdmin = function () { return this.rules; };
    return AdminUser;
}(User100));
var admin = new AdminUser(true, 'John', 23);
console.log(admin.getFullName('Brown'));
console.log(admin.getAdmin());
