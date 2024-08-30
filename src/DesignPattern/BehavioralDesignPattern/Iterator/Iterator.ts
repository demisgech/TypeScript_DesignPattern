
export interface Iterator<T> {
    next():void;
    current():T;
    hasNext():boolean; 
}