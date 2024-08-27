
export class Person {
    constructor(public firstName:string,public lastName:string) {
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    walk():void {
        console.log('Walk');
    }

}