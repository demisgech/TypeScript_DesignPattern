var circle = {
    radius: 1,
    pi: 3.14,
    draw: function () {
        console.log("Draw");
    },
};
circle.draw();
var Messagging;
(function (Messagging) {
    var chat = {
        id: 1,
        content: "Welcome"
    };
    console.log(chat.content);
})(Messagging || (Messagging = {}));
var number = 12;
