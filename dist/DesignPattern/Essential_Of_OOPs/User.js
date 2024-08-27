"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hi, my name is ${this.name} `);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map