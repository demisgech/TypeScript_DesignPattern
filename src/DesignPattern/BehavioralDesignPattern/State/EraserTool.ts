import { Tool } from "./Tool";

export class EraserTool implements Tool {
    mouseUp(): void {
        console.log('Eraser icon.');
        
    }
    mouseDown(): void {
        console.log('Erase something...');
        
    }

}