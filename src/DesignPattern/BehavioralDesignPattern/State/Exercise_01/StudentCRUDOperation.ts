import { CRUDOperaion } from "./CRUDOperation";

export class StudentCRUDOpeation<T> implements CRUDOperaion<T> {
    public  create (data: T) : void {
        console.log("Creating student: " + data);
    }
    public  read (data: T) : void {
        console.log("Reading studen:: " + data);
    }
    public update(data: T) :void {
        console.log("Updating student: " + data);
    }
    public  delete(data: T) : void{        
        console.log("Deleting student: " + data);
    }
}