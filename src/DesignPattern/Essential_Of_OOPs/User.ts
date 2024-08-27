
export class User {
    
    constructor(public name:string,public age:number) {
    }

    public sayHello():void {
        console.log(`Hi, my name is ${ this.name} `);
    }
}