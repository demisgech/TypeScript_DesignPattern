import { EditorState } from "./EditorState";

export class History{
    private states:EditorState[] = [];

  push(state:EditorState):void {
    this.states.push(state);
  }
  pop():EditorState {
    const lastIndex = this.states.length-1;
    const lastState = this.states[lastIndex];
    this.states.pop();
    return lastState;
  }
}