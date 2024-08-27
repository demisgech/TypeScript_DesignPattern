"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
class History {
    states = [];
    push(state) {
        this.states.push(state);
    }
    pop() {
        const lastIndex = this.states.length - 1;
        const lastState = this.states[lastIndex];
        this.states.pop();
        return lastState;
    }
}
exports.History = History;
//# sourceMappingURL=Hisotry.js.map