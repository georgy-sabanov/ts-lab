interface Face {
    numEyes: number;
}

class HumanFace implements Face {
    numEyes: number = 2;
}

class SpiderFace implements Face {
    numEyes: number = 8;
}

function doubleEyes<T extends Face>(face: T): T {
    face.numEyes = face.numEyes * 2;
    return face;
} 

const doubleFace = doubleEyes(new SpiderFace());

class FaceOff<T extends Face> {
    constructor(face: T) {
        this.face = face;
    }
    face: T;
    off() {
        this.face.numEyes = 0;
    }
}

const faceClass = new FaceOff(new HumanFace());