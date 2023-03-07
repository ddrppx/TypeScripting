var score = [];
var names = [];
function testOne(value) {
    // boolean or number
    return value;
}
function testTwo(value) {
    // Anything
    return value;
}
function testThree(value) {
    // Input type
    return value;
}
testThree(1); // Returns number
testThree("Ok"); // Returns string
testThree(true); // Returns boolean
// Shortcut version
function testFour(value) {
    return value;
}
var water = {
    brand: "Coca Cola",
    type: 2
};
testFour(water); // Returns type Bottle
