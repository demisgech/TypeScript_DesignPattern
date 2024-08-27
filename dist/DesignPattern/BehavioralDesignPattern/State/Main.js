"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Brush_1 = require("./Brush");
const Canvas_1 = __importDefault(require("./Canvas"));
const EraserTool_1 = require("./EraserTool");
const Selection_1 = require("./Selection");
const canvas = new Canvas_1.default();
canvas.currentTool = new Selection_1.Selection();
canvas.mouseUp();
canvas.mouseDown();
canvas.currentTool = new Brush_1.Brush();
canvas.mouseUp();
canvas.mouseDown();
canvas.currentTool = new EraserTool_1.EraserTool();
canvas.mouseUp();
canvas.mouseDown();
//# sourceMappingURL=Main.js.map