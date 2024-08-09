var person = {
    id: 1,
    name: 'Demis',
    walk: function () {
        console.log("walk");
    },
};
var point = {
    x: 12,
    y: 11,
    calulateDistance: function () {
        return point.x * point.y;
    }
};
// console.log(point.calulateDistance());
function getUsers(user) {
    user.id = 1,
        user.name = "John";
    user.walk();
    return user;
}
// console.log(getUsers(person));
function evaluate(value) {
    if (typeof value === 'number')
        return value * 1.2;
    return parseFloat(value) * 1.2;
}
var substitute = function (value) {
    if (typeof value === 'number')
        return value * 1.4;
    return parseFloat(value) * 1.2;
};
console.log(substitute(12));
console.log(substitute("12").toFixed(2));
function square(x) {
    return x * x;
}
console.log(square(12));
var Shape = /** @class */ (function () {
    function Shape(value) {
        this.value = value;
        console.log(value);
    }
    return Shape;
}());
var shape = new Shape(12);
