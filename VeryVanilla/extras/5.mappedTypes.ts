type Readonly1<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial1<T> = {
    [P in keyof T]?: T[P];
}

interface TestInterface {
    prop1: string;
    prop2: number;
}

/**NOP */
//const reglar: TestInterface = { prop1: "lalal" }
const partial: Partial<TestInterface> = { prop1: "lalal" }

const regular1: TestInterface = { prop1: "wololo", prop2: 3 };
regular1.prop2 = 5;

const readOnly: Readonly<TestInterface> = { prop1: "lalala", prop2: 8 };
/** NOP */
//readOnly.prop2 = 6; 