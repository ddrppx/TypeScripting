function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "".concat(name, ", ").concat(email, ", Paid: ").concat(isPaid);
}
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "...";
};
var cars = ["VW", "BMW", "Volvo"];
cars.map(function (car) {
    return "Car: ".concat(car);
});
console.log(addTwo(5));
console.log(getUpper("pedro"));
console.log(signUpUser("pedro", "pe@dro.com", false));
console.log(signUpUser("ph", "p@h.com"));
