import { Tool } from "./Tool";

export class Brush implements Tool {
    public mouseUp(): void {
        console.log('Brush icon!');
    }
    public mouseDown(): void {
        console.log('Draw a line!');
        
    }

}