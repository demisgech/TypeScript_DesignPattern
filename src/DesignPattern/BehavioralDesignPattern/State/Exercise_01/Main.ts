import { CourseCRUDOpeation } from "./CourseCRUDOperation";
import { Operation } from "./Operation";
// import { StudentCRUDOpeation } from "./StudentCRUDOperation";
// import { TeacherCRUDOpeation } from "./TeacherCRUDOperation";

class Main {
    public static main():void {
     const operation = new Operation<string>();
     operation.operation = new CourseCRUDOpeation<string>();
     operation.create("information goes here...");
     operation.update("information goes here...");
     operation.read('information goes here...');
     operation.delete('information goes here...');
    }
}

Main.main();