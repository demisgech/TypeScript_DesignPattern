class KeyValuePair<K,V> {
    constructor(public key:K,public vlaue:V) {

    }

    log():void {
        console.log(this.key,this.vlaue);
    }

}

const keyValuePair = new KeyValuePair<string,string>('Name','Demis');

keyValuePair.log();

function showValue<T>(value:T){
    console.log(value);
}
showValue<string>("Hello world");
showValue<number>(12);

function wrapInArray<T>(values:T[]) {
    for(const value of values)
        console.log(value);
}
wrapInArray<number>([1,2,4,3]);

class ArrayUtils {
     wrapInArray<T>(values:T[]) {
        for(const value of values)
            console.log(value);
    }
}

let utils = new ArrayUtils();
utils.wrapInArray<string> (['Demis',"Abebe",'Dereje'])

interface Result<T> {
    data:T|null,
    error: string|null
}

function fetch<T>(url:string):Result<T> {
    url;
    return {data:null,error:null}
}

interface User {
    username:string;
}

interface Product {
    title:string;
}

const firstResult = fetch<Product>("https://mywebsite.com")
firstResult.data?.title;

const secondResult = fetch<Product>('url');
secondResult.data?.title;

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

