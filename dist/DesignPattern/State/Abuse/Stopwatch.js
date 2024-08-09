"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stopwatch = void 0;
const StoppedState_1 = require("./StoppedState");
class Stopwatch {
    _currentState = new StoppedState_1.StoppedState(this);
    get currentState() {
        return this._currentState;
    }
    set currentState(value) {
        this._currentState = value;
    }
    click() {
        this._currentState.click();
    }
}
exports.Stopwatch = Stopwatch;
//# sourceMappingURL=Stopwatch.js.map