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
            console.log("Chatting...");
        }
    }
    Messaggging.Chat = Chat;
})(Messaggging || (Messaggging = {}));
//# sourceMappingURL=Messaging.js.map