import { Person } from "./Person";

export class Student extends Person {
    constructor(public title:string,firstName:string,lastName:string) {
        super(firstName,lastName);
    }
    
    get fullName(): string {
        return `${this.title} ${super.fullName}`;
    }
    
}
