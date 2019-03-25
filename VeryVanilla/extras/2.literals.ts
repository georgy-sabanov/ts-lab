type strLit = "this" | "that";

function testStrLit(x: strLit) {
    return x.toString();
}

testStrLit("this");
/** NOP */
//testStrLit("nop");

type numLit = 3 | 5;

function testLitfunc() : numLit {
    return 3;
}

/** NOP */
// function testLitfunc() : numLit {
//     return 1;
// }