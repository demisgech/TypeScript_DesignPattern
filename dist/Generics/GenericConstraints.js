"use strict";
function echo(value) {
    return value;
}
const e = echo(1);
function sayHello(value) {
    return value;
}
const sayHi = sayHello({ title: "Welcome", body: 'hi' });
sayHi.title = 'Hello';
sayHi.body = "Welcome to TypeScript programming languages";
//# sourceMappingURL=GenericConstraints.js.map