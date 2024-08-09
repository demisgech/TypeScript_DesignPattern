"use strict";
class KeyValuePair {
    key;
    vlaue;
    constructor(key, vlaue) {
        this.key = key;
        this.vlaue = vlaue;
    }
    log() {
        console.log(this.key, this.vlaue);
    }
}
const keyValuePair = new KeyValuePair('Name', 'Demis');
keyValuePair.log();
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
function fetch(url) {
    url;
    return { data: null, error: null };
}
const firstResult = fetch("https://mywebsite.com");
firstResult.data?.title;
const secondResult = fetch('url');
secondResult.data?.title;
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
//# sourceMappingURL=KeyValuePair.js.map