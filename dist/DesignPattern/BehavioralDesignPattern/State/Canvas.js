"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Canvas {
    _currentTool = Object();
    mouseDown() {
        this._currentTool.mouseDown();
    }
    mouseUp() {
        this._currentTool.mouseUp();
    }
    set currentTool(_currentTool) {
        this._currentTool = _currentTool;
    }
    get currentTool() {
        return this._currentTool;
    }
}
exports.default = Canvas;
//# sourceMappingURL=Canvas.js.map