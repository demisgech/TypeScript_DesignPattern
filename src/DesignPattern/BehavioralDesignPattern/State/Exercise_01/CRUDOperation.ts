export interface CRUDOperaion<T> {
  create:(data:T)=>void;
  read:(data:T)=>void;
  update:(data:T)=>void;
  delete:(data:T)=>void;
}