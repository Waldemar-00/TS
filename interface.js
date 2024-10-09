var cofiguration = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: function (role) { return console.log(role); }
};
function configToString(_a) {
    var protocol = _a.protocol, port = _a.port, role = _a.role, log = _a.log;
    log(role);
    return "Protocol: ".concat(protocol, ", Port: ").concat(port, ", Role: ").concat(role);
}
console.log(configToString(cofiguration));
var styles = {
    position: 'absolute',
    top: '40px',
    left: '70px'
};
var someData = {
    some: 'some',
    other: 3000
};
var other = {
    name: 'Boris',
    method: function () { console.log(this.name); },
};
if (other.method)
    other.method();
//* Non-Null Non-Undefined operator
other.method(); //* your rules
var value;
nonNullNonUndefined();
console.log(value + 100); //* you take problems yourself
function nonNullNonUndefined() {
    value = 100;
}
