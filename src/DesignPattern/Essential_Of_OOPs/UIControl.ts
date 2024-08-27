
export abstract class UIControl {
    public enable():void {
        console.log('Enabled');
    }
    public focus():void {
        console.log('Focused');
    }
    public setPosition(x:number,y:number) {
        console.log(`Positioned at (${x},${y})`)
    }
    public abstract draw():void;
}