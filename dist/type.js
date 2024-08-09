"use strict";
const circle = {
    radius: 1,
    pi: 3.14,
    draw() {
        console.log("Draw");
    },
};
circle.draw();
class Animal {
    eat() {
        console.log('Eating....');
    }
}
class Bird extends Animal {
    fly() {
        console.log('Flying....');
    }
}
class Fish extends Animal {
    swim() {
        console.log('Swimming...');
    }
}
const animal = new Animal();
animal.eat();
const bird = new Bird();
bird.eat();
bird.fly();
//# sourceMappingURL=type.js.map