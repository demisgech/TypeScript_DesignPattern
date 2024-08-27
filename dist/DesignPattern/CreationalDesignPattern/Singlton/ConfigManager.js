"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
class ConfigManager {
    _setting = new Map();
    static _instance = new ConfigManager();
    static get instance() {
        return ConfigManager._instance;
    }
    constructor() { }
    get(key) {
        return this._setting.get(key);
    }
    set(key, value) {
        this._setting.set(key, value);
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=ConfigManager.js.map