"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Square_1 = require("./Square");
const Point_1 = require("./Point");
const circle = new Circle_1.Circle((new Point_1.Point(1, 2)), 2);
circle.describeObject();
const square = new Square_1.Square((new Point_1.Point(12, 34)), 8);
square.describeObject();
const point = new Point_1.Point(1, 2);
point.x = 90;
//# sourceMappingURL=index.js.map