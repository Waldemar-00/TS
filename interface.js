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
