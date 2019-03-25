/** optional parameters */
function concatinate(a: string, b?:string) {
    if(b){
        return `${a} ${b}`;
    }
    return a;
}
console.log(concatinate("a"));
console.log(concatinate("a", "b"));

/** defautl parameters */
function concatinate1(a: string, b:string = "b") {
    return `${a} ${b}`;
}
console.log(concatinate1("a"));


/** Overloads */
function flip(x: string): number;
function flip(x: number): string;
function flip(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "string") {
        return parseInt(x);
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        return x.toString();
    }
}

const numResult: number = flip("5");
/** NOP */
//const strResult: string = flip("5");
const stringResult: string = flip(5);


/** rest parameters */
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

buildName("Georgy", "Sabanov", "Victorovich");