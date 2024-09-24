"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
class Operation {
    _operation = Object();
    get operation() {
        return this._operation;
    }
    set operation(operation) {
        this._operation = operation;
    }
    create(data) {
        this._operation.create(data);
    }
    read(data) {
        this._operation.read(data);
    }
    update(data) {
        this._operation.update(data);
    }
    delete(data) {
        this._operation.delete(data);
    }
}
exports.Operation = Operation;
//# sourceMappingURL=Operation.js.map