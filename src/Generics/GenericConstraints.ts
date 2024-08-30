// Generic constraints

function echo<T extends number| string> (value:T): T {
    return value;
}

const e = echo<number>(1);

interface Message {
title:string|null,
body:string|null
}

function sayHello<T extends Message> (value:T): T {
    return value;
}


const sayHi = sayHello<{title:string,body:string}>({title:"Welcome",body:'hi'});
sayHi.title = 'Hello';
sayHi.body = "Welcome to TypeScript programming languages";

