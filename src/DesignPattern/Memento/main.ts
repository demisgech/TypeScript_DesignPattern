import { Editor  } from "./Editor";
import { History } from "./Hisotry";

let history = new History();
let editor = new Editor();
editor.content = 'a';
history.push(editor.creatState());

editor.content = 'b';
history.push(editor.creatState());
editor.content = 'c';
history.push(editor.creatState());

editor.content = 'd';
history.push(editor.creatState());
editor.restore(history.pop())
editor.restore(history.pop())


console.log(editor.content);

