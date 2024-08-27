import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { TextBox } from "./TextBox";
import { UIControl } from "./UIControl";

class Main {
    public static main():void {
        const textBox = new TextBox();
        textBox.enable();
        this.drawUIControl(textBox);

        const button = new Button();
        button.focus();
        this.drawUIControl(button);
        
        const checkBox = new CheckBox();
        checkBox.setPosition(10,20);
        this.drawUIControl(checkBox);
    }

    public static drawUIControl(control:UIControl):void {
        control.draw();
    }
}

Main.main();