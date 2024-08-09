import { EditorState } from "./EditorState";

export class Editor {
    private _content:string = '';
    get content():string {
        return this._content;
    }

    set content(content:string) {
        this._content = content;
    }
    creatState():EditorState{
        return new EditorState(this._content);
    }

    restore(state:EditorState):void {
        this._content = state.content;
    }
}