"use strict";
var Messaggging;
(function (Messaggging) {
    function greet(title, name) {
        console.log(`Hello ${title} ${name}`);
    }
    Messaggging.greet = greet;
    class Chat {
        constructor() {
        }
        chatter() {
            console.log("Chatter");
        }
    }
    Messaggging.Chat = Chat;
})(Messaggging || (Messaggging = {}));
//# sourceMappingURL=Mathematics.js.map