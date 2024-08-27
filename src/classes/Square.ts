import { Shape } from "./Shape";
import { Point } from "./Point";

export class Square extends Shape {
    
    constructor(private topLeft:Point,private sideLength:number) {
        super();
    }
    public override getSurface(): number {
        return this.sideLength * this.sideLength;
    }
    public override describeObject(): void {
        console.log(`This is a square starting at (${ this.topLeft.x },${this.topLeft.y}) with length of ${this.sideLength} unit.`);

    }
    public override getDoubledSurface(): number {
        return this.getSurface()*2;
    }

}