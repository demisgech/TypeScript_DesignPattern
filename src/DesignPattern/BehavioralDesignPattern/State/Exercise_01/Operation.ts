import { CRUDOperaion } from "./CRUDOperation";

export class Operation<T> {
    private _operation: CRUDOperaion<T> = Object();

    public get operation(): CRUDOperaion<T> {
        return this._operation;
    }
    public set operation(operation: CRUDOperaion<T>) {
        this._operation = operation;
    }

    public create (data: T) : void {
        this._operation.create(data);
    }
    public read (data: T) : void {
        this._operation.read(data);
    }
    public update(data: T) :void {
        this._operation.update(data);
    }
    public  delete(data: T) : void{        
        this._operation.delete(data);
    }
}