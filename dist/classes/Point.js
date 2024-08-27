"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    calculateDistance(other) {
        const dx = other.x - this._x;
        const dy = other.y - this._y;
        const result = Math.pow(dx, 2) + Math.pow(dy, 2);
        return Math.sqrt(result);
    }
}
exports.Point = Point;
//# sourceMappingURL=Point.js.map