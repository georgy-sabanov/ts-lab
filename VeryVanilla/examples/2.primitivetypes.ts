/** boolean */
const testBool: boolean = false;
const testBool1 = false;

/** number */
const testNum : number = 123;
const testNum2 = 123;

/** string */
const testString : string = "lalalal";
const testString2 = "lelelel";

/** array */
const stringArr: string[] = ["A", "B", "C"];
const stringArr2 = ["A", "B", "C"];

/** object */
const testObj = {
    prop1: "lala",
    prop2: 123
}

/** null/undefined */
const x = undefined;
const y = null;

/** any */
let anyType: any = "a";
anyType = 123;
anyType = ["fef", "efef"];
anyType = { foo:"bar" };

/** void */
function voidFunc(): void {
    //return "a";
}

/** never */
function neverFunc() : never{
    throw(Error("lalalala"))
}

