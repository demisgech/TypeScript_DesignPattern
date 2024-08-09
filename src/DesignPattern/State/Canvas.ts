
import { Tool } from "./Tool";

export default class Canvas {
    private _currentTool:Tool = Object();
    mouseDown(): void {
        this._currentTool.mouseDown();
    }

    mouseUp(): void {
        this._currentTool.mouseUp();
    }

    set currentTool(_currentTool: Tool) {
        this._currentTool = _currentTool;
    }

    get currentTool(): Tool {
        return this._currentTool;
    }
}