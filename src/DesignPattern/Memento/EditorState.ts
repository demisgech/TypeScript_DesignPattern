export class EditorState {
    constructor(private _content:string) {

    }

    get content():string {
        return this._content;
    }
}