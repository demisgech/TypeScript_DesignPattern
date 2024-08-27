const small = 1;
const medium = 2;
const large = 3;

enum Size {
    small,
    medium,
    large
}
const size = Size;

let sizes = Size
// sizes.large = 12; 
console.log(sizes[0]);
const enum MySize {
    small = 's',
    medium ='m',
    large = 'l'
}