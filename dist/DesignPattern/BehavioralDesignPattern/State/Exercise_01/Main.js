"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseCRUDOperation_1 = require("./CourseCRUDOperation");
const Operation_1 = require("./Operation");
class Main {
    static main() {
        const operation = new Operation_1.Operation();
        operation.operation = new CourseCRUDOperation_1.CourseCRUDOpeation();
        operation.create("information goes here...");
        operation.update("information goes here...");
        operation.read('information goes here...');
        operation.delete('information goes here...');
    }
}
Main.main();
//# sourceMappingURL=Main.js.map