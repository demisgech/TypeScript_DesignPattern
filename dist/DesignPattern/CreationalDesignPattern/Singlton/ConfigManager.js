"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
class ConfigManager {
    _settings = new Map();
    static _instance = new ConfigManager();
    static get instance() {
        return ConfigManager._instance;
    }
    constructor() { }
    get(key) {
        return this._settings.get(key);
    }
    set(key, value) {
        this._settings.set(key, value);
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=ConfigManager.js.map