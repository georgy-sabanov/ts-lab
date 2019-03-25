abstract class Animal {
    protected readonly numerOfLegs: number = 8;
    abstract greet(): string;

    constructor(numberOfLegs: number) {     
        this.numerOfLegs = numberOfLegs;      
    }
}

class Dog extends Animal {
    greet() {
        return "bark";
    }
    
    static sit() {
    }

    constructor() {
        super(4);
    }
}

const dog = new Dog();
Dog.sit();
console.log(dog.greet());
