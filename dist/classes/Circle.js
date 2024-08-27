"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    center;
    radius;
    constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
    }
    getSurface() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    describeObject() {
        console.log(`This is a circle with a center (${this.center.x},${this.center.y}) and radius of ${this.radius} unit`);
    }
    getDoubledSurface() {
        return 2 * this.getSurface();
    }
    getDiameter() {
        return 2 * this.radius;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map