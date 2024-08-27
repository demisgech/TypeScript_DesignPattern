"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = require("./Button");
const CheckBox_1 = require("./CheckBox");
const TextBox_1 = require("./TextBox");
class Main {
    static main() {
        const textBox = new TextBox_1.TextBox();
        textBox.enable();
        this.drawUIControl(textBox);
        const button = new Button_1.Button();
        button.focus();
        this.drawUIControl(button);
        const checkBox = new CheckBox_1.CheckBox();
        checkBox.setPosition(10, 20);
        this.drawUIControl(checkBox);
    }
    static drawUIControl(control) {
        control.draw();
    }
}
Main.main();
//# sourceMappingURL=UIMain.js.map