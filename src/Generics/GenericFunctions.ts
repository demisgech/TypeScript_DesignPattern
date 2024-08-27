function showValue<T>(value:T){
    console.log(value);
}
showValue<string>("Hello world");
showValue<number>(12);

function wrapInArray<T>(values:T[]) {
    for(const value of values)
        console.log(value);
}
wrapInArray<number>([1,2,4,3]);

class ArrayUtils {
     wrapInArray<T>(values:T[]) {
        for(const value of values)
            console.log(value);
    }
}

let utils = new ArrayUtils();
utils.wrapInArray<string> (['Demis',"Abebe",'Dereje'])

