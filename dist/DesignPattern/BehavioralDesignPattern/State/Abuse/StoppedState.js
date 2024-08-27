"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoppedState = void 0;
const RunningState_1 = require("./RunningState");
class StoppedState {
    stopwatch;
    constructor(stopwatch) {
        this.stopwatch = stopwatch;
    }
    click() {
        this.stopwatch.currentState = new RunningState_1.RunningState(this.stopwatch);
        console.log('Running...');
    }
}
exports.StoppedState = StoppedState;
//# sourceMappingURL=StoppedState.js.map