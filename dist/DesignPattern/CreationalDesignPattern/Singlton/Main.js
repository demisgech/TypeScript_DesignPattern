"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigManager_1 = require("./ConfigManager");
class Main {
    static main() {
        const manager = ConfigManager_1.ConfigManager.instance;
        manager.set("Name", "Demis");
        const other = ConfigManager_1.ConfigManager.instance;
        const name = other.get("name");
        console.log(name);
    }
}
Main.main();
//# sourceMappingURL=Main.js.map