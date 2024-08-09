import { Tool } from "./Tool";

export class Selection implements Tool {
  public mouseUp(): void {
    console.log("Selection icon!");
  }
  public mouseDown(): void {
    console.log("Draw a dashed rectangle!");
  }
}
