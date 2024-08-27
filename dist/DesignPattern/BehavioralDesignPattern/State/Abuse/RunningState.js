"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunningState = void 0;
const StoppedState_1 = require("./StoppedState");
class RunningState {
    stopwatch;
    constructor(stopwatch) {
        this.stopwatch = stopwatch;
    }
    click() {
        this.stopwatch.currentState = new StoppedState_1.StoppedState(this.stopwatch);
        console.log('Stopped...');
    }
}
exports.RunningState = RunningState;
//# sourceMappingURL=RunningState.js.map