"use strict";
const person = {
    id: 1,
    name: 'Demis',
    walk() {
        console.log("walk");
    },
};
const point = {
    x: 12,
    y: 11,
    calulateDistance: () => {
        return point.x * point.y;
    }
};
function getUsers(user) {
    user.id = 1,
        user.name = "John";
    user.walk();
    return user;
}
function evaluate(value) {
    if (typeof value === 'number')
        return value * 1.2;
    return parseFloat(value) * 1.2;
}
const substitute = (value) => {
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
class Shape {
    value;
    constructor(value) {
        this.value = value;
        console.log(value);
    }
}
const shape = new Shape(12);
//# sourceMappingURL=index.js.map