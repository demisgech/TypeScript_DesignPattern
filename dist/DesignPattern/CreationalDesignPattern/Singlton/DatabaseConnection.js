"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
class DatabaseConnection {
    _settings = new Set();
    static _instance = new DatabaseConnection();
    static getInstance() {
        return DatabaseConnection._instance;
    }
    constructor() { }
    get settings() {
        return this._settings;
    }
    set settings(value) {
        this._settings = value;
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map