"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    title;
    constructor(title, firstName, lastName) {
        super(firstName, lastName);
        this.title = title;
    }
    get fullName() {
        return `${this.title} ${super.fullName}`;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map