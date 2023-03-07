const score: Array<number> = [];
const names: Array<string> = [];

function testOne(value: boolean | number): boolean | number {
    // boolean or number
    return value
}

function testTwo(value: any): any {
    // Anything
    return value
}

function testThree<Type>(value: Type): Type {
    // Input type
    return value
}

testThree(1); // Returns number
testThree("Ok"); // Returns string
testThree(true); // Returns boolean

// Shortcut version
function testFour<T>(value: T): T {
    return value
}

interface Bottle {
    brand: string,
    type: number
}

const water: Bottle = {
    brand: "Coca Cola",
    type: 2
}

testFour(water); // Returns type Bottle
