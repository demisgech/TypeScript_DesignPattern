// import { BrowseHistory } from "./BrowseHistory";
import { Iterator } from "./Iterator";

export class ArrayIterator implements Iterator {
    next(): void {
        console.log("next");
        ;
    }
    current(): string {
        return "current";
    }
    hasNext(): boolean {
        return false;
    }
  
}