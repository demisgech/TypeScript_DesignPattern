"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseConnection_1 = require("./DatabaseConnection");
class Main {
    static main() {
        const dbConnection = DatabaseConnection_1.DatabaseConnection.getInstance();
        dbConnection.settings.add("Connection");
        console.log(dbConnection.settings);
        const otherConnection = DatabaseConnection_1.DatabaseConnection.getInstance();
        otherConnection.settings.add("Connection...");
        console.log(otherConnection.settings);
    }
}
Main.main();
//# sourceMappingURL=DBCMain.js.map