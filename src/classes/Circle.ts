import { Shape } from "./Shape";
import { Point } from "./Point";

export class Circle extends Shape {
    constructor(private center:Point,private radius:number) {
        super();
    }
    public override getSurface(): number {
        return Math.PI * Math.pow(this.radius,2);
    }
    public override describeObject(): void {
        console.log(`This is a circle with a center (${ this.center.x },${ this.center.y}) and radius of ${this.radius} unit`);
    }
    public override getDoubledSurface(): number {
        return 2*this.getSurface();
    }
    public getDiameter():number {
        return 2*this.radius;
    }
}