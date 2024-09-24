import { CRUDOperaion } from "./CRUDOperation";

export class TeacherCRUDOpeation<T> implements CRUDOperaion<T> {
   public create (data: T) : void {
        console.log("Creating teacher: " + data);
    }
    public read (data: T) : void {
        console.log("Reading teacher: " + data);
    }
    public update(data: T) :void {
        console.log("Updating teacher: " + data);
    }
    public delete(data: T) : void{        
        console.log("Deleting teacher: " + data);
    }
}