type Circle = {
    radius: number,
    readonly pi: number,
    draw: () => void
};

const circle: Circle = {
    radius: 1,
    pi: 3.14,
    draw() {
        console.log("Draw");
    },

};


circle.draw();

class Animal {
    eat() {
        console.log('Eating....')
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

const animal: Animal = new Animal();
animal.eat()

const bird: Bird = new Bird();
bird.eat();
bird.fly();
