function swapType(x: number | string) : number | string {
    if (typeof x == "string") {
        return parseInt(x);
    }
    return x.toString();
}

/** NOP */
//const swappedType: number = swapType("5");