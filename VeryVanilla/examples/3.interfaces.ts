interface Person {
    readonly name: string;
    age: number;    
    occupation?: string;
    greet?() : string; 
}

function printPerson(person: Person) {
    console.log(person.name);
    console.log(person.occupation);
    console.log(person.age);
}

printPerson({ name: "Georgy", age: 31, greet: ()=> { return "hello"; }});
printPerson({ name: "Georgy", age: 31, occupation: "Unemployed"});

/** not ok */
//printPerson({ name: "Georgy", age: 31, lala:"" });

/**OK */
const person = { name: "Georgy", age: 31, lala:"" };
printPerson(person);

/** not ok */
const person1: Person = { name: "Georgy", age: 31};
//person1.name = "lalal";


/** extending */
interface Dude extends Person {
    favoriteDrink: string;
}

/** Function types */
interface Lefunc {
    (person: Person): boolean;
}
const isAwesome: Lefunc = (person) => {
    return person.name === "Georgy";
}

/** Spread */
const person3: Person = { name: "The Dude", age: 40, occupation: "unemployed" };
const theDude: Dude = { favoriteDrink: "White Russian", ...person3 };