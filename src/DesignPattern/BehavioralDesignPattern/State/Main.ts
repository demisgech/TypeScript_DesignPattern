import { Brush } from "./Brush";
import Canvas from "./Canvas";
import { EraserTool } from "./EraserTool";
import { Selection } from "./Selection";


const canvas = new Canvas();
canvas.currentTool = new Selection();
canvas.mouseUp();
canvas.mouseDown();

canvas.currentTool = new Brush();
canvas.mouseUp();
canvas.mouseDown();

canvas.currentTool = new EraserTool();
canvas.mouseUp();
canvas.mouseDown();