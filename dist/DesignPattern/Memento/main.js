"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = require("./Editor");
const Hisotry_1 = require("./Hisotry");
let history = new Hisotry_1.History();
let editor = new Editor_1.Editor();
editor.content = 'a';
history.push(editor.creatState());
editor.content = 'b';
history.push(editor.creatState());
editor.content = 'c';
history.push(editor.creatState());
editor.content = 'd';
history.push(editor.creatState());
editor.restore(history.pop());
editor.restore(history.pop());
console.log(editor.content);
//# sourceMappingURL=main.js.map