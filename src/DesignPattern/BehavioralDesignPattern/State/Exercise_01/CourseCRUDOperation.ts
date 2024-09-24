import { CRUDOperaion } from "./CRUDOperation";

export class CourseCRUDOpeation<T> implements CRUDOperaion<T> {
    public create (data: T) : void {
        console.log("Creating Course: " + data);
    }
    public read (data: T) : void {
        console.log("Reading Course: " + data);
    }
    public update(data: T) :void {
        console.log("Updating Course: " + data);
    }
    public  delete(data: T) : void{        
        console.log("Deleting Course: " + data);
    }
}