
export class Point {
   
    constructor(private _x: number,private _y: number) {

    }
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }

    calculateDistance(other:Point):number {
        const dx:number = other.x -this._x; 
        const dy:number = other.y - this._y;
        const result = Math.pow(dx,2)+ Math.pow(dy,2);
        return Math.sqrt(result);
    }
}