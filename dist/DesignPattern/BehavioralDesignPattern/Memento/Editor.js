"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const EditorState_1 = require("./EditorState");
class Editor {
    _content = '';
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    creatState() {
        return new EditorState_1.EditorState(this._content);
    }
    restore(state) {
        this._content = state.content;
    }
}
exports.Editor = Editor;
//# sourceMappingURL=Editor.js.map