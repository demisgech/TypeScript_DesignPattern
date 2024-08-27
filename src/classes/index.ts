import { Circle } from "./Circle";
import { Square } from "./Square";
import { Point } from "./Point";

const circle = new Circle((new Point(1,2)),2);
circle.describeObject();

const square = new Square((new Point(12,34)),8);
square.describeObject();

const point = new Point(1,2);
point.x = 90;