type Person = {
    id:number,
    name:string,
    walk:() => void
};

const person:Person = {
    id:1,
    name:'Demis',
    walk() {
        console.log("walk");
    },
}
// person.walk();

type Point = {
    x:number,
    y:number,
    calulateDistance:() => number
};

const point:Point = {
    x:12,
    y:11,
    calulateDistance:() =>{
     return point.x * point.y;
    }
};

// console.log(point.calulateDistance());

function getUsers(user:Person):Person {
    user.id = 1,
    user.name = "John";
    user.walk(); 
    return user;
}

// console.log(getUsers(person));

function evaluate(value:string | number):number  {
  if(typeof value === 'number')
    return value * 1.2;
  return parseFloat(value) * 1.2;
}

const substitute = (value:number | string):number => {
    if(typeof value === 'number')
        return value * 1.4;
    return parseFloat(value) * 1.2;
}

console.log(substitute(12));
console.log(substitute("12").toFixed(2));

function square(x:number) : number {
    return x*x;
}

console.log(square(12));


class Shape<T> {
    constructor(public value: T) {
        console.log(value);
    }
}

const shape = new Shape<number>(12);