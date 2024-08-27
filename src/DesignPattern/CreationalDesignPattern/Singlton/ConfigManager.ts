// Singlto pattern

export class ConfigManager {
    private _settings = new Map<string, Object>();
    private static _instance: ConfigManager = new ConfigManager();
    public static get instance(): ConfigManager {
        return ConfigManager._instance;
    }
    private constructor() {}

    
    public get(key:string) {
        return this._settings.get(key);
    }
    public set(key:string,value:Object) {
        this._settings.set(key,value);
    }
}