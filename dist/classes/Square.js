"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
class Square extends Shape_1.Shape {
    topLeft;
    sideLength;
    constructor(topLeft, sideLength) {
        super();
        this.topLeft = topLeft;
        this.sideLength = sideLength;
    }
    getSurface() {
        return this.sideLength * this.sideLength;
    }
    describeObject() {
        console.log(`This is a square starting at (${this.topLeft.x},${this.topLeft.y}) with length of ${this.sideLength} unit.`);
    }
    getDoubledSurface() {
        return this.getSurface() * 2;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map