"use strict";
let level;
level = true;
level = 1;
level = 'Level';
function render(document) {
    console.log(document);
}
function log(message) {
    return message;
}
const items = [null, undefined, 'Apple', 1, true];
const obj = {
    name: 'Logger',
    value: 23,
};
const obj2 = obj;
obj2.name = 1;
obj.value = '23';
//# sourceMappingURL=type_any.js.map