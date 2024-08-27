"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
const size = Size;
let sizes = Size;
console.log(sizes[0]);
//# sourceMappingURL=type_enum.js.map