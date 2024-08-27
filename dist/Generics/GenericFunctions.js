"use strict";
function showValue(value) {
    console.log(value);
}
showValue("Hello world");
showValue(12);
function wrapInArray(values) {
    for (const value of values)
        console.log(value);
}
wrapInArray([1, 2, 4, 3]);
class ArrayUtils {
    wrapInArray(values) {
        for (const value of values)
            console.log(value);
    }
}
let utils = new ArrayUtils();
utils.wrapInArray(['Demis', "Abebe", 'Dereje']);
//# sourceMappingURL=GenericFunctions.js.map