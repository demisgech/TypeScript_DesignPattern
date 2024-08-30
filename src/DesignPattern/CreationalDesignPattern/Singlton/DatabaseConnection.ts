
export class DatabaseConnection {
    private _settings: Set<Object> = new Set<Object>();
    private static _instance: DatabaseConnection = new DatabaseConnection();
    
    public static getInstance(): DatabaseConnection {
        return DatabaseConnection._instance;
    }
    private constructor(){}
             
    public get settings(): Set<Object> {
        return this._settings;
    }
    public set settings(value: Set<Object>) {
        this._settings = value;
    }
}