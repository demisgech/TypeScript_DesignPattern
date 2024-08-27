
export abstract class Shape {

    public abstract getSurface():number;

    public  describeObject():void {
        console.log('This is a shape.');
    }
    
    public getDoubledSurface():number {
        return 2* this.getSurface();
    }
}